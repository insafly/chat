<template>
  <div class="log-in-form">
    <h1>Welcome</h1>
    <p>Welcome to the life chat! Please login to join.</p>
    <!-- ref - связка для валидации - ссылка на вью компонент -->
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="submitHandler"
      ref="loginForm"
    >
      <ElFormItem
        label="Email"
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email" />
      </ElFormItem>

      <ElFormItem
        label="Password"
        prop="password"
        size="small"
      >
        <ElInput
          v-model="formData.password"
          type="password"
          :show-password="true"
        />
      </ElFormItem>

      <RouterLink :to="{ name: 'ForgotPassword' }">
        <ElLink type="info">Forgot password? Reset password.</ElLink>
      </RouterLink>

      <div class="form-action">
        <ElButton
          type="success"
          plain
          size="small"
          native-type="submit"
          :loading="loginInProgress"
        >
          Login
        </ElButton>
      </div>

      <RouterLink :to="{ name: 'SignUp' }">
        <ElLink type="primary">Don't have account? Sign up.</ElLink>
      </RouterLink>
    </ElForm>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// mapActions(nameOfStore, [ names of methods as strings ])

export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    // правила для валидации элемент-ui
    rules: {
      email: [
        {
          required: true,
          message: 'Enter email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Enter correct email address',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Enter password',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters('auth', ['loginInProgress']),
  },
  methods: {
    ...mapActions('auth', ['login']), // { login: f() }
    submitHandler() {
      // console.log(this.$refs.loginForm);

      this.$refs.loginForm.validate((isValid) => {
        if (!isValid) return;
        this.login({ ...this.formData });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-form {
    color: rgba(0, 0, 0, .5);
    font-size: 14px;
    min-width: 350px;

    h1 {
      margin: 0 0 20px;
    }
    p {
      margin: 0 0 30px;
    }
    .form-action {
      padding: 10px 0 30px;
    }
  }

  a.el-link:after {
    display: none;
  }
</style>
