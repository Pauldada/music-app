<template>
  <div class="topNav">

    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>

    <div class="topContent">
      <ul>
        <li
            v-for="item in navList"
            :key="item.name"
            @click="navClick(item.path)"
            :class="{active: isActive(item.path)}"
        >
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="updateSearchShow">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>

    <van-popup
        v-model:show="searchShow"
        position="top"
        :style="{
          height: '90%',
          width: '100%',
        }"
        round="round"
    >
      <SearchView
      />
    </van-popup>

  </div>

</template>

<script>
import {mapMutations, mapState} from "vuex";
import SearchView from "@/views/SearchView";

export default {
  name: "TopNav",
  data(){
    return{
      navList:[
        {path: '/mine',name:'我的'},
        {path: '/',name:'发现'},
        {path: '/mura',name:'云村'},
        {path: '/video',name:'视频'},
      ]
    }
  },
  methods:{
    navClick(path){
      this.$router.push(path)
    },
    isActive(path) {
      if (path === this.$route.path) {
        return true;
      }
      return path === '/find' && this.$route.path === '/';

    },
    ...mapMutations(['updateSearchShow'])
  },
  computed:{
    ...mapState(['searchShow'])
  },
  components:{
    SearchView
  }
}
</script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .topContent ul{
    height: 100%;
    display: flex;
    justify-content: space-around;
    // align-items: center;
    font-size: .36rem;

    li{
      margin: 5px 10px;
    }
    .active {
      font-weight: 900;
    }
  }
}
</style>
