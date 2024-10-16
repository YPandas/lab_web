<template>
    <div class="research-page">
        <div class="research-image"></div>
        <div class="MLproject-container">
            <ProjectCards
            title="Gene and Protein-Gene Interaction Networks and Inference"
            text="In a series of papers, my group introduced the framework of Network Component Analysis (NCA) which uses gene expression data and protein-gene interaction data, both obtained from Microarray assays, to reconstruct activity profiles of Transcription Factors that regulate how much and which genes get expressed under different situations. The NCA is now a popular tool that researchers in bio-informatics and molecular biology use worldwide.  The NCA is a data-driven analysis tool that allows a priori knowledge to be incorporated, and works much better than the other commonly used tools for dimensionality reduction, such as Principal Component Analysis (PCA) or Independent Component Analysis (ICA).
            <br><br>The related papers were published in  the Proc. Of the National Academy of Sciences (PNAS) (2003) and (2004) and the IEEE/ACM Trans. On Bioinformatics and Computational Biology (2005)."
            :image="ProjectImage"
            />
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
        ProjectImage
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
        height: 20%;
        background-image: url('../../assets/research/background.jpg');
        background-size: cover;
        background-position: center;
        box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.2);
    }
    .MLproject-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3%;
    }
}
</style>
