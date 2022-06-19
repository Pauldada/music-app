<template>
  <MusicTop :playlist="state.playlist"/>
  <MusicList :itemlist="state.itemlist" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from "vue";
import {getMusicItemList,getItemList} from "@/axios/api/API-ItemMusic";
import MusicTop from "@/components/item/MusicTop";
import MusicList from "@/components/item/MusicList";

export default {
  name: "ItemMusic",
  setup(){
    const state = reactive({
      playlist: {},                               //歌单的详情页的数据
      itemlist: [],                               //歌单的歌曲
    });
    onMounted(async ()=>{
      let id = useRoute().query.id                //获取ID

      let res1 = await getMusicItemList(id); // 获取歌单详情页
      // console.log(res1);
      state.playlist = res1.data.playlist;

      let res2 = await getItemList({id,limit:31,offset:0})  // 获取歌单所有曲目
      // console.log(res2)
      state.itemlist = res2.data.songs

      //酱数据存入session，以防止网页刷新导致数据加载渲染不同步
      // sessionStorage.setItem('itemDetail',JSON.stringify(state))
    })
    return{state}
  },
  components:{
    MusicTop,MusicList
  }
}
</script>

<style scoped>

</style>
