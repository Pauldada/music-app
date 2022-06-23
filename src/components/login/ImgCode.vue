<template>
<div class="img-code">
  <a>请使用 网易云音乐app 扫描下方二维码</a>

  <div class="img-box">
    <img src="" id="qrImg">
  </div>
</div>
</template>

<script>
import {getCodeImg, getCodeImgStatus, getCodeKey, getLoginStatus} from "@/axios/api/API-Home";
import {onMounted, reactive} from "vue";
import {mapMutations} from "vuex";

export default {
  name: "ImgCode",
  methods:{
    ...mapMutations(['updateIsLogin'])
  },
  setup(){
    const state = reactive({
      res:''
    })
    onMounted(async ()=>{
      let timer
      let timestamp = Date.now()
      const cookie = localStorage.getItem('cookie')
      // console.log(cookie)
      const result = await getLoginStatus(cookie)
      // console.log(result.data,null,2)
      let code = await getCodeKey()
      const key = code.data.data.unikey
      let res = await getCodeImg(key)
      document.querySelector('#qrImg').src = res.data.data.qrimg
      // console.log(key)

      timer = setInterval(async ()=>{
        const statusRes = await getCodeImgStatus(key)
        // console.log(statusRes.data)
        if (statusRes.code === 800) {
          alert('二维码已过期,请重新获取')
          this.updateIsLogin(true)
          clearInterval(timer)
        }
        if (statusRes.code === 803) {
          // 这一步会返回cookie
          clearInterval(timer)
          alert('授权登录成功')
          this.updateIsLogin(true)



          await this.getLoginStatus(statusRes.cookie)
          localStorage.setItem('cookie', statusRes.cookie)
        }
      },3000)
    })
  }
}
</script>

<style scoped>
.img-code{
  width: 100%;
  height: 100%;
  background: white;
}
.img-box{
  width: 180px;
  height: 180px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
}
a{
  width: 360px;
  position: absolute;
  font-size: 18px;
  top: 50%;
  left: 50%;
  transform:translate(-42%,-500%);
}
</style>