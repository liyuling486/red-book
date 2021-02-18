<template>
  <div id="app">
    <router-view/>
    <bottomNav />
  </div>
</template>

<script>
import bottomNav from './views/layout/bottomNav'
export default {
  components: {
    bottomNav
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
