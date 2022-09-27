<template>
  <div>
    <router-link to="/"
      ><van-icon name="arrow-left" class="icon"
    /></router-link>
    <input type="text" placeholder="标题..." class="bt" v-model="title" />
    <hr />
    <input type="text" placeholder="内容..." class="nr" v-model="content" />
    <router-link to="/"><button @click="push({title,content})" class="btn">保存</button></router-link>
    <div class="dd">{{ list }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: mapState({
    ...mapState(["list"]),
  }),
  methods: {
    ...mapMutations(["push"]),
  },
};
</script>

<style scoped>
.bt {
  width: 100vw;
  border: none;
  border-bottom: 1px solid orange;
  position: absolute;
  top: 50px;
}
.nr {
  width: 100vw;
  border: none;
  position: absolute;
  top: 80px;
}
.icon {
  cursor: pointer;
}
.btn {
  position: absolute;
  top: 0;
  right: 20px;
}
.dd{
    position: absolute;
    bottom: 80px;
}
</style>