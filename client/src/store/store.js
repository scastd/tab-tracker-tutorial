import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },

  mutations: {
    setToken(state, token) {
      state.token = token;

      state.isUserLoggedIn = !!token;
    },

    setUser(state, user) {
      state.user = user;
    },

    clearUserData(state, data) {
      state.user = data;
      state.token = data;
      state.isUserLoggedIn = false;
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },

    setUser({ commit }, user) {
      commit('setUser', user);
    },

    clearUserData({ commit }) {
      commit('clearUserData', null);
    }
  }
});
