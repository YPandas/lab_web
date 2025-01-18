<template>
    <div class="research-page">
        <div class="research-image">
            <div class="overlay"></div>
            <div class="image-text">
                <div class="text-content">
                    Building on my pioneering work in the mid 1990's on learning using Artificial Neural Networks, which incidentally has made a comeback as the much-hyped framework of Deep Learning, I have focused on learning from what I refer to as
                </div>
                <div class="highlighted-text">
                    Internet-Scale Data Sets
                </div>
                <div class="text-content">
                    or what others refer to as Big Data.
                </div>
            </div>
        </div>
        <div class="MLproject-container">
            <ProjectCards
            title="Gene and Protein-Gene Interaction Networks and Inference"
            text="In a series of papers, my group introduced the framework of Network Component Analysis (NCA) which uses gene expression data and protein-gene interaction data, both obtained from Microarray assays, to reconstruct activity profiles of Transcription Factors that regulate how much and which genes get expressed under different situations. The NCA is now a popular tool that researchers in bio-informatics and molecular biology use worldwide.  The NCA is a data-driven analysis tool that allows a priori knowledge to be incorporated, and works much better than the other commonly used tools for dimensionality reduction, such as Principal Component Analysis (PCA) or Independent Component Analysis (ICA).
            <br><br>The related papers were published in  the Proc. Of the National Academy of Sciences (PNAS) (2003) and (2004) and the IEEE/ACM Trans. On Bioinformatics and Computational Biology (2005)."
            :image="ProjectImage"
            />
        </div>
        <div class="MLtable-container">
            <div class="MLtable-title">OTHER PAPERS</div>
            <el-table
            :data="tableData"
            border
            stripe
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
                prop="date"
                label="Date"
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
</template>

<script>

import ProjectCards from '@/components/ProjectCards.vue';
import ProjectImage from '@/assets/research/mlp1.png';

export default {
  name: 'MLPage',
  components: {
    ProjectCards
  },
  data () {
    return {
        ProjectImage,
        tableData: [
          {
            title: 'Distributed Resource Sharing in Low-Latency Wireless Ad Hoc Networks',
            authors: 'Rezaei, B., Sarshar, N., Roychowdhury, V.',
            journal: 'IEEE/ACM Transactions on Networking',
            date: 'February 2010',
            details: '18(1):190-201'
          },
          {
            title: 'Covariance selection for non-chordal graphs via chordal embedding',
            authors: 'Dahl, J., Vandenberghe, L., Roychowdhury, V.',
            journal: 'Optimization Methods and Software',
            date: 'August 2008',
            details: '23(4):501-520'
          },
          {
            title: 'Distributed Parallel Support Vector Machines in Strongly Connected Networks',
            authors: 'Lu, Y., Roychowdhury, V., Vandenberghe, L.',
            journal: 'IEEE Transactions on Neural Networks',
            date: 'July 2008',
            details: '19(7):1167-1178'
          },
          // ... continue with other papers in the same format
        ]
    }
  }
}
</script>

<style scoped lang="less">
.research-page {
    height: 100vh;
    width: 100%;
    .research-image {
        width: 100%;
        height: 60vh;
        background-image: url('../../assets/research/background.jpg');
        background-size: cover;
        background-position: center;
        box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.2);
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 60%;
            background: rgba(0, 0, 0, 0.5); // Semi-transparent black overlay
            z-index: 0;
        }

        .image-text {
            position: relative; // Ensure text stays above overlay
            z-index: 1; // Place text above overlay
            text-align: center;
            color: rgb(0, 0, 0);
            padding: 0 20%;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            top: 9%;
            
            .text-content {
                font-size: 1.6em;
                line-height: 1.6;
                margin-bottom: 1em;
                font-family: "Open Sans", Arial, sans-serif;
                color: white;
            }
            
            .highlighted-text {
                font-size: 2.8em;
                font-weight: 700;
                margin: 0.5em 0;
                color: white;
                font-family: "Open Sans", Arial, sans-serif;
            }
        }
    }
    .MLproject-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3%;
    }
    .MLtable-container {
        padding: 5% 10%;
        font-family: "Open Sans", Arial, sans-serif;
        .MLtable-title {
            font-size: 2.5em;
            font-weight: 900;
            color: var(--theme-color);
            margin-bottom: 5%;
        }
        :deep(.el-table) {
            font-size: 14px;
            .el-table__header-wrapper th {
                background-color: #f5f7fa;
                font-weight: bold;
            }
        }
    }
}
</style>
