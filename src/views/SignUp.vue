<template>
  <div class="login-page">
    <div class="login-form-wrap">
      <div class="login-form-image">
        <img src="@/assets/images/signup.jpg" alt="signup">
      </div>
      <div class="login-form">
        <SignupForm />
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'SignUp',
  components: {
    SignupForm,
  },
};
</script>
