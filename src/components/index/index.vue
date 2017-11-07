<template>
  <div id="app">
    <header>后台管理系统</header>
    <main>
      <router-link :to="{ name: 'menu'}">menu</router-link>
      <router-view></router-view>
    </main>
    <footer>
      <span>@momo || </span>
      <span>Backstagedemo</span>
    </footer>
  </div>
</template>

<script>
  import menu from "./menu.vue";
  import router from "../../router/soure"
  export default {
    name: 'app',
    router,
    data () {
      return {}
    },
    prop: {},
    components: {
      menu
    },
  }
</script>

<style>

</style>
