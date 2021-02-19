<template>
  <div class="list">
    <div class="item"
      v-for="(item, index) in list"
      :key="index">
      <img v-if="index%3" class="itemImg" :src="item.img1">
      <img v-else class="itemImg" :src="item.img2">
      <div class="title">{{ item.ctitle }}</div>
      <div class="bottom">
        <div class="user">
          <img class="head" :src="item.img2">
          {{ item.cname }}
        </div>
        <div class="collection" @click="handleColl(index)">
          <van-icon v-if="!item.collection" name="like-o" style="margin-right:2px"/>
          <van-icon v-else name="like" color="#f00" style="margin-right:2px;" />
          <span>{{ item.num }}</span>
        </div>
      </div>
    </div>
  </div>
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
    }
  },
  methods: {
    handleColl (index) {
      this.$emit('handleColl', index)
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