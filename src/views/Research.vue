<template>
    <div class="research-page">
        <div class="research-image"></div>
        <div class="research-cards-container">
            <div class="research-cards-first">
                <IntroCard
                title="Machine Learning and Applications"
                :image="mlImage"
                text="Building on my pioneering work in the mid 1990's on learning using Artificial Neural Networks, which incidentally has made a comeback as the much-hyped framework of Deep Learning, I have focused on learning from what I refer to as
                Internet-Scale Data Sets
                or what others refer to as Big Data."
                link="/research/ML"
                />
                <IntroCard
                title="Statistical and Mathematical Social Science"
                :image="mlImage"
                text="The Roychowdhury group has initiated a new area of study.  We  Explore The means by which to use publicly available trace data (from search engines & the internet) that is related to human behavior & perception.  In effect, we discover 
                stochastic models of the propagation of information, fame & sentiments in society
                . We employ analytical tools from statistical physics, Bayesian statistics & applied mathematics."/>
                <IntroCard
                title="Complex Emergent / Network Science"
                :image="mlImage"/>
            </div>
            <div class="research-cards-second">
                <IntroCard
                title="Quantum Computing"
                :image="mlImage"/>
                <IntroCard
                title="Artificial Neural Networks"
                text="We looked at a number of fundamental issues in this field, including  the
                capacity of Neural Networks to both learn and compute,
                and
                online learning
                algorithms using stochastic gradient algorithms. For example,
                we studied the role of depth, which is now a critical parameter in Deep Learning.
                We showed how depth plays a critical role in determining the size of a network, and also in ensuring the emergence of certain patterns."
                :image="mlImage"/>
                <IntroCard
                title="Narrative Modeling"
                text=""
                :image="mlImage"/>
            </div>
        </div>
    </div>
</template>

<script>

import IntroCard from '@/components/IntroCard.vue';
import mlImage from '@/assets/research/ml.png';

export default {
  name: 'ResearchPage',
  components: {
    IntroCard
  },
  data () {
    return {
        mlImage
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
        background-image: url('../assets/research/background.jpg');
        background-size: cover;
        background-position: center;
        box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.2);
    }
    .research-cards-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 5%;
        width: 100%;
        > * {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            > * {
                margin-bottom: 5%;
                margin-right: 7vw;
            }
        }
    }
}

</style>
