<template>
  <div class="login-page">
    <div class="login-form-wrap">
      <div class="login-form-image">
        <img src="@/assets/images/reset.jpg" alt="login page">
      </div>
      <div class="login-form">
        <ResetForm />
      </div>
    </div>
  </div>
</template>

<script>
import ResetForm from '../components/ResetFrom.vue';

export default {
  name: 'ForgotPassword',
  components: {
    ResetForm,
  },
};
</script>
