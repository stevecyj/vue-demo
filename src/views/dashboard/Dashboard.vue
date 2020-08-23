<template>
  <div>
    <h2>這裡是管理頁面</h2>
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 取得 token 的 cookies（注意取得的時間點）
      // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      const api = `${process.env.VUE_APP_APIPATH}api/auth/check`;
      this.$http
        .post(api, {
          api_token: this.token,
        })
        .then((res) => {
          console.log(res);
          this.checkSuccess = true;
        })
        .catch((err) => {
          console.log(err.response);
          // 驗證失敗時，回到登錄頁
          this.$router.push('/login');
        });
    },
  },
};
</script>
