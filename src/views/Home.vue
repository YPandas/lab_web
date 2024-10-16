<template>
    <div class="home-container">
      <div class="home-intro">
        <div class="intro-text">
          Machine Learning for<br>
          <span class="dynamic-text">
            {{ displayedText }}<span class="cursor">|</span>
          </span>
        </div>
        <div class="intro-subtext">
          The most exciting advances in today's world emerge from the dynamic union of diverse knowledges as captured through a common & interacting set of computational principles. This affects quantum computer design, the size of our cellphones, and even the way in which we care for our children. These advances are both described by & enabled through our work to create interdiscinplinary models of our realities.
          <br><br>Our work taps into the energy generated wherever diverse fields intersect. It not only describes their synergy, it catalyzes their transformation.
        </div>
        <div class="intro-button">
          <JumpButton
            text="SEE OUR WORK"/>
        </div>
      </div>
      <div class="intro-cards">
        <IntroCard
          title="TEAM"
          :image="teamImage"
          text="We are faculty, staff, postdocs and students from technical and clinical backgrounds across the UCLA Schools of Engineering and Medicine."
          container_color="transparent"/>
          <IntroCard
          title="TEAM"
          :image="teamImage"/>
          <IntroCard
          title="TEAM"
          :image="teamImage"/>
      </div>
    </div>
</template>

<script>
import JumpButton from '@/components/JumpButton.vue';
import IntroCard from '@/components/IntroCard.vue';
import teamImage from '@/assets/team.svg';

export default {
  name: 'HomePage',
  components: {
    JumpButton,
    IntroCard
  },
  data() {
    return {
      words: ['Brain.', 'Network Science.', 'Quantum Computing.'],
      currentWordIndex: 0,
      displayedText: '',
      isDeleting: false,
      typingSpeed: 200,
      deleteSpeed: 100,
      pauseTime: 2000,
      teamImage,
    }
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const fullText = this.words[this.currentWordIndex];
      if(!this.isDeleting) {
        //typing
        this.displayedText = fullText.substring(0, this.displayedText.length + 1);
        if(this.displayedText === fullText) {
          setTimeout(() => {
            this.isDeleting = true;
            this.startTyping();
          }, this.pauseTime);
        } else {
          setTimeout(this.startTyping, this.typingSpeed);
        }
      } else {
        //deleting
        this.displayedText = fullText.substring(0, this.displayedText.length - 1);
        if(this.displayedText.length === 0) {
          this.isDeleting = false;
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
          setTimeout(this.startTyping, this.typingSpeed)
        } else {
          setTimeout(this.startTyping, this.deleteSpeed);
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  height: 100vh;
  .home-intro {
    width: 100%;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(0, 0, 0), rgba(0, 0, 0, 0) 20%), url('@/assets/home-background.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);
    .intro-text {
      color: white;
      font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
      font-size: 8vh;
      font-weight: 600;
      position: relative;
      top: 17%;
      text-shadow: 0em 0.1em 0.1em #000000;
      width: 62vw;
      .dynamic-text {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        border-right: 0.15em solid transparent;
        color: #ffcf46;
        .cursor {
          animation: blink 1s infinite;
          width: 0.15em;
        }
      }
    }
    .intro-subtext {
      color: white;
      font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
      font-size: 2vh;
      font-weight: 600;
      position: relative;
      top: 20%;
      text-shadow: 0em 0.1em 0.1em #000000;
      width: 62vw;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 2vh;
      line-height: 1.7em;
    }
    .intro-button {
      position: relative;
      top: 25%;
      align-self: flex-start;
      margin-left: 17vw;
    }
  }
  .intro-cards {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5vh;
  }
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

</style>
