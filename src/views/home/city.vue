<template>
  <div class="wrap">
    <List :list="listData" @handleColl="handleColl" />
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
      listData: []
    }
  },
  methods: {
    getList () {
      this.$store.dispatch('home/news.list').then(res => {
        this.listData = res.data
      })
    },
    handleColl (index) {
      this.$set(this.listData[index], 'collection', !this.listData[index].collection)
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style scoped>
.wrap {
  height: 100%;
  padding: 4px;
  background: #FAFAFA;
  overflow-y: auto;
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