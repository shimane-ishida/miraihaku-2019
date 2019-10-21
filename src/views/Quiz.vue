<template>
  <div>
    <div class="container">
      <div v-if="this.$route.params.q != 11">
        <overlay :title="title" :show="isShow" :text="text" />
        <div class="box">
          <h1 class="is-size-3 ">問題 {{ this.$route.params.q}}.</h1>
          <p class="is-size-4">{{ quiz.q }}</p>
        </div>
        <div class="columns">
          <div class="column">
            <router-link :to="{name:'anq' ,params: {mode: this.$route.params.mode, q: Number(this.$route.params.q), index: quiz.index, ans: '1'}}">
              <a><img :src="'/static/' + quiz.ans1" alt="回答画像１"></a>
            </router-link>
          </div>
          <div class="column">
            <router-link :to="{name:'anq' ,params: {mode: this.$route.params.mode, q: Number(this.$route.params.q), index: quiz.index, ans: '2' }}">
              <a><img :src="'/static/' + quiz.ans2" alt="回答画像１"></a>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <section class="section">
          <div class="box">
            <h1 class="is-size-1"><router-link :to="{name:'end', params: {mode: this.$route.params.mode,}}">最終結果を表示（クリックしてね）</router-link></h1>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
const ADULT = "adult"
const CHILDREN = "children"

export default {
  data: function(){
    return{
      quiz: {},
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
    
  },
}
</script>

<style scope>
  .container{
    margin-left: 6px;
    margin-right: 6px;
  }
</style>