<template>
  <van-list
    class="list"
    @load="onLoad">
    <div
      class="item"
      v-for="(item,index) in list"
      :key="index"
      @click="index1=index">
      <van-image fit="contain" :src="item.img" lazy-load />
      <div class="box">
        <div class="title">{{ item.ctitle }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="cost">
          <div class="costNum">￥{{ item.cost }}</div>
          <div v-if="item.stage" class="costBadge"> {{ item.stage }} </div>
          <div v-if="item.voidCost" class="voidCost">￥{{ item.voidCost }}</div>
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
    }
  },
  methods: {
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
  height: 20px;
  background: #F31735;
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 4px;
  margin: 0 4px;
  transform: scale(0.8);
}
.voidCost {
  font-size: 14px;
  text-decoration: line-through;
  color: #9A9A9A;
}
</style>