<template>
  <van-list
    class="list"
    @load="onLoad">
    <div class="item"
      v-for="(item, index) in list"
      :key="index">
      <img class="itemImg" :src="item.img" v-lazy="img">
      <div class="title">{{ item.ctitle }}</div>
      <div class="bottom">
        <div class="user">
          <img class="head" :src="item.img1" v-lazy="img">
          {{ item.cname }}
        </div>
        <div class="collection" @click="handleColl(index)">
          <van-icon v-if="!item.collection" name="like-o" style="margin-right:2px"/>
          <van-icon v-else name="like" color="#f00" style="margin-right:2px;" />
          <span>{{ item.num }}</span>
        </div>
      </div>
    </div>
  </van-list>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      refreshing: false,
    }
  },
  methods: {
    handleColl (index) {
      this.$emit('handleColl', index)
    },
    onLoad () {
      this.$emit('onLoad')
    }
  }
}
</script>
<style scoped>

.list {
  column-count: 2;
  column-width: 50%;
  column-gap: 4px;
}

.item {
  break-inside: avoid;
  background: #fff;
  margin-bottom: 4px;
  border-radius: 4px;
  overflow: hidden;
}

.itemImg {
  width: 100%;
}

.title {
  font-size: 14px;
  letter-spacing: 1px;
  padding: 2px 10px 6px;
  font-weight: bold;
}

.bottom {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.head {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 6px;
}

.user {
  display: flex;
  align-items: center;
  font-size: 10px;
}

.collection {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #454545;
}
</style>