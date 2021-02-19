<template>
  <div style="height: 100vh">
    <div class="row">
      <div class="icon">
        <van-icon size="30" name="manager-o" />
      </div>
      <van-tabs v-model="active" class="middleTab">
        <van-tab
          v-for="(item, index) in tabs"
          :key="index"
          :title="item.name"
          :to="item.path"
        ></van-tab>
      </van-tabs>
      <div class="icon">
        <van-icon size="30" name="search" />
      </div>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      tabs: [{
        name: '关注',
        path: 'follow'
      }, {
        name: '发现',
        path: 'find'
      }, {
        name: '杭州',
        path: 'city'
      }]
    }
  },
  mounted () {
    this.$router.push('/home/find')
  }
};
</script>

<style>
.row {
  display: flex;
  padding: 4px 10px;
  border-bottom: 1px solid #e8e8e8;
}

.view {
  height: calc(100% - 104px);
}

.icon {
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.middleTab {
  flex: 1;
  padding: 0 20px;
}

.middleTab .van-tab {
  font-size: 16px;
}

.van-tab.van-tab--active {
  font-size: 18px;
  font-weight: bold;
}
</style>