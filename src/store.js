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
      state.AdultQuizs.forEach(e => {
        e.done = true
      });
      state.ChildrenQuizs.forEach(e => {
        e.done = true
      });
    },
    setQuizs(state, data){
      if(data.mode == "adult"){
        state.AdultQuizs = data.quiz
      }else if(data.mode == "children"){
        state.ChildrenQuizs = data.quiz
      }
    }
  },
  getters: {
    doneAdultQuizs: state => {
      //未回答クイズの取得
      return state.AdultQuizs.filter(quiz => !quiz.done)
    },
    doneChildrenQuizs: state => {
      //未回答クイズの取得
      return state.ChildrenQuizs.filter(quiz => !quiz.done)
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    key: 'projMiraihaku'
  })] // この行でvuexに「vuex-persistedstate」を追加
})
