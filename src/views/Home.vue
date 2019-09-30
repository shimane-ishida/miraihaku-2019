<template>
  <div>
    <div class="title">
      公共交通クイズ
    </div>
    <div class="columns">
      <div class="column">
        <div v-if="isClickA">
          <router-link :to="{name: 'quiz', params: {mode: 'adult', q: 1}}">
            <div class="card column-h has-background-info">
              <p class="center-p">おとな編</p>
            </div>
          </router-link>
        </div>
        <div v-else>
          <div class="card column-h has-background-info">
            <p class="center-p">おとな編</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div v-if="isClickC">
          <router-link :to="{name: 'quiz', params: {mode: 'children', q: 1}}">
            <div class="card column-h has-background-danger">
              <p class="center-p">こども編</p>
            </div>
          </router-link>
        </div>
        <div v-else>
          <div class="card column-h has-background-danger">
            <p class="center-p">こども編</p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <router-link to="/import/csv/adult">おとな編CSVデータ読み込み</router-link>
      </div>
      <div class="column">
        <router-link to="/import/csv/children">こども編CSVデータ読み込み</router-link>
      </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function(){
    return {
      isClickA: false,
      isClickC: false,
    }
  },
  mounted(){
    //回答データと問題データのクリア
    this.$store.commit('finish');

    //問題文がインポートされているかどうか
    this.isClickA = this.$store.state.AdultQuizs.length > 0 ? true : false
    this.isClickC = this.$store.state.ChildrenQuizs.length > 0 ? true : false
  },
}
</script>

<style scope>
  .title {
    font-size: 8rem;
  }
  .column-h{
    height: calc(100vh - 260px);
    margin: 10px;
  }
  .center-p{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform : translate(-50%,-50%);
    transform : translate(-50%,-50%);
    text-align: center;/*一応BOX内の文字も中央寄せ*/
    font-size: 5rem;
  }
</style>
