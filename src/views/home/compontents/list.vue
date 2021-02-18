<template>
  <div class="list">
    <div class="item"
      :style="{height: Math.random()*100+'px', background: '#f00'}"
      v-for="(item, index) in list"
      :key="index">
      <img src="" alt="">
      <div class="title"></div>
      <div class="bottom">
        <div class="user"></div>
        <div class="collection"></div>
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
<style>

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