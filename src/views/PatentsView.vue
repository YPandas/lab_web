<template>
    <div class="patents-page">
        <div class="patents-container">
            <div class="patents-title">PATENTS</div>
            <div class="table-container">
                <el-input
                    v-model="searchQuery"
                    placeholder="Search..."
                    style="margin-bottom: 20px; width: 300px;"
                ></el-input>
                <el-table
                    :data="filteredPatents"
                    border
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="title"
                        label="Title"
                        min-width="70%">
                        <template #default="scope">
                            {{ scope.row.title }}
                            <span v-if="scope.row.number">, {{ scope.row.number }}</span>
                            <el-link 
                                v-if="scope.row.pdf" 
                                :href="scope.row.pdf"
                                type="primary"
                                style="margin-left: 10px"
                                target="_blank"
                            >
                                PDF
                            </el-link>
                            <el-link 
                                v-if="scope.row.pdf2" 
                                :href="scope.row.pdf2"
                                type="primary"
                                style="margin-left: 5px"
                                target="_blank"
                            >
                                PDF2
                            </el-link>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'PatentsView',
    data() {
        return {
            searchQuery: '',
            patents: [
                {
                    title: "Methods and apparatus for enhancing gray scale images",
                    number: "US 5604545 A",
                    pdf: "#"
                },
                {
                    title: "Method and apparatus for electronically distributing audio recordings",
                    number: "US Patent App. 09/858,587",
                    pdf: "#"
                },
                {
                    title: "Algorithmic Cooling",
                    number: "US 6,873,154 B2",
                    pdf: "#"
                },
                {
                    title: "Malware mutation detector",
                    number: "US Patent App. 11/537,443",
                    pdf: "#"
                },
                {
                    title: "Behavioral Targeting For Tracking, Aggregating, And Predicting Online Behavior",
                    number: "US Patent App. 12/476,205",
                    pdf: "#"
                },
                {
                    title: "Method and apparatus for optimizing long term revenues in online auctions",
                    number: "Application US 12/130,171",
                    pdf: "#"
                },
                {
                    title: "Identifying related concepts of URLs and domain names",
                    number: "US Patent 8,417,695",
                    pdf: "#"
                },
                {
                    title: "Generating a conceptual association graph from large-scale loosely-grouped content",
                    number: "US9,110,985",
                    pdf: "#"
                },
                {
                    title: "Discovering Relevant Concept And Context For Content Node",
                    number: "Application US 12/436,748",
                    pdf: "#"
                },
                {
                    title: "Systems and methods for building a universal multimedia learner",
                    number: "US 8,463,756 B2 & US8949198 B2",
                    pdf: "#",
                    pdf2: "#"
                },
                {
                    title: "Methods and systems for building a universal dress style learner",
                    number: "US 9020250B2",
                    pdf: "#"
                },
                {
                    title: "Methods and Systems for Discovering Styles Via Color and Pattern Co-Occurrence",
                    number: "Application US 13/312,752",
                    pdf: "#"
                },
                {
                    title: "Concept-Level User Intent Profile Extraction And Applications",
                    number: "US 20140067535 A1",
                    pdf: "#"
                },
                {
                    title: "Search Monetization Of Images Embedded In Text",
                    number: "US 20150262255 A1",
                    pdf: "#"
                }
            ]
        }
    },
    mounted() {
        // Animate title
        gsap.from('.patents-title', {
            scrollTrigger: {
                trigger: '.patents-title',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });

        // Animate table container
        gsap.from('.table-container', {
            scrollTrigger: {
                trigger: '.table-container',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
    },
    computed: {
        filteredPatents() {
            const query = this.searchQuery.toLowerCase()
            return this.patents.filter(patent => {
                return patent.title.toLowerCase().includes(query) ||
                       patent.number.toLowerCase().includes(query)
            })
        }
    }
}
</script>

<style scoped lang="less">
.patents-page {
    min-height: 100vh;
    width: 100%;
    font-family: "Open Sans", Arial, sans-serif;
    
    .patents-container {
        padding: 15vh 15% 5%;
        
        .patents-title {
            font-size: 2.5em;
            font-weight: 900;
            color: var(--theme-color);
            margin-bottom: 5%;
        }
    }
}
</style>
