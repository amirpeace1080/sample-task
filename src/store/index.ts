import { createStore } from "vuex";
import Promise from "promise";
import axios from "axios";

// const mainurl = "'https://jsonplaceholder.typicode.com";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    show_city() {
      return new Promise((resolve) => {
        axios({
          url: `https://jsonplaceholder.typicode.com/users`,
          method: "GET",
        }).then((resp) => {
          resolve(resp);
        });
      });
    },
  },
  modules: {},
});
