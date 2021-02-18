<template>
  <div class="wrap">
    <List :list="listData" />
  </div>
</template>
<script>
import List from './compontents/list'
export default {
  components: {
    List
  },
  data () {
    return {
      listData: [{},{},{},{},{},{},{},{},{},{}]
    }
  },
  methods: {
    getList () {
      this.$store.dispatch('home/news.list').then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    console.log('mounted', this.$store)
    this.getList()
  }
}
</script>
<style>
.wrap {
  height: 100%;
  padding: 4px;
  background: #FAFAFA;
}

.list {
  column-count: 2;
  column-width: 50%;
  column-gap: 4px;
}

.item {
  margin-bottom: 4px;
  border-radius: 4px;
}
</style>