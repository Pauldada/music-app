<template>
<div class="img-code">
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>