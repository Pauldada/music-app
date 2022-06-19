<template>
  <div class="app">
    <img src="../src/assets/background.png" alt="" class="bgimg">
    <TopNav/>
    <router-view/>
    <MusicControl/>
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav";
import MusicControl from "@/components/MusicControl";
export default {
  components:{
    TopNav,
    MusicControl
  }
}
</script>

<style lang="less">
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(2px);
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  width: 100%;
  height: 100%;
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>
