<template>
  <div class="musicControl">

    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt=""/>
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>

    <div class="footerRight">
      <svg
          class="icon liebiao"
          aria-hidden="true"
          @click="play"
          v-if="isbtnShow"
      >
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>

      <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>

      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>

    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "MusicControl",
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"])
  }
}
</script>

<style lang="less" scoped>
.musicControl {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;

  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }

  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>
