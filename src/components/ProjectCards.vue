<template>
    <div class="project-card-wrapper" ref="projectCard">
        <div class="project-left">
            <div class="project-title">{{ title }}</div>
            <div class="project-text" v-html="text"></div>
        </div>
        <div class="project-right">
            <img :src="image" class="project-image" alt="Project SVG"/>
            <div class="project-button">
                View Project
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectCard',
  components: {
  },
  mounted() {
    this.setUpAnimation();
  },
  methods: {
    setUpAnimation() {
        const projectCard = this.$refs.projectCard;
        //设置title和text的动画
        gsap.from(projectCard.querySelector('.project-title'), {
            scrollTrigger: {
                trigger: projectCard,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 60,
            opacity: 0,
            duration: 1.3,
            ease: "Power2.easeInOut",
        });

        gsap.from(projectCard.querySelector(".project-text"), {
            scrollTrigger: {
            trigger: projectCard,
            start: "top 80%",
            toggleActions: "play none none none",
            },
            y: -50, // 从上往下滑动
            opacity: 0,
            duration: 1.3,
            ease: "Power2.easeInOut",
        });

        // 设置 image 和 button 的动画
        gsap.from([projectCard.querySelector(".project-image"), projectCard.querySelector(".project-button")], {
            scrollTrigger: {
            trigger: projectCard,
            start: "top 80%",
            toggleActions: "play none none none",
            },
            x: 150, // 从右往左滑动
            opacity: 0,
            duration: 1.3,
            ease: "Power2.easeInOut",
            stagger: 0.2, // 两个元素的动画时间错开
        });
    }
  },
  props: {
    title: String,
    image: String,
    link: String,
    text: String  
  },
}
</script>

<style scoped lang="less">
.project-card-wrapper {
    display: flex;
    width: 57%;
    font-family: "Open Sans", Arial, sans-serif;
    .project-left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 50%;
        margin-right: 5%;
        .project-title {
            font-size: 2.5em;
            font-weight: 900;
            color: var(--theme-color);
            margin-bottom: 5%;
        }
        .project-text {
            font-size: 1.2em;
        }
    }
    .project-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        .project-image {
            width: 90%;
            height: auto;
            box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.2);
            max-height: 60%;
        }
        .project-button {
            color: #2774ae;
            font-size: 130%;
            margin-top: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            border: 3px solid;
            padding: 0.4em 0.8em;
            cursor: pointer;
            transition: letter-spacing 0.3s ease-in-out, background-color 0.3s ease-in-out;
            &:hover {
                letter-spacing: 0.1em;
            }
        }
    }
}
</style>
