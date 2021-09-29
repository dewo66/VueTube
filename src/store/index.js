import { createStore } from "vuex";
import contact from "./modules/contact";
import axiosGet from "../components/axios/index.vue"
const store = createStore({
  state: {
    mainName: "denemeName"
  },
  mutations: {},
  modules: {
    musteri: contact,
    axiosGet,
  }
});

export default store;
