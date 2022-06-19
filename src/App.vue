<template>
  <TopNav/>
  <router-view/>
  <MusicControl/>
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>
