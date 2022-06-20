<template>
  <div class="home">
    <img src="../../src/assets/background1.png" alt="" class="bgimg">
    <TopSwipe/>
    <ListIcon/>
    <ListMusic/>
    <ListMusicHot/>
  </div>
</template>

<script>
import TopSwipe from "@/components/home/TopSwipe";
import ListIcon from "@/components/home/ListIcon";
import ListMusic from "@/components/home/ListMusic";
import ListMusicHot from "@/components/home/ListMusicHot";
export default {
  name: 'HomeView',
  components: {
    TopSwipe,ListIcon,ListMusic,ListMusicHot
  }
}
</script>

<style>
.bgimg{
  width: 100%;
  height: auto;
}
</style>
