<template>
    <div class="research-page">
        <div class="research-image">
          <div class="overlay"></div>
          <div class="image-text">
              <div class="text-content">
                Since 1998 my work has pioneered several topics, some of which are highlighted below:
              </div>
          </div>
        </div>
        <div class="MLproject-container">
            <ProjectCards
            title="A Proof of the Security of Quantum Key Distribution"
            text="One of the first complete proofs of security of the famous Quantum Key Distribution (QKD) protocol that was originally proposed in 1984. Until our proof, it was not shown to be secure against all and any attack by an all powerful eavesdropper. The first one-time-pad quantum encryption protocol generalized Shannon’s celebrated result (on secret key encryption of classical bits) to the case of quantum states. This most-compact universal and fault tolerant bases for quantum computing, is now referred to as the standard basis, in the widely used and classic book on quantum computing by Chuang and Nielsen."
            :image="ProjectImage1"
            />
            <ProjectCards
            title="Algorithmic Cooling and Scalable NMR Quantum Computers"
            text="I introduced an algorithmic procedure for cooling nuclear spins, referred to as Algorithmic Cooling, where the bulk polarization of a target set of nuclear spins can be increased (hence these spins are “cooled”) without having to cool the temperature of the bath itself. A number of international groups of chemists and physicists have implemented Algorithmic Cooling in their labs and shown its practicability. The related paper was published in the Proceedings of the National Academy of Sciences (PNAS)."
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
            title="Physical Fault Tolerance of Nanoelectronics"
            text="One of my results shows how devices perform error correction naturally (physical fault tolerance), and how it compares to fault-tolerance achieved using circuits. (Published in the Physical Review Letters, in a highlight article by the American Physical Society, and cited in several leading online news organizations) One of the implications of this work is that ultra-small nanodevices will most likely not help in prolonging Moore’s scaling laws, and new approaches, such as brain-inspired computing, are required to take computing and information processing platforms to the next level. One of my ongoing research interests is to explore different brain-inspired models of computation.  "
            :image="ProjectImage4"
            />
            <ProjectCards
            title="Optimal Encryption of Quantum Bits"
            text="READ THE PAPER HERE."
            :image="ProjectImage5"
            />
            <ProjectCards
            title="A New Proof for the Existence of Mutually Unbiased Bases"
            text="READ THE PAPER HERE."
            :image="ProjectImage6"
            />
            <ProjectCards
            title="Electron-Spin-Resonance Transistors for Quantum Computing in Silicon-Germanium Heterostructures"
            text="READ THE PAPER HERE."
            :image="ProjectImage7"
            />
            <ProjectCards
            title="On Universal and Fault-Tolerant Quantum Computing: A Novel Basis and A New Constructive Proof of Universality for Shor's Basis"
            text="READ THE PAPER HERE."
            :image="ProjectImage8"
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
import ProjectImage1 from '@/assets/research/quantum1.jpg';
import ProjectImage2 from '@/assets/research/quantum2.jpg';
import ProjectImage3 from '@/assets/research/quantum3.jpg';
import ProjectImage4 from '@/assets/research/quantum4.jpg';
import ProjectImage5 from '@/assets/research/quantum5.jpg';
import ProjectImage6 from '@/assets/research/quantum6.jpg';
import ProjectImage7 from '@/assets/research/quantum7.png';
import ProjectImage8 from '@/assets/research/quantum8.png';


export default {
  name: 'QuantumPage',
  components: {
    ProjectCards
  },
  data () {
    return {
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
        ProjectImage6,
        ProjectImage7,
        ProjectImage8,
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
            font-size: 2.8em;
            line-height: 1.6;
            margin-bottom: 1em;
            font-family: "Open Sans", Arial, sans-serif;
            color: white;
            font-weight: 600;
          }
          
          .highlighted-text {
              font-size: 2.5em;
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
