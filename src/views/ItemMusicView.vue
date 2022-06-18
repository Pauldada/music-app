<template>
  <MusicTop :playlist="state.playlist"/>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from "vue";
import {getMusicItemList} from "@/axios/api/API-ItemMusic";
import MusicTop from "@/components/item/MusicTop";

export default {
  name: "ItemMusic",
  setup(){
    const state = reactive({
      playlist: {},                            //歌单的详情页的数据
      itemList: [],                            //歌单的歌曲
    });
    onMounted(async ()=>{
      let id = useRoute().query.id
      // console.log(id)

      let res = await getMusicItemList(id); // 获取歌单详情页
      // console.log(res);
      state.playlist = res.data.playlist;

    })
    return{state}
  },
  components:{
    MusicTop
  }
}
</script>

<style scoped>

</style>
