<template>
  <div class="video-box" v-for="item in state.videoList" :key="item">
    <div class="video">
      <video :src="item.data.urlInfo.url" :controls-poster="item.data.coverUrl" style="width: 100%;height: auto" controls/>
    </div>
    <div class="video-text">
      {{item.data.title}}
      <div class="video-creator">
        <div class="creator-left">
          <img :src="item.data.creator.avatarUrl" alt="" class="smimg">
        </div>
        <div class="creator-right">
          <div class="text">
            {{item.data.creator.nickname}}
          </div>
          <div class="ten">
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import {getVideoList} from "@/axios/api/API-Home";

export default {
  name: "VideoView",
  setup(){
    const state = reactive({
      videoList:[]
    });
    onMounted(async ()=>{
      let res = await getVideoList()
      state.videoList = res.data.datas
      console.log(state.videoList)
    })
    return{state}
  }
}
</script>

<style scoped>
.video{
  width: 96%;
  background-color: black;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-top: 8px;
  margin: 0 auto;
  overflow: hidden;
}
.video-text{
  width: 96%;
  background-color: black;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 8px;
  margin: 0 auto 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
}
.video-creator{
  margin-top: 10px;
  padding-left: 6px;
  color: #898989;
  display: flex;
}
.smimg{
  width: 32px;
  height: 32px;
  border-radius: 50px;
}
.creator-right{
  width: 86%;
  margin-left: 12px;
  margin-top: 7px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.ten{
  height: 100%;
  line-height: 100%;
  padding: 0;
  right: 0;
  font-size: 25px;
}
</style>
