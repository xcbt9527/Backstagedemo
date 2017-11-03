<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="password"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  Vue.use(VueResource);
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        password: ''
      }
    },
    methods: {
      addUser() {
        this.$http.post('/api/user/login', {username: this.userName, password: this.password}, {}).then((response) => {
          console.log(response.body);
        })
      }
    }
  }
</script>
