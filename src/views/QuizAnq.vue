<template>
  <div class="container">
    <h1 class="is-size-1">{{ title }}</h1>
    <img :src="'/static/' + quiz.ans_img" alt="正解画像">
    <div v-if="this.$route.params.q != 7">
      <router-link :to="{name:'quiz' ,params: {mode: this.$route.params.mode, q: Number(this.$route.params.q) + 1}}">Next</router-link>
    </div>
    <div v-else>
      <router-link :to="{name:'end', params: {mode: this.$route.params.mode,}}">最終結果表示</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      title: '残念、不正解。正解は、、、',
      quiz:{},
    }
  },
  mounted(){
    if(this.$route.params.mode == "adult"){
      this.quiz = this.$store.getters.getAdultQuizByIndex(this.$route.params.index)
    }else if(this.$route.params.mode == "children"){
      this.quiz = this.$store.getters.getChildrenQuizByIndex(this.$route.params.index)
    }
    if(Number(this.quiz.ans) === Number(this.$route.params.ans)){
      this.title = 'お見事！正解です！'
      //正解数のカウント
      this.$store.commit('increment');
    }
  },
}
</script>

<style scoped>
  img {
    width: 520px;
    height: 390px;
  }
</style>