<template>
  <div class="main">
    <div class="modify_secondgroup" style="margin-top: 5%">
        <span class="regist_bq">昵称/姓名</span>&nbsp&nbsp
        <Input class="modify_secondinp" readonly="readonly"  v-model="name" @on-blur="losephone"  ></Input>
    </div>
    <div class="modify_secondgroup">
      <span class="regist_bq">手&nbsp机&nbsp号</span>&nbsp&nbsp&nbsp&nbsp
      <Input class="modify_secondinp" readonly="readonly"  v-model="phone1"   placeholder="请输入你的手机号码"></Input>
    </div>
    <div class="modify_secondgroup">
      <span class="regist_bq">验&nbsp证&nbsp码</span>&nbsp&nbsp&nbsp&nbsp
      <Input class="modify_secondinp"  v-model="yzm2"  placeholder="请输入你的验证码"></Input>
      <Button class="btn" type="ghost" style="width:120px" v-model="yzm3" v-bind:disabled="dis1" v-on:click="getyzm1">{{yzm}}
      </Button>
    </div>
    <Button type="info" @click='tj2' style="font-size: 17px;margin-left:39% ;width: 25% ; margin-top: 3%;background: #6a4f90;border-color: #6a4f90;height:40px;">提交</Button>
  </div>
</template>
<style>
  .main{
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .modify_secondinp{
    width: 25%;
  }
  .modify_secondgroup{
    margin-left: 35%;
    margin-top: 2%;
    width: 100%;
  }
</style>
<script>
  import div from "./xgpassword.vue"
  import userApi from '../../api/userService'
  export default {
    data () {
      return {
        name:null,
        yzm2: '',
        yzm3: '',
        dis1: false,
        yzm: '获取验证码',
        phone1: null
      }
    },
    created(){
       let vm = this;
       vm.phone1 = vm.$route.query.phoneNo
      vm.name = vm.$route.query.rName
      this.$emit('getbar',1);
    },
    methods: {
      getyzm1: function () {
        var a = Math.random()*900000|0+100000;
        this.yzm3 = parseInt(a)
        var num = 60
        let $vm = this
        this.sendCode();
        var timer = setInterval(function () {
          num--
          if (num === 0) {
            clearInterval(timer)
            $vm.yzm = '获取验证码'
            $vm.dis1 = false
          } else {
            $vm.yzm = num + '秒后重新获取'
            $vm.dis1 = true
          }
        }, 1000)
        /*this.$http.post('' , phone1 , yzm3)*/
      },
      sendCode(){
       userApi.sendCode(this.phone1,this.yzm3).then((response) =>{

        }).catch((response) => {

        })
      },
      tj2: function () {
        if (parseInt(this.yzm2) === this.yzm3 && this.yzm2.length !== 0) {
          this.$emit('getbar',2);

          this.$router.push({path: '/xgpassword/third',query:{phone:this.phone1}})
        } else if (this.yzm2.length === 0 && this.yzm3.length === 0) {
          this.$Notice.error({ title: '请先获取验证码'})
        } else {
          this.$Notice.error({ title: '验证码输入错误'})
        }
      }

    }
  }
</script>
