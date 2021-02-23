<template>
  <div class="wrap">
    <List
      :list="listData"
      @handleColl="handleColl"
      @onLoad="onLoad"/>
  </div>
</template>
<script>
import List from './compontents/list'
import _ from 'lodash'
export default {
  components: {
    List
  },
  data () {
    return {
      listData: [],
    }
  },
  methods: {
    onLoad: _.throttle(function() {
      this.getList(true)
    }, 800),
    getList (flag) {
      this.$store.dispatch('home/news.list').then(res => {
        if (flag) {
          this.listData = this.listData.concat(res.data)
        } else {
          this.listData = res.data
        }
      })
    },
    handleColl (index) {
      this.$set(this.listData[index], 'collection', !this.listData[index].collection)
    }
  },
  mounted () {
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