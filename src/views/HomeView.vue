<template>
  <div class="home">
    <TopSwipe/>
    <ListIcon/>
    <ListMusic/>
  </div>
</template>

<script>
import TopSwipe from "@/components/home/TopSwipe";
import ListIcon from "@/components/home/ListIcon";
import ListMusic from "@/components/home/ListMusic";
export default {
  name: 'HomeView',
  components: {
    TopSwipe,ListIcon,ListMusic
  }
}
</script>
