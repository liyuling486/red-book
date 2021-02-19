<template>
  <van-tabbar v-model="active" active-color="#333">
    <van-tabbar-item to="/">首页</van-tabbar-item>
    <van-tabbar-item>商城</van-tabbar-item>
    <van-tabbar-item icon="add"></van-tabbar-item>
    <van-tabbar-item to="/msg" :badge="badge">消息</van-tabbar-item>
    <van-tabbar-item>我</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      badge: 8
    }
  }
};
</script>

<style>

.van-tabbar-item {
  font-size: 16px!important;
}

.van-tabbar-item .van-info {
  top: -4px;
  left: 6px;
}

.van-tabbar-item--active.van-tabbar-item {
  font-weight: bold;
  font-size: 18px!important;
}
</style>