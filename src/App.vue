<template>
  <div id="app">
    <GlobalHeader />
    <router-view />
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  width: 100%;
}

/* Add global CSS variables */
:root {
  --theme-color: #ffcc00;
}
</style>
