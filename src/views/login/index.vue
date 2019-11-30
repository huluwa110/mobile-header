<template>
  <div class="login">
    <!-- 标题 -->
    <van-nav-bar title="登录" />

    <!-- 登录框 -->
    <van-cell-group>
      <!-- 手机号 -->
      <van-field v-model="user.mobile" clearable label="手机号" placeholder="请输入手机号" />
      <!-- 验证码 -->
      <van-field v-model="user.code" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <!-- 登录按钮 -->
    <div class="btn">
      <van-button type="info" size="large" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

// 引入接口
export default {
  name: 'LoginIndex',
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  creted: {},
  methods: {
    async onLogin () {
      // 加载中
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '努力加载中'
      })
      try {
        const { data } = await request({
          method: 'POST',
          url: '/app/v1_0/authorizations',
          data: this.user
        })
        console.log(data)
        // 加载完成
        this.$toast.success('登陆成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('登陆失败，请检查后重试')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
// .van-nav-bar {
//   background-color: #1989fa;
//   .van-nav-bar__title {
//     color: #fff;
//   }
// }

.login {
  .btn {
    padding: 20px;
  }
}
</style>
