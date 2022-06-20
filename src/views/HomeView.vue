<template>
  <div class="home">
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
