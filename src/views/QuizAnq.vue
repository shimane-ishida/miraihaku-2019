<template>
  <div class="container">
    <router-link :to="{name:'quiz' ,params: {mode: this.$route.params.mode, q: Number(this.$route.params.q) + 1}}"><img :src="'/static/' + quiz.ans_img" alt="正解画像"></router-link>
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
    margin-top: 5px;
    width: 88%;
    height: 88%;
  }
</style>