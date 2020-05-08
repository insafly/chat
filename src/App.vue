<template>
  <div id="app">
    <Notifier />
    <router-view/>
  </div>
</template>

<script>
import Notifier from '@/components/Notifier.vue';

export default {
  components: {
    Notifier,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.login-page {
  background: #d5e4e4;
  height: 100vh;
  display: flex;
  min-height: 780px;
  justify-content: center;
  align-items: center;
}

.login-form-wrap {
  background-color: #fff;
  max-width: 1200px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  width: 100%;
  box-shadow: 0 30px 90px #a7d7d9;
  height: 600px;
  overflow: hidden;
}

.login-form-image {
  width: 50%;
  overflow: hidden;
}

.login-form-image img{
  width: 100%;
  height: auto;
  display: block;
}

.login-form {
  padding: 20px 20px 20px 40px;
}
</style>
