<template>
  <div>
    <div class="container">
      <h3 class="is-3">CSVインポート</h3>
      <input type="file" @change="fileChange">
      <div>
        <p class="has-text-danger">
          ※注意：既に読み込んだデータがある場合データを上書きします。
        </p>
        <div>
          <a href="/" class="button is-info">戻る</a>
        </div>
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>問題文</th>
              <th>回答画像①</th>
              <th>回答画像②</th>
              <th>正解の番号</th>
              <th>正解の画像ファイル</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="worker in workers" v-bind:key="worker.id">
              <td>{{ worker.no }}</td>
              <td>{{ worker.q }}</td>
              <td>{{ worker.ans1 }}</td>
              <td>{{ worker.ans2 }}</td>
              <td>{{ worker.ans }}</td>
              <td>{{ worker.ans_img }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      workers: [],
    }
  },
  mounted(){
    if(this.$route.params.q == "adult"){
      this.workers = this.$store.state.AdultQuizs;
    }else if(this.$route.params.q == "children"){
      this.workers = this.$store.state.ChildrenQuizs;
    }
  },
  methods:{
    fileChange: function(e){
      const file = e.target.files[0]
      const reader = new FileReader()
      const workers = []
      this.workers= []

      const loadFunc = () => {
        const lines = reader.result.split("\n")
        let index = 1
        lines.forEach(element => {
          const workerData = element.split(",")
          if(workerData.length == 1) return
          //1行目はヘッダなので飛ばす
          if(index != 1) {
            const worker = {
              no: workerData[0],
              q: workerData[1],
              ans1: workerData[2],
              ans2: workerData[3],
              ans: workerData[4],
              ans_img: workerData[5],
              done: false,
            }
            workers.push(worker)
          }
          index++
        })
        this.workers = workers
        const data = {
          mode: this.$route.params.q,
          quiz: workers
        }
        this.$store.commit('setQuizs',data)
      };
      reader.onload = loadFunc
      reader.readAsText(file)
    }
  }

}
</script>