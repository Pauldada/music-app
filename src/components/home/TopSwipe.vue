<template>
  <div id="topSwipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" alt=""/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {reactive, onMounted} from "vue";
import {getBanner} from "@/axios/api/API-Home";

export default {
  name: "TopSwipe",
  setup() {
    const state = reactive({
      images: []
    });
    onMounted(async () => {
      let res = await getBanner()
      // console.log(res)
      state.images = res.data.banners
    })
    return {state};
  },
}
</script>

<style lang="less">
#topSwipe {
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      padding: 0 0.3rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }

    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>
