<template>
<div class="img-code">
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
  background: green;
}
.img-box{

}
</style>