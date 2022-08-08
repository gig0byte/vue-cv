import Vue from "vue";
import Vuex from "vuex";

import { createLogger } from "vuex";

import axios from "axios";

let aPlugins = [],
  bLogStore = process.env.NODE_ENV !== "production";

if (bLogStore) {
  aPlugins.push(createLogger());
}

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: aPlugins,

  state: {
    data: {},

    error: false,

    layout: "",

    isMobile: ""
  },

  actions: {
    getData({ commit }) {
      let link = "/data.json";

      axios.get(link)
        .then(({ data }) => {
          commit("SET_DATA", data);
        })
        .catch(oError => {
          console.log(oError);

          commit("SET_ERROR", true);
        });
    }
  },

  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },

    SET_ERROR(state, bError) {
      state.error = bError;
    },

    SET_LAYOUT(state, layout) {
      state.layout = layout;
    },

    SET_ISMOBILE(state, bIsMobile) {
      state.isMobile = bIsMobile;
    }
  },

  getters: {
    appTitle: state => state.data.title || "Loading...",

    layout: state => state.layout,

    isMobile: state => state.isMobile,

    name: state => state.data.name || "",

    position: state => state.data.position || "",

    photo: state => state.data.photo || "",

    slogan: state => state.data.slogan || "",

    contacts: state => state.data.contacts || [],

    assets: state => state.data.assets || [],

    experience: state => state.data.experience || [],

  },
})
