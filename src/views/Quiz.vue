<template>
  <div>
    <section class="section">
      <div class="container">
          <div v-if="this.$route.params.q != 10">
            <div class="box">
              <h1 class="is-size-2 ">問題 {{ this.$route.params.q}}.</h1>
              <p class="is-size-3">{{ quiz.q }}</p>
            </div>
            <div class="columns">
              <div class="column">
                <figure class="image is-16by9">
                  <img src="/static/{{ quiz.ans1 }}" alt="回答画像１" @click="ansFunc(1)">
                </figure>
              </div>
              <div class="column">
                <figure class="image is-16by9">
                  <img src="/static/{{ quiz.ans2 }}" alt="回答画像２" @click="ansFunc(2)">
                </figure>
              </div>
            </div>
          <!-- 10問回答するまで表示 -->
          <!-- <router-link :to="{name:'quiz' ,params: {mode: this.$route.params.mode, q: Number(this.$route.params.q) + 1}}">次へ</router-link> -->
        </div>
        <div v-else>
          <router-link :to="{name:'anq' ,params: {mode: this.$route.params.mode,}}">最終結果表示</router-link>
        </div>
        <!-- <button class="button" @click="increment">{{count}}</button>
        <button class="button" @click="finish">クリア</button> -->
      </div>
    </section>
  </div>
</template>

<script>
const ADULT = "adult"
const CHILDREN = "children"
export default {
  data: function(){
    return{
      quiz: {}
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted(){
    if(this.$route.params.mode === ADULT){
      this.quiz = this.$store.getters.doneAdultQuizs
    }else if(this.$route.params.mode === CHILDREN){
      this.quiz = this.$store.getters.doneChildrenQuizs
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    finish(){
      this.$store.commit('finish')
    },
    ansFunc(e,args){
      //回答番号
      console.log(args);
      
    }
  },
}
</script>