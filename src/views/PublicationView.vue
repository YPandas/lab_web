<template>
    <div class="publication-page">
        <div class="publication-container">
            <div class="publication-title">PUBLICATIONS</div>
            <div class="table-container">
                <el-input
                    v-model="searchQuery"
                    placeholder="Search..."
                    style="margin-bottom: 20px; width: 300px;"
                ></el-input>
                <el-table
                    :data="filteredPublications"
                    border
                    stripe
                    :default-sort="{prop: 'year', order: 'descending'}"
                    style="width: 100%">
                    <el-table-column
                        prop="title"
                        label="Title"
                        min-width="35%">
                    </el-table-column>
                    <el-table-column
                        prop="authors"
                        label="Authors"
                        min-width="20%">
                    </el-table-column>
                    <el-table-column
                        prop="journal"
                        label="Journal"
                        min-width="20%">
                    </el-table-column>
                    <el-table-column
                        prop="year"
                        label="Year"
                        sortable
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="details"
                        label="Volume & Pages"
                        min-width="15%">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import { publications } from '@/assets/publication/publications.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'PublicationView',
    data() {
        return {
            searchQuery: '',
            publications: publications
        }
    },
    mounted() {
        // Animate title
        gsap.from('.publication-title', {
            scrollTrigger: {
                trigger: '.publication-title',
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
        filteredPublications() {
            const query = this.searchQuery.toLowerCase()
            return this.publications.filter(pub => {
                return pub.title.toLowerCase().includes(query) ||
                       pub.authors.toLowerCase().includes(query) ||
                       pub.journal.toLowerCase().includes(query) ||
                       pub.year.includes(query)
            })
        }
    }
}
</script>

<style scoped lang="less">
.publication-page {
    min-height: 100vh;
    width: 100%;
    font-family: "Open Sans", Arial, sans-serif;
    
    .publication-container {
        padding: 15vh 15% 5%;
        
        .publication-title {
            font-size: 2.5em;
            font-weight: 900;
            color: var(--theme-color);
            margin-bottom: 5%;
        }
    }
}
</style>
