<template>
  <div class="wrap">
    <div class="top">
      <div class="user">
        <div class="imgBox">
          <img src="@/assets/user.jpg" class="img"/>
          <div class="icon">
            <van-icon name="add" size="20" color="#FFE900" />
          </div>
        </div>
        <div class="text">分享瞬间</div>
      </div>
    </div>
    <van-list
      class="list"
      @load="onLoad">
      <div class="item"
      v-for="(item, index) in listData"
      :key="index">
        <div class="itemTop">
          <div class="itemUser">
            <img class="itemUserImg" v-lazy="item.img">
            <span class="itemName">{{ item.cname }}</span>
            <span class="itemTime">{{ item.time }}小时前</span>
          </div>
          <van-icon name="wap-nav" size="20" />
        </div>
        <van-swipe
          class="my-swipe">
          <van-swipe-item
            v-for="(item1, index1) in item.swipe"
            :key="index1">
            <img v-lazy="item1.img">
            </van-swipe-item>
        </van-swipe>
        <div class="itemBottom">
          <div class="share">
            <van-icon name="share-o" size="24"/>
          </div>
          <div class="handle">
            <div @click="handle('like', index)">
              <van-icon v-if="item.like" name="like" size="24" color="#E64A19" class="itemBottomIcon"/>
              <van-icon v-else name="like-o" size="24" class="itemBottomIcon"/>
              <span>{{ item.likeNum }}</span>
            </div>
            <div @click="handle('star', index)">
              <van-icon v-if="item.star" name="star" size="24" color="#FDD835" class="itemBottomIcon"/>
              <van-icon v-else name="star-o" size="24" class="itemBottomIcon"/>
              <span>{{ item.starNum }}</span>
            </div>
            <div>
              <van-icon name="more-o" size="24"/>
              <span>{{ item.moreNum }}</span>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data() {
    return {
      listData: []
    }
  },
  methods: {
    onLoad: _.throttle(function() {
      this.getList(true)
    }, 800),
    getList (flag) {
      this.$store.dispatch('home/news.followList').then(res => {
        if (flag) {
          this.listData = this.listData.concat(res.data)
        } else {
          this.listData = res.data
        }
      })
    },
    handle (type, index) {
      this.$set(this.listData[index], type, !this.listData[index][type])
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.wrap {
  height: 100%;
  overflow-y: auto;
}
.top {
  border-bottom: 1px solid #f2f2f2;
  .user {
    width: 70px;
    padding: 16px 20px;
  }
  .imgBox {
    position: relative;

    .img {
      border-radius: 30px;
    }

    .icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      position: absolute;
      font-size: 26px;
      bottom: 0;
      right: 6px;
      background: #323234;
      border: 4px solid #fff;
    }
  }
  .text {
    font-size: 12px;
    text-align: center;
    margin-top: 4px;
  }
}
.list {
  .itemTop {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    .itemUser {
      display: flex;
      align-items: center;
      .itemUserImg {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .itemName {
        font-size: 14px;
        margin-right: 10px;
      }
      .itemTime {
        font-size: 12px;
        color: #939393;
      }
    }
  }
  .itemBottom {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    .handle {
      display: flex;
      font-size: 16px;
      > div {
        display: flex;
        align-items: center;
        margin-left: 10px;
        .itemBottomIcon {
          transition: 0.5s;
        }
        > span {
          margin-left: 2px;
        }
      }
    }
  }
}
</style>