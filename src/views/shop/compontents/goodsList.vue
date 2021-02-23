<template>
  <div class="list">
    <div
      class="item"
      v-for="(item,index) in list"
      :key="index"
      @click="index1=index">
      <van-image fit="contain" :src="item.img" />
      <div class="box">
        <div class="title">{{ item.ctitle }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="cost">
          <div class="costNum">￥{{ item.cost }}</div>
          <div class="costBadge"> 限时购 </div>
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
  }
}
</script>
<style scoped>
.list {
  /* display: grid;
  grid-row-gap: 6px;
  grid-column-gap: 6px;
  grid-template-columns: repeat(2, calc(50% - 3px)); */
  column-count: 2;
  column-width: 50%;
  column-gap: 4px;
}
.item {
  break-inside: avoid;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.title {
  font-size: 14px;
  font-weight: bold;
  color: #252525;
  margin-bottom: 2px;
}
.desc {
  color: #454545;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.box {
  padding: 4px 8px;
}
.cost {
  display: flex;
  align-items: center;
}
.costNum {
  color: #F31735;
  font-weight: bold;
}
.costBadge {
  height: 16px;
  background: #F31735;
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 2px;
  margin: 0 10px;
}
</style>