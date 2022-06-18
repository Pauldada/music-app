<template>
  <div class="home">
    <TopNav />
    <TopSwipe/>
    <ListIcon/>
    <ListMusic/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav'
import TopSwipe from "@/components/home/TopSwipe";
import ListIcon from "@/components/home/ListIcon";
import ListMusic from "@/components/home/ListMusic";
export default {
  name: 'HomeView',
  components: {
    TopNav,TopSwipe,ListIcon,ListMusic
  }
}
</script>
