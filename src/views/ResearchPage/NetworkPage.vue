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
            title="Design of Efficiently Searchable, Stable, and Ad hoc Unstructured Peer-To- Peer Networks"
            text="I established the science behind the success of P2P overlay networks of many kinds. I addressed issues such as: How could such large global networks emerge from simple and local rules that individual nodes follow? How could these networks be made stable and their structures tuned? And more importantly, how could they be efficiently searched for content? My paper on percolation search received the Best Paper Award at the 4th IEEE International Conference on Peer-To- Peer Computing, held at Zurich, 24-27 Aug. 2004."
            :image="ProjectImage1"
            />
            <ProjectCards
            title="Social Networks and Media"
            text="This is currently a popular research topic in academia, especially in the Electrical Engineering and Computer Science departments. I, however, realized the importance and implications of the underlying issues before even Facebook and Twitter became household names. For example, in papers published in the IEEE Computer Magazine, which has a large readership in the EE and CS communities, I laid out how personal and global email networks can be modeled and how their structures can be exploited to provide services such as spam email identification. This work received considerable media coverage including in Nature, New Scientist, and The Guardian."
            :image="ProjectImage2"
            />
            <ProjectCards
            title="Modeling the Web"
            text="We investigated the emergence of scale-free and the so-called Power 
            Law distributions and structures in different societal networks and also 
            the Self Organized Criticality (SOC) phenomenon observed in complex systems. 
            For example, we studied the emergence of hubs or important web pages in the Internet, 
            and how the associated patterns can be explained by the competing roles played by age/experience and fitness/talent. 
            The related paper, 'Experience versus talent shapes the structure of the Web' was featured on the cover of the Proceedings of the National Academy of Sciences (Sept. 16 2008 issue). It was widely covered by the international media, including by New Scientist (UK/USA), LiveMint (India), The Sudkurier (Germany), and CBC (Canada). Similarly, a related paper was one of the first ones to study what going “viral” means: “A theory of Web traffic” was published in the prestigious European Physics Letters and was covered by several online magazines as well."
            :image="ProjectImage3"
            />
            <ProjectCards
            title="Nash Equilibrium and Online Advertisement"
            text="Online advertisement is the driving force behind the Internet economy 
            that has transformed how producers and service providers market, and how consumers buy products and services. 
            I studied different aspects of the so-called Adword Auctions platform, which is the primary way search engines generate revenues. 
            One of my journal papers, 'Diversiﬁcation in the Internet Economy: The Role of For-Proﬁt Mediators' 
            (ACM SIGecom Exchanges, 7(3):1 - 24 2008) used Nash equilibrium theory to study the role of For-Profit mediators (such as www.lendingtree.com) 
            and how they are needed in the larger eco-system to increase efficiency, and was featured in an IEEE Spectrum article."
            :image="ProjectImage4"
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
import ProjectImage1 from '@/assets/research/statsp1.png';
import ProjectImage2 from '@/assets/research/statsp2.jpg';
import ProjectImage3 from '@/assets/research/statsp3.png';
import ProjectImage4 from '@/assets/research/statsp4.jpg';


export default {
  name: 'NetworkPage',
  components: {
    ProjectCards
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
