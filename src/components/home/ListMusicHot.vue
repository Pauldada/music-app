<template>
  <div class="music-hot">
    <div class="musicTop">
      <div class="title">新歌速递</div>
      <div class="more">查看更多 ></div>
    </div>
  </div>
  <div class="itemMusicList">

    <div class="itemList">
      <div class="item" v-for="(item, i) in state.itemlist" :key="i">
        <div class="itemLeft">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">
              {{ item1.name }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mvid !==0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">

  </div>
</template>

<script>
import {getHotSong} from "@/axios/api/API-Home";
import {onMounted, reactive} from "vue";
import {mapMutations} from "vuex";

export default {
  name: "ListMusicHot",
  props:['itemlist'],
  setup(props){
    const state = reactive({
      itemlist:[]
    });
    onMounted(async ()=>{
      let res = await getHotSong(0)  // 获取歌单所有曲目
      state.itemlist = res.data.data
      // console.log(state.itemlist)
      state.itemlist = state.itemlist.slice(0,20)
    })
    return {state}
  },
}
</script>

<style lang="less" scoped>
.music-hot {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;

  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      border: 2px solid #f5c9ff;
      text-align: center;
      line-height: 0.56rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
      background: rgba(0, 0, 0, 0.40);
      color: white;
    }
  }
}
.itemMusicList {
  width: 92%;
  margin-left: 14px;
  height: 320px;
  overflow: scroll;
  background-color: rgba(199, 184, 184, 0.78);
  padding: 0 0.2rem;
  border-radius: 0.4rem;

  .itemList {
    width: 100%;

    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }

        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }

          span {
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }

          margin-left: 0.3rem;
        }
      }

      .itemRight {
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;

        .icon {
          fill: #999;
        }

        .bofang {
          position: absolute;
          left: 0;
        }

        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
.bottom{
  width: 100%;
  height: 60px;
}
</style>