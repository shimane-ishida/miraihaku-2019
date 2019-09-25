<template>
  <div>
    {{ this.$route.params.q }}
    <button class="button" @click="increment">{{count}}</button>
    <button class="button" @click="finish">クリア</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return{

    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    finish(){
      this.$store.commit('finish')
    }
  },
}
</script>