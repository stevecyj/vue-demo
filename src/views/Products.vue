<template>
  <div>
    <h2>這裡是產品頁</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>
          <!-- 動態路由 -->
          <router-link :to="`/product/${item.id}`">連結</router-link>
        </td>
        <td>
          <button @click="goPage(item)">進入頁面</button>
        </td>
        <td>
          <!-- a 標籤記得加 prevent, 避免路由被 a 標籤蓋掉 -->
          <a href="#" @click.prevent="goPage(item)">進入頁面</a>
        </td>
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
  methods: {
    goPage(item) {
      console.log(this.$router);
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    console.log('UUID:', process.env.VUE_APP_UUID);
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res);
        this.products = res.data.data;
      });
  },
};
</script>
