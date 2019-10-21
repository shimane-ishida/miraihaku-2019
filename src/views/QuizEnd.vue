<template>
  <section class="section">
    <div class="container">
      <!-- 最終結果 -->
      <div class="box">
        <h2 class="is-size-2">最 終 結 果</h2>
        <br>
        <p class="is-size-2">あなたの正解数は...</p>
        <p class="is-size-1">{{ count }}問でした！</p>
      </div>
      <div v-if="isStop">
        <div>
          <img :src="imgsrc" :alt="imgalt">
        </div>
        <router-link to="/">トップへ戻る</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return {
      isStop: false,
      count: 0,
      imgsrc: "/static/kekka0-6.jpg",
      imgalt: "もう少し頑張ろう！"
    }
  },
  mounted(){
    this.roulette()
    //8秒間ランダム表示
    setTimeout(function(){ this.isStop = true}.bind(this),5000)
  },
  methods: {
    roulette(){
      let id = "";
      const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      if(this.isStop){
        //遅延呼び出しを解除
        clearTimeout(id)
        this.count = this.$store.getters.getCount
        if(this.count == 10){
          this.imgsrc = "/static/kekka10.jpg"
          this.imgalt = "全問正解！"
        }else if(this.count > 6){
          this.imgsrc = "/static/kekka7-9.jpg"
          this.imgalt = "惜しい！"
        }
        return false
      }
      this.count = randRange(0,10)
      //自身の呼び出し
      id = setTimeout(this.roulette,100)
    }
  }
}
</script>

<style scoped>
  img {
    width: 60%;
    height: 60%;
  }
</style>