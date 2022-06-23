<template>
<div class="img-code">
  <a>请使用 网易云音乐app 扫描下方二维码</a>

  <div class="img-box">
    <img src="" id="qrImg">
  </div>
</div>
</template>

<script>
import {getCodeImg, getCodeKey} from "@/axios/api/API-Home";
import {onMounted, reactive} from "vue";

export default {
  name: "ImgCode",
  setup(){
    const state = reactive({
      res:''
    })
    onMounted(async ()=>{
      let code = await getCodeKey()
      let res = await getCodeImg(code.data.data.unikey)
      document.querySelector('#qrImg').src = res.data.data.qrimg
      console.log(res)
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