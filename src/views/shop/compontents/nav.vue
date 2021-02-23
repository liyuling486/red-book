<template>
  <div class="list">
    <div
      :class="'item ' + (index1==index?'act':'')"
      v-for="(item,index) in list"
      :key="index"
      @click="index1=index">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="text">
        {{ item.text }}
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      index1: 0,
      list: [{
        title: '推荐',
        text: '猜你喜欢'
      }, {
        title: '新年好运',
        text: '限时抢购'
      }, {
        title: '美妆',
        text: '彩妆香水'
      }, {
        title: '时尚',
        text: '流行穿搭'
      }, {
        title: '配饰',
        text: '箱包配饰'
      }]
    }
  }
}
</script>
<style scoped>
.list {
  display: flex;
  justify-content: center;
}
.item {
  width: 20%;
  text-align: center;
  padding: 0 6px;
  position: relative;
}
.list .item:last-child .line {
  display: none;
}
.list .item:nth-child(2) .title {
  font-weight: bold;
  color: #D81C37;
}
.title {
  font-size: 14px;
  color: #111;
}
.text {
  font-size: 12px;
  color: #939393;
  line-height: 20px;
  border-radius: 10px;
}
.act .title {
  color: #F71836;
}
.act .text {
  color: #fff;
  background: #F71836;
}
.line {
  width: 1px;
  height: 20px;
  right: 0;
  background: #E8E8E8;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>