import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AdultQuizs: [],
    ChildrenQuizs: [],
    count: 0,
  },
  mutations: {
    increment(state){
      //正解数
      state.count++
    },
    finish(state){
      //初期化
      state.count = 0
    }
  },
  getters: {
    AdultQuizs: state => {
      //未回答クイズの取得
      return state.AdultQuizs.filter(quiz => !quiz.done)
    },
    ChildrenQuizs: state => {
      //未回答クイズの取得
      return state.ChildrenQuizs.filter(quiz => !quiz.done)
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    key: 'projMituketa'
  })] // この行でvuexに「vuex-persistedstate」を追加
})
