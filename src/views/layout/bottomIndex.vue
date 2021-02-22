<template>
  <div>
    <router-view/>
    <bottomNav />
  </div>
</template>

<script>
import bottomNav from './bottomNav'
export default {
  components: {
    bottomNav
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$router.push({ name: 'home.find' })
  }
}
</script>

<style>
</style>
