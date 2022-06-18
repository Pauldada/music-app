<template>
  <div class="home">
    <TopNav />
    <TopSwipe/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav'
import TopSwipe from "@/components/home/TopSwipe";
export default {
  name: 'HomeView',
  components: {
    TopNav,TopSwipe
  }
}
</script>
