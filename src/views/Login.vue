<template>
  <div class="login-page">
    <div class="login-form-wrap">
      <div class="login-form-image">
        <img src="@/assets/images/login.jpg" alt="login page">
      </div>
      <div class="login-form">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>
