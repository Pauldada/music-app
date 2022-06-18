<template>
  <div class="item-music">
    item-music
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from "vue";
import {getMusicItemList} from "@/axios/api/API-ItemMusic";

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
  }
}
</script>

<style scoped>

</style>
