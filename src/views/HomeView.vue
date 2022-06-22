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
import {onMounted, reactive} from "vue";
import {getLoginUser, getLoginYN} from "@/axios/api/API-Home";
import {mapMutations, mapState} from "vuex";
import axios from "axios";
export default {
  name: 'HomeView',
  components: {
    TopSwipe,ListIcon,ListMusic,ListMusicHot
  },
  mounted() {
    axios.get('https://netease-cloud-music-api-two-gray.vercel.app/login/status').then((res)=>{
      this.state.isLoginYN = res.data.data.account;
      console.log('Account', this.state.isLoginYN)
      if ( this.state.isLoginYN == null){
        console.log('you need login!!!!')
        this.updateIsLogin(false)
        let res = getLoginUser(this.id)
        this.$store.commit('updateUser',res)
      } else if ( this.state.isLoginYN.status === 0){
        console.log('login!!!!')
        this.updateIsLogin(true)
      } else if ( this.state.isLoginYN.status === -10){
        console.log('Account danger','you need login!!!!')
        this.updateIsLogin(false)
      }
    })
  },
  computed:{
    ...mapState(['id'])
  },
  setup(a){
    const state = reactive({
      isLoginYN:''
    });
    onMounted(async ()=>{
      // let res = await getLoginYN()

    })
    return{state}
  },
  methods:{
    ...mapMutations(['updateIsLogin'])
  }
}
</script>

<style>
.bgimg{
  width: 100%;
  height: auto;
}
</style>
