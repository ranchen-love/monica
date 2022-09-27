<template>
  <div>
    <input type="text" placeholder="搜索备忘录（标题，内容）" v-model="con" />
    <button @click="search(con)">搜索</button>
    <br />
    <ul>
        <li v-for="(item, ind) in show" :key="ind">
          {{ item.title }}
          <br />
          {{ item.content }}
        </li>
    </ul>
    {{ mm }}
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      con: "",
      index: [],
      str: "",
      searchIndex: [],
      show: [],
      mm: "",
    };
  },
  mounted() {
    this.getStr();
  },
  watch: {
    "this.list"() {
      this.getStr();
    },
  },
  computed: mapState({
    ...mapState(["list", "inList"]),
  }),
  methods: {
    getStr() {
      this.list.forEach((item, index) => {
        this.str = this.str + item.title + index + "*";
        this.str = this.str + item.content + index + "*";
      });
    },
    // !自定义关键字搜索数组
    search(val) {
      this.show = [];
      this.index = [];
      this.searchIndex = [];
      var a = this.str.indexOf(val);
      var b;
      if (a !== -1) {
        b = this.str.indexOf("*", a);
        this.searchIndex.push(b - 1);
      }
      while (a !== -1) {
        a = this.str.indexOf(val, a + 1);
        if (a !== -1) {
          b = this.str.indexOf("*", a);
          this.searchIndex.push(b - 1);
        }
      }
      // console.log(this.searchIndex);
      this.searchIndex.forEach((item) => {
        if (
          this.index.indexOf(this.str.charAt(item)) === -1 &&
          this.con !== this.str.charAt(item)
        ) {
          this.index.push(this.str.charAt(item));
        }
      });
      // console.log(this.index);
      this.index.forEach((item) => {
        if (item) {
          this.show.push(this.list[item]);
        }
        // console.log(this.show);
      });
      if (this.show.length == 0) {
        this.mm = "臭宝，人家没有搜索到哦";
      } else {
        this.mm = "";
      }
      // console.log(this.show);
    },
  },
};
</script>
<style scoped>
input {
  width: 80vw;
  margin: 2vh auto;
}
ul {
  position: absolute;
  top: 50px;
  list-style: none;
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
</style>