<template>
  <div id="app">
    <TheNavbar />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss">
.wrapper {
  @media (min-width: 769px) {
    margin-left: 103px;
    padding: 0 1.5rem;
  }
}
</style>
