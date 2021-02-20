<template>
  <div>
    <!-- <van-skeleton title :row="3" :loading="loading"> -->
    <top />
    <van-image :src="require('@/assets/shop/active.jpg')" />
    <div class="redBoxBg">
      <div class="redBox">
        <div class="redBoxItem"
          v-for="(item,index) in active.active"
          :key="index"
          :style="{backgroundImage:`url(${item.img1})`}">
          <div class="redBoxLeft">
            <div class="redBoxT">{{ item.title }}</div>
            <div class="redBoxS">{{ item.text }}</div>
            <van-image radius="10" class="redBoxRight" :src="item.img2" />
          </div>
          <van-image radius="10" class="redBoxRight" :src="item.img" />
        </div>
      </div>
      <div class="redBoxBottom">
        <van-image radius="10" :src="active.img" />
      </div>
    </div>
    <div class="container">
      <div class="newBox">
        <div class="newItem"
        v-for="(item,index) in active.new"
        :key="index">
          <van-image class="redBoxBottomImg" :src="item.img" />
          <div class="redBoxBottomBox">
            <div class="redBoxBottomTitle">{{ item.title }}</div>
            <div class="redBoxBottomText">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- </van-skeleton> -->
  </div>
</template>
<script>
import top from './compontents/top'
export default {
  components: {
    top
  },
  data () {
    return {
      active: {},
      loading: false
    }
  },
  methods: {
    getActive () {
      this.$store.dispatch('shop/active.active').then(res => {
        this.active = res.data
        console.log(res.data)
        this.loading = true
      })
    }
  },
  mounted () {
    this.getActive()
  }
}
</script>
<style scoped>
.redBoxBg {
  background: #FD2556;
  padding: 4px 0 4px;
  margin-top: -4px;
}
.redBox {
  height: 80px;
  display: flex;
  justify-content: space-evenly;
}
.redBoxItem {
  width: calc(50% - 40px);
  background-size: 100%;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.redBoxT {
  font-weight: bold;
}
.redBoxS {
  font-size: 12px;
  margin: 4px 0;
}
.redBoxBottom {
  padding: 10px 20px 0;
}
.newBox {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-around;
  padding: 10px;
}
.newItem {
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.newBox .newItem:nth-of-type(1) {
  border: 2px solid #64A6E3;
}
.newBox .newItem:nth-of-type(2) {
  border: 2px solid #FF3963;
}
.newBox .newItem:nth-of-type(3) {
  border: 2px solid #FF6146;
}
.newBox .newItem:nth-of-type(1) .redBoxBottomBox {
  background: #64A6E3;
}
.newBox .newItem:nth-of-type(2) .redBoxBottomBox {
  background: #FF3963;
}
.newBox .newItem:nth-of-type(3) .redBoxBottomBox {
  background: #FF6146;
}
.redBoxBottomImg {
  margin: 6px 0;
}
.redBoxBottomBox {
  width: 100%;
  color: #fff;
  text-align: center;
}
.redBoxBottomTitle {
  font-size: 14px;
  font-weight: bold;
}
.redBoxBottomText {
  font-size: 12px;
}
.container {
  background: #F5F5F5;
}
</style>