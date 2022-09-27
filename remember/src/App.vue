<template>
  <div>
    <van-tabbar v-model="active" class="footer">
      <router-link to="/">
        <van-tabbar-item icon="home-o"> 首页 </van-tabbar-item></router-link
      ><router-link to="/about">
        <van-tabbar-item icon="search"> 搜索页 </van-tabbar-item></router-link
      >
      <router-link to="/mine"
        ><van-tabbar-item icon="friends-o"> 我的 </van-tabbar-item></router-link
      >
    </van-tabbar>
    <router-view />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
<style scoped>
.footer{
  display: flex;
  justify-content:space-around;
}
</style>
