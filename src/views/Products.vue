<template>
  <div>
    <h2>這裡是產品頁</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produdts: [],
    };
  },
  created() {
    console.log('UUID:', process.env.VUE_APP_UUID);
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
