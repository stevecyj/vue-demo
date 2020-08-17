<template>
  <div>
    <h2>這是 單一 產品頁面</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    // 屬性 $route
    // 方法 $router
    // console.log(this.$route.params.id);
    // airbnb 要求用解構的方式
    const { id } = this.$route.params;
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        console.log(res);
        this.product = res.data.data;
      });
  },
};
</script>
