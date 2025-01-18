<template>
    <div class="header-container" :class="{ scrolled: isScrolled }">
        <div class="logo-container">
            <img class="ucla-logo" src="@/assets/uclaLogo.png">
            <div class="divider"></div>
            <div class="logo-text">The YLab</div>
        </div>
        <div class="navbar-container">
            <div class="home-button">
                <router-link to="/" class="home-link">
                    HOME
                </router-link>
            </div>
            <div class="about-button">
                <router-link to="/team" class="about-link">
                    ABOUT
                </router-link>
            </div>
            <div class="research-button"
            @mouseover="showResearch = true"
            @mouseleave="showResearch = false"
            >
                <router-link to="/research" class="research-link">
                    RESEARCH
                </router-link>
                <span class="dropdown-arrow"></span>
                <DropDownMenu 
                :menuItems="researchFields" :menuLinks="menuLinks" 
                v-if="showResearch" />
            </div>
            <div class="pub-button">
                <router-link to="/publication" class="pub-link">
                    PUBLICATIONS
                </router-link>
            </div>
            <div class="patent-button">
                <router-link to="/patents" class="patents-link">
                    PATENTS
                </router-link>
            </div>
            <div class="contact-button">CONTACT</div>
        </div>
    </div>
</template>

<script>

import DropDownMenu from './DropMenu.vue';

export default {
    name: 'GlobalHeader',
    components: {
        DropDownMenu
    },
    data() {
        return {
            showResearch: false,
            isScrolled: false,
            researchFields: ['Machine Learning and Applications', 'Statistical and Mathematical Social Science', 'Complex Emergent / Network Science', 'Quantum Computing', 'Artificial Neural Networks', 'Narrative Modeling'],
            menuLinks: ['/research/ML', '/research/Stats', '/research/Network', '/research/Quantum', '/research/ANN', '/research/Quantum'],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-container {
    background-color: black;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    overflow: visible;
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s ease;

    &.scrolled {
        height: 8vh;
        
        .logo-container {
            .ucla-logo {
                height: 3vh;
            }
            .divider {
                height: 7vh;
            }
            .logo-text {
                height: 5vh;
                font-size: 2vh;
            }
        }
        
        .navbar-container {
            div {
                font-size: 1.8vh;
            }
        }
    }

    .logo-container {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        .ucla-logo {
            height: 4vh; /* 约束图片高度为父容器高度的 100% */
            width: auto;
            margin-left: 2vw;
            object-fit: cover;
            margin-top: 2vh;
            margin-bottom: 2vh;
        }
        .divider {
            height: 9vh; // 设置与图片相同的高度
            width: 1px; // 分隔线宽度
            background-color: white;
            margin-left: 1vw; // 与图片的间距
        }
        .logo-text {
            height: 7vh;
            width: 10vw;
            color: white;
            margin-left: 1vw;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
            font-size: 2.4vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    .navbar-container {
        color: white;
        margin-left: auto;
        width: 38%;
        display: flex;
        align-items: center;
        div {
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 2vh;
            margin-right: 1.5vw;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color: white;
        }
        .research-button {
            position: relative;
            display: flex;
            align-items: center;
            height: 10vh;
            .dropdown-arrow {
                display: inline-block;
                margin-left: 0.5em;
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid white;
            }
            .dropdown-menu {
                position: absolute;
                top: 100%; /* 下拉菜单显示在 research-button 的正下方 */
                left: 0;
                z-index: 10; /* 确保下拉菜单位于其他内容之上 */
                height: auto;
                width: 10vw;
            }

        }

    }
}
</style>
