<template>
  <div class="home">
    <TopNav />
    <TopSwipe/>
    <ListIcon/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav'
import TopSwipe from "@/components/home/TopSwipe";
import ListIcon from "@/components/home/ListIcon";
export default {
  name: 'HomeView',
  components: {
    TopNav,TopSwipe,ListIcon
  }
}
</script>
