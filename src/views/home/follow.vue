<template>
  <div>
    <div class="top">
      <div class="user">
        <div class="imgBox">
          <img src="@/assets/user.jpg" class="img">
          <div class="icon">
            <van-icon name="add" size="20" color="#FFE900" />
          </div>
        </div>
        <div class="text">分享瞬间</div>
      </div>
    </div>
    <div class="list">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.top {
  border-bottom: 1px solid #F2F2F2;
}

.user {
  width: 70px;
  padding: 16px 20px;
}

.imgBox {
  position: relative;
}

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

.text {
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
}

</style>