<template>
  <div class="login">
    <div class="loginTop">欢迎登录</div>
    <div class="loginContent">
      <div class="phone">
        <input
            type="text"
            name="phone"
            v-model="phone"
            class="phone-content"
            placeholder="请输入手机号码"
        />
      </div>
      <div class="password">
        <input
            type="password"
            name="password"
            class="password-content"
            v-model="password"
            placeholder="请输入密码"
        />
      </div>
      <button class="btn" @click="Login">登录</button>
    </div>
  </div>
</template>

<script>
import {getLoginUser} from "@/axios/api/API-Home";

export default {
  name: "LoginView",
  data(){
    return{
      phone:'',
      password:''
    }
  },
  methods:{
    Login:async function (){
      let res1 =await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
      // console.log(res1)
      if (res1.data.code === 200){
        this.$store.commit('updateToken',res1.data.token)
        this.$store.commit('updateIsLogin',true)
        let res2 = await getLoginUser(res1.data.account.id)
        this.$store.commit('updateUser',res2)
        await this.$router.push('/mine')
      }else {
        alert("手机号或密码错误！")
        this.password=''
      }
    }
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
        height: 100%;
        margin-left: 30px;
        border: none;
        background: rgba(0, 0, 0, 0);
      }
    }

    .btn{
      width: 3rem;
      height: .8rem;
      border: 0.06rem solid #ffc0cb;
      background-color: #ffc0cb;
      color: white;
      font-size: 18px;
      border-radius: 20px;
    }
  }
}
</style>

