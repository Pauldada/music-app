<template>
  <div class="login">
    <div class="loginTop">欢迎登录</div>
    <div class="loginContent">
      <div class="phone" v-show="!CapShow">
        <input
            type="text"
            name="phone"
            v-model="phone"
            class="phone-content"
            placeholder="请输入手机号码"
        />
      </div>
      <div class="password" v-show="!CapShow">
        <input
            type="password"
            name="password"
            class="password-content"
            v-model="password"
            placeholder="请输入密码"
        />
      </div>
      <div class="phone" v-show="CapShow">
        <input
            type="text"
            name="phone"
            v-model="phone"
            class="phone-content"
            placeholder="请输入手机号码"
        />
        <a>获取验证码</a>
      </div>
      <div class="phone" v-show="CapShow">
        <input
            type="text"
            name="captcha"
            class="phone-content"
            v-model="captcha"
            placeholder="请输入验证码"
        />
      </div>
      <button class="btn-cap" @click="CapShow=true" v-show="!CapShow">短信登陆</button>
      <button class="btn-cap" @click="CapShow=false" v-show="CapShow">手机登陆</button>
      <button class="btn-log" @click="Login">登录</button>
      <button class="btn-img" @click="ImgShow=true">二维码登录</button>
    </div>

    <van-popup
        v-model:show="ImgShow"
        position="top"
        :style="{ height: '50%', width: '100%' }"
        round="round"
    >
      <ImgCode/>
    </van-popup>

  </div>
</template>

<script>
import {getLoginUser, getPhoneLogin} from "@/axios/api/API-Home";
import ImgCode from "@/components/login/ImgCode";
export default {
  name: "LoginView",
  data(){
    return{
      phone:'',
      password:'',
      captcha:'',
      ImgShow:false,
      CapShow:false
    }
  },
  methods:{
    Login:async function (data){
      let res1 =await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
      // data.phone = this.phone
      // data.password = this.password
      // let res1 = await getPhoneLogin(data)
      // console.log(res1)
      if (res1.data.code === 200){
        this.$store.commit('updateToken',res1.data.token)
        this.$store.commit('updateIsLogin',true)
        console.log('Login Success ID',res1.data.account.id)
        this.$store.commit('updateId',res1.data.account.id)
        let res2 = await getLoginUser(res1.data.account.id)
        this.$store.commit('updateUser',res2)
        await this.$router.push('/mine')
      }else {
        alert("手机号或密码错误！")
        this.password=''
      }
    }
  },
  components:{
    ImgCode
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 13.34rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/background4.jpg");
  background-size:100%;
  .loginTop {
    margin-top: 2rem;
    font-size: 1rem;
    color: #ffc0cb;
  }
  .loginContent {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    .phone,
    .password {
      width: 5rem;
      height: .8rem;
      border: 0.06rem solid #ffc0cb;
      border-radius: 40px;
      .phone-content,
      .password-content{
        width: 50%;
        height: 100%;
        margin-left: 30px;
        border: none;
        background: rgba(0, 0, 0, 0);
      }
    }

    .btn-cap{
      width: 3rem;
      height: .8rem;
      border: 0.06rem solid #6be7a3;
      background-color: #6be7a3;
      color: white;
      font-size: 18px;
      border-radius: 20px;
      margin: 2px;
    }
    .btn-log{
      width: 3rem;
      height: .8rem;
      border: 0.06rem solid #ffc0cb;
      background-color: #ffc0cb;
      color: white;
      font-size: 18px;
      border-radius: 20px;
      margin: 2px;
    }
    .btn-img{
      width: 3rem;
      height: .8rem;
      border: 0.06rem solid #8fe0e0;
      background-color: #8fe0e0;
      color: white;
      font-size: 18px;
      border-radius: 20px;
      margin: 2px;
    }
  }
}
</style>

