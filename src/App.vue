<template>
  <router-view/>
  <MusicControl/>
</template>

<script>
import MusicControl from "@/components/MusicControl";
export default {
  components:{
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
