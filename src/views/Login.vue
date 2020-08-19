<template>
  <div>
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          id="inputEmail"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          id="inputPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        登入
      </button>
      <br />
      <button class="btn btn-outline-primary btn-block" type="button" @click="signout">
        登出
      </button>
      <br />
      <button class="btn btn-outline-primary btn-block" type="button" @click="getData">
        取得資料
      </button>
      <p class="mt-5 mb-3 text-muted">
        © 2020~∞ - 六角學院
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}api/auth/login`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token } = response.data;
          const { expired } = response.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)};`;
          this.$router.push('/admin/products');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      console.log('token 已清除');
    },
    getData() {
      // 取得 token 的 cookies（注意取得的時間點）
      // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // API
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products`;
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      this.$http.get(api).then((response) => {
        this.products = response.data.data;
        this.pagination = response.data.meta.pagination;
      });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100vh;
}
body {
  display: flex;
  justify-content: center;
}
form {
  width: 300px;
  padding: 30px 20px;
  // margin-top: 25%;
  margin: 25% auto;
  text-align: center;
  color: #343a40;
  border-radius: 6px;
  // background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0);
}
.form-control {
  background-color: rgba(255, 255, 255, 0.7);
}
.form-control:focus {
  background-color: rgba(255, 255, 255, 0);
  border-color: #343a40;
  box-shadow: none;
}
.btn {
  width: 100%;
  margin-top: 24px;
  padding: 0;
}
.submit {
  color: #f45b30;
  border: 1px solid #f45b30;
  background-color: #fff;
}
.submit:hover,
.submit:focus {
  color: #fff;
  border: 1px solid #f45b30;
  background-color: #f45b30;
  box-shadow: none;
}
</style>
