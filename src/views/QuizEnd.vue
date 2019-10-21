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
        <div v-if="count == 10">
          <img src="/static/kekka10.jpg" alt="全問正解！">
        </div>
        <div v-else-if="count > 7">
          <img src="/static/kekka7-9.jpg" alt="惜しい！">
        </div>
        <div v-else>
          <img src="/static/kekka0-6.jpg" alt="もう少し頑張ろう！">
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