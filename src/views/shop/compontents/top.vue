<template>
  <div>
    <div class="top">
      <div class="topBox">
        <div class="topBoxIcon">
          <van-icon name="orders-o" size="22" />
        </div>
        <div class="topBoxText">订单</div>
      </div>
      <div class="search">
        <van-field
          v-model="value"
          :placeholder="placeholder"
          size="20"
          class="searchField"
        >
          <van-icon name="search" slot="left-icon" size="22" />
        </van-field>
      </div>
      <div class="topBox">
        <div class="topBoxIcon">
          <van-icon name="more-o" size="22" />
        </div>
        <div class="topBoxText">更多</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      placeholder: '大家都在搜"添可拖地机大放价"'
    }
  }
}
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.search {
  height: 40px;
  flex: 1;
}
.searchField {
  background: #F5F5F5;
  border-radius: 20px;
  padding: 6px 10px;
}
.topBox {
  padding: 0 10px;
  font-size: 12px;
}
.topBoxIcon {
  display: flex;
  justify-content: center;
  margin-bottom: 2px;
}
</style>