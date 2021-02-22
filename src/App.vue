<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { JudgeDevice } from './utils'
export default {
  data () {
    return {
    }
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        setTimeout(() => {
          const JudgeDeviceState = JudgeDevice(this.$route)
          if (JudgeDeviceState) {
            this.$router.push(JudgeDeviceState)
          }
        }, 200)
      })();
    }
  }
}
</script>

<style>
</style>
