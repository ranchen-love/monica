<template>
  <div>
    <router-link to="about"
      ><input type="text" placeholder="搜索备忘..." class="inp" />
    </router-link>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="to(index)">
          {{ item.title }} <br />
          {{ item.content }} <br /><button class="del" @click="del(index)">
            删除
          </button>
      </li>
    </ul>
    <router-link to="/cre"
      ><div class="btn">+<br />新建</div></router-link
    >
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const value = ref("");
    return { value };
  },
  computed: mapState({
    ...mapState(["list"]),
  }),
  methods: {
    ...mapMutations(["del"]),
    to(index){
      this.$router.push(
        {path:'/xq',dd:`${index}`}
      )
    }
  },
};
</script>
<style scoped>
.del {
  float: right;
  border-radius: 20px;
}
ul {
  position: absolute;
  top: 50px;
  list-style: none;
  /* border: 1px solid red;
  border-radius: 20px; */
}
li {
  width: 80vw;
  height: fit-content;
  border: 1px solid pink;
  border-radius: 20px;
  margin-top: 10px;
  overflow: hidden;
  text-indent: 2rem;
}
.inp {
  width: 30vw;
  border-radius: 20px;
  position: absolute;
  top: 20px;
}
.btn {
  width: 80px;
  height: 50px;
  text-align: center;
  background-color: orange;
  border-radius: 20px;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
}
</style>