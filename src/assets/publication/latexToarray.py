import bibtexparser
from bibtexparser.bparser import BibTexParser

def format_authors(authors):
    # Handle cases where authors might not be properly formatted
    author_list = authors.split(" and ")
    formatted_authors = []
    for author in author_list[:3]:
        parts = author.split(",")
        if len(parts) == 2:
            formatted_authors.append(f"{parts[0]}, {parts[1][0]}.")
        else:
            formatted_authors.append(author)  # Leave as-is if improperly formatted
    if len(author_list) > 3:
        return ", ".join(formatted_authors) + ", et al."
    return ", ".join(formatted_authors)

def get_publication_details(entry):
    # Extract volume, number, and pages if available
    volume = entry.get('volume', '')
    number = f"({entry.get('number', '')})" if 'number' in entry else ''
    pages = f":{entry.get('pages', '')}" if 'pages' in entry else ''
    return f"{volume}{number}{pages}".strip()

def convert_bib_to_array(bib_file):
    # Create a parser and customize it
    parser = BibTexParser()
    parser.customization = bibtexparser.customization.convert_to_unicode
    # Add 'abstract' to valid entry types
    parser.ignore_nonstandard_types = False

    with open(bib_file, 'r') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file, parser=parser)

    publications = []
    for entry in bib_database.entries:
        # Include 'abstract' in the accepted entry types
        if entry.get('ENTRYTYPE', '').lower() in ['article', 'inproceedings', 'book', 'misc', 'abstract']:
            # For abstract entries, use booktitle as journal if journal is not available
            journal = entry.get('journal', '')
            if not journal and entry.get('ENTRYTYPE', '').lower() == 'abstract':
                journal = entry.get('booktitle', 'Unknown Conference')
            
            publication = {
                'title': entry.get('title', '').replace("{", "").replace("}", ""),
                'authors': format_authors(entry.get('author', '')),
                'journal': journal,
                'year': entry.get('year', ''),
                'details': get_publication_details(entry),
                'url': entry.get('url', entry.get('doi', 'N/A'))
            }
            publications.append(publication)

    # Sort publications by year (newest first)
    publications.sort(key=lambda x: x['year'], reverse=True)
    return publications

# Save the result as a JavaScript file
bib_file_path = 'vwani-bib.bib'
publications = convert_bib_to_array(bib_file_path)

# Convert to JavaScript array format
import json
js_array = f"publications: {json.dumps(publications, indent=4)}"
with open('publications.js', 'w') as js_file:
    js_file.write(js_array)

print("Converted .bib content saved to publications.js")