<template>
    <div class="research-page">
        <div class="research-image">
          <div class="overlay"></div>
          <div class="image-text">
              <div class="text-content">
                We looked at a number of fundamental issues in this field, including  the
              </div>
              <div class="highlighted-text">
                capacity of Neural Networks to both learn and compute,
              </div>
              <div class="text-content">
                and
              </div>
              <div class="highlighted-text">
                online learning
              </div>
              <div class="text-content">
                algorithms using stochastic gradient algorithms. For example,
              </div>
              <div class="highlighted-text">
                we studied the role of depth, which is now a critical parameter in Deep Learning.
              </div>
              <div class="text-content">
                We showed how depth plays a critical role in determining the size of a network, and also in ensuring the emergence of certain patterns. 
              </div>
          </div>
        </div>
        <div class="MLproject-container">
            <ProjectCards
            title="Theoretical Advances in Neural Computation and Learning"
            text="Click here to read the forewords by Bernard Widrow and David E. Rumelhart: &quot;For any research field to have a lasting impact, it must have a theoretical foundation. Neural Networks research is no exception...&quot; This book emphasizes the computational issues in artificial neural networks and compiles a set of pioneering research works, which together establish a general frameowrk for studying the complexity of neural networks and their learning capabilities. This book presents one of the first efforts to highlight these fundamental results, and attempts to provide a unified platform for a theoretical exploration of neural computation. Each chapter is authored by a leading researcher and/or scholar who has made a significant contribution in this area."
            :image="ProjectImage1"
            />
            <ProjectCards
            title="Discrete Neural Computation"
            text="Click here to read the foreword by Marvin Minsky: &quot; This is a wonderful book of stories about the kinds of parallel computers called neural networks. .......&quot;Interest in artificial neural networks has sparked research efforts in many disciplines, including neurobiology, physics, mathematics, computer science, and engineering. To help readers keep pace, this book brings together in one volume the recent developments in discrete neural computation. Discrete Neural Computation: Begins by discussing basic models for discrete neural computation and fundamental concepts in computational complexity
Establishes efficient designs of threshold circuits for computing various functions
Develops techniques for analyzing the computational power of neural models
Whether used as a textbook or reference, Discrete Neural Computation presents an integrated approach designed to promote a better understanding of the foundations of neural computation and stimulate further development."
            :image="ProjectImage2"
            />
            <ProjectCards
            title="Stochastic Gradient Algorithms"
            text="Stochastic Gradient Descent (SGD) Algorithms"
            :image="ProjectImage3"
            />
        </div>
        <div class="MLtable-container">
            <div class="MLtable-title">OTHER PAPERS</div>
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

import ProjectCards from '@/components/ProjectCards.vue';
import ProjectImage1 from '@/assets/research/ann1.jpg';
import ProjectImage2 from '@/assets/research/ann2.jpg';
import ProjectImage3 from '@/assets/research/ann3.jpg';


export default {
  name: 'ANNPage',
  components: {
    ProjectCards
  },
  data () {
    return {
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
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
      height: 90vh;
      background-image: url('../../assets/research/ANNbackground.jpg');
      background-size: cover;
      background-position: center;
      box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.62);
      z-index: -1;
      display: flex;
      justify-content: center;
      align-items: center;

      .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 90%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
      }

      .image-text {
          position: relative;
          z-index: 1;
          text-align: center;
          color: rgb(0, 0, 0);
          padding: 0 10%;
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
