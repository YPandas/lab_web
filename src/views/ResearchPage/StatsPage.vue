<template>
    <div class="research-page">
        <div class="research-image">
          <div class="overlay"></div>
            <div class="image-text">
                <div class="text-content">
                  The Roychowdhury group has initiated a new area of study.  We  Explore The means by which to use publicly available trace data (from search engines & the internet) that is related to human behavior & perception.  In effect, we discover
                </div>
                <div class="highlighted-text">
                  stochastic models of the propagation of information, fame & sentiments in society
                </div>
                <div class="text-content">
                  . We employ analytical tools from statistical physics, Bayesian statistics & applied mathematics.
                </div>
            </div>
        </div>
        <div class="MLtable-container">
            <div class="MLtable-title">RELATED PAPERS</div>
            <el-input
            v-model="searchQuery"
            placeholder="Search..."
            style="margin-bottom: 20px; width: 300px;"
            ></el-input>
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

import ProjectImage1 from '@/assets/research/statsp1.png';
import ProjectImage2 from '@/assets/research/statsp2.jpg';
import ProjectImage3 from '@/assets/research/statsp3.png';
import ProjectImage4 from '@/assets/research/statsp4.jpg';


export default {
  name: 'StatsPage',
  components: {
  },
  data () {
    return {
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        searchQuery: '',
        tableData: [
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
          {
            title: 'A Theory of Web Traffic',
            authors: 'Simkin, M.V., Roychowdhury, V.',
            journal: 'A Letters Journal Explaining the Frontiers of Physics',
            date: 'April 2008',
            details: '82(28006):1-6'
          },
          {
            title: 'Parallel Randomized Sampling for Support Vector Machine and Support Vector Regression',
            authors: 'Lu, Y., Roychowdhury, V.',
            journal: 'Knowledge and Information Systems',
            date: 'January 2008',
            details: '14(2):233-247'
          },
          {
            title: 'An Information Theoretic Exploratory Method for Learning Patterns of Conditional Gene Co-expression from Microarray Data',
            authors: 'Boscolo, R., Liao, J., Roychowdhury, V.',
            journal: 'IEEE Transactions on Computational Biology and BioInformatics',
            date: 'January 2008',
            details: '5(1):15-24'
          }
          // ... continue with other papers ...
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
      background-image: url('../../assets/research/background2.jpg');
      background-size: cover;
      background-position: center;
      box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.61);
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
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
      }

      .image-text {
          position: relative;
          z-index: 1;
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
        padding: 5% 15%;
        font-family: "Open Sans", Arial, sans-serif;
        .MLtable-title {
            font-size: 2.5em;
            font-weight: 900;
            color: var(--theme-color);
            margin-bottom: 5%;
        }
    }
}
</style>
