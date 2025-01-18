<template>
  <div class="app-container">
    <GlobalHeader/>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue';

export default {
  name: 'App',
  components: {
    GlobalHeader
  },
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
  mounted() {
    // 在应用挂载时设置 CSS 变量
    document.documentElement.style.setProperty('--theme-color', this.themeColor);
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* 确保html和body的高度是100% */
}

.app-container {
  position: relative;
  min-height: 100%; /* 使用 min-height 使容器适应整个页面高度 */
  display: flex;
  flex-direction: column;
  z-index: 0;
  position: relative;
  .app-content {
    height: calc(100vh - 10vh);
  }
}
</style>
