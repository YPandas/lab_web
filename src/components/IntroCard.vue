<template>
    <div class="intro-card-wrapper">
        <div class="card-image">
            <img :src="image" class="svg-object" alt="Intro SVG"/>
        </div>
        <div class="card-title">
            {{ title }}
        </div>
        <div class="card-text">
            {{ text }}
        </div>
        <div class="card-button">
            <JumpButtonSub
                :text="title"
                :link="link"
                container_color="transparent"
                text_color="rgb(104 104 104)"/>
        </div>
    </div>
</template>

<script>
import JumpButtonSub from './JumpButtonSub.vue';

export default {
    name: 'IntroCard',
    components: {
        JumpButtonSub
    },
    props: {
        text: String,
        link: String,
        title: String,
        image: String
    }
}
</script>

<style scoped lang="less">
.intro-card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Open Sans", Arial, sans-serif;
    width: 17vw;
    text-align: center;
    .card-image {
        width: 6vw;
        height: 6vw;
        border-radius: 50%;
        background-color: rgb(187, 212, 244);
        display: flex;
        justify-content: center;
        align-items: center;
        .svg-object {
            width: 60%;
        }
    }
    .card-title {
        font-size: 1.6em;
        font-weight: 700;
        color: #282727;
        margin-top: 2vh;
    }
    .card-text{
        height: auto;
        width: 100%;
        margin-top: 15%;
        margin-bottom: 15%;
        line-height: 1.8em;
        font-weight: 600;
    }
}
</style>