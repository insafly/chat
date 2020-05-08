<template>
  <div class="home">
    Home
    <ElButton
      type="danger"
      @click="logoutHandler"
    >
      LogOut
    </ElButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('auth', ['logout']),
    async logoutHandler() {
      await this.logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
