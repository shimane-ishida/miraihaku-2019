<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        back: false,
        transitionName: 'forward'
      }
    },
    created() {
      window._vue_onpopstate = () => this.onPopState()
      history.pushState(null,null,"/")
      this.$router.beforeEach((to, from, next) => {
        this.transitionName = this.back ? 'backward' : 'forward'
        this.back = false
        // console.log('navigate')
        history.pushState(null,null,"/")
        next()
      })
    },
    methods: {
      onPopState(event) {
        if(!window.confirm('戻るを行う場合は正解数をクリアします')) return
        // console.log('popstate')
        this.$router.go("/")
        this.back = true
      },
      onNavigate() {

      }
    },
  }
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.forward-enter-active, .forward-leave-active {
  transition: opacity .5s
}

.forward-enter, .forward-leave-to {
	opacity: 0
}

</style>
