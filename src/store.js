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
        e.done = false
      });
      state.ChildrenQuizs.forEach(e => {
        e.done = false
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
      const quiz = state.AdultQuizs.filter(quiz => !quiz.done)
      const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      return quiz[randRange(0,quiz.length-1)]
    },
    doneChildrenQuizs: state => {
      //未回答クイズの取得
      const quiz = state.ChildrenQuizs.filter(quiz => !quiz.done)
      const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      return quiz[randRange(0,quiz.length)]
    },
    getAdultQuizByIndex: state => (index) => {
      let res = state.AdultQuizs.find(quiz => quiz.index === index)
      res.done = true
      return res
    },
    getChildrenQuizByIndex: state => (index) => {
      let res = state.ChildrenQuizs.find(quiz => quiz.index === index)
      res.done = true
      return res
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    key: 'projMiraihaku'
  })] // この行でvuexに「vuex-persistedstate」を追加
})
