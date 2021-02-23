<template>
  <vue-waterfall-easy
    :imgsArr="list"
    srcKey="img"
    @scrollReachBottom="onLoad">
    <div class="img-info" slot-scope="item">
      <div class="title">{{ item.value.ctitle }}</div>
      <div class="bottom">
        <div class="user">
          <img class="head" v-lazy="item.value.img1">
          {{ item.value.cname }}
        </div>
        <div class="collection" @click="handleColl(item.index)">
          <van-icon v-if="!item.value.collection" name="like-o" style="margin-right:2px"/>
          <van-icon v-else name="like" color="#f00" style="margin-right:2px;" />
          <span>{{ item.value.num }}</span>
        </div>
      </div>
    </div>
  </vue-waterfall-easy>
</template>
<script>
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  components: {
    vueWaterfallEasy,
  },
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
    },
    onLoad () {
      this.$emit('onLoad')
    }
  }
}
</script>
<style scoped>

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