<template>
  <div>
    <h2>管理後台的 產品頁面</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td><router-link :to="`/product/${item.id}`">看產品</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  props: ['token'],
  created() {
    // 取得 token 的 cookies（注意取得的時間點）
    // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    // 後台管理 api
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products`;
    this.$http.get(url).then((res) => {
      console.log(res);
      this.products = res.data.data;
    });
  },
};
</script>
