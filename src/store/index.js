import Vue from "vue";
import Vuex from "vuex";
import { apiDefaults } from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: localStorage.getItem("userData") || [],
    filterStructure: [],
    searchBy: {
      type: null,
      value: null,
    },
    apiDefaults: apiDefaults,
    endpoints: {
      users: "/users",
    },
  },
  mutations: {
    updateUserData(state, res) {
      console.log("res", res);
      localStorage.setItem("userData", res.userData);
      state.userData = res.userData;
    },
    updateFilterStructure(state, res) {
      console.log("res", res);
      localStorage.setItem("filterStructure", res.filterStructure);
      state.filterStructure = res.filterStructure;
    },
    updateSearchBy(state, res) {
      console.log("res", res);
      localStorage.setItem("searchBy", res.searchBy);
      state.searchBy = res.searchBy;
    },
    resetState(state) {
      state.filterStructure = [];
      state.searchBy = {};
    },
  },
  actions: {
    getUserDetails(context) {
      return context.state.apiDefaults
        .get(context.state.endpoints.users)
        .then((response) => {
          this.commit("updateUserData", {
            userData: response.data,
          });
        });
    },
    searchUser(context, data) {
      this.commit("updateUserData", {
        userData: data,
      });
    },
    applyFilter(context, data) {
      this.commit("updateFilterStructure", {
        filterStructure: data,
      });
    },
    searchBy(context, data) {
      this.commit("updateSearchBy", {
        searchBy: data,
      });
    },
    resetFilters() {
      this.commit("resetState");
    },
  },
  modules: {},
});
