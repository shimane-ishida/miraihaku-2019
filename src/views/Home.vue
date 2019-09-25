<template>
  <div class="home">
    <div class="title">
      公共交通クイズ
    </div>
    <div class="columns">
      <div class="column">
        <router-link to="/adult/1">
          <div class="card column-h has-background-info">
            <p class="center-p">おとな編</p>
          </div>
        </router-link>
      </div>
      <div class="column">
        <router-link to="/children/1">
          <div class="card column-h has-background-danger">
            <p class="center-p">こども編</p>
          </div>
        </router-link>
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

    }
  },
  mounted(){
    
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
    font-size: 6rem;
  }
</style>
