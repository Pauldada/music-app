import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[{
      al: {
        id: 34407365,
        name: "サクラノ詩 サウンドトラックCD",
        pic: 109951166783005200,
        picUrl: "https://p1.music.126.net/jnqRJD_lbRpJCvHFQQc8UQ==/109951166783005206.jpg",
        pic_str: "109951166783005206"
      },
      id: 399366428,
      name: "天球の奇蹟",
      ar: [{name: "松本文紀"}]
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow:true, //播放暂停按钮显隐
    detailShow: false, //歌曲详情页的显示
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
      // console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
  },
  actions: {
  },
  modules: {
  }
})
