<template>
  <div id="topSwipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic"  alt=""/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive,onMounted} from "vue";

export default {
  name: "TopSwipe",
  setup() {
    const state = reactive({
      images: [
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
      ]
    });
    onMounted(()=>{
      axios.get('http://localhost:3000/banner?type=2').then((res)=>{
        state.images = res.data.banners
      })
    })
    return { state };
  },
}
</script>

<style lang="less">
#topSwipe{
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
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
