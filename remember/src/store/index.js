import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { VuexPersistence } from "vuex-persist";
const vuexLocal = new VuexPersistence({
  // localStorage  | sessionStorage
  storage: window.localStorage,
});
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
    state: {
      inList:[1],
      list: [
        {title:'我是标题',content:'我是内容'}
    ]
  },
    mutations: {
        push(state, val) {
            let obj = { title: val.title, content: val.content }
            state.list.push(obj)
        },
        del(state, val) {
                    state.list.splice(val,1)
        },
        // search(state,val) {
        //     state.list.filter((item, index) => {
        //         if (item.title == val || item.content) {
        //                 state.index.push(index)
        //         }
        //     })
        // }
  },
    actions: {},
});