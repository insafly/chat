<template>
  <div class="reset-form">
    <h1>Password reset</h1>
    <p>Enter your email, please</p>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="submitHandler"
      ref="resetForm"
    >
      <ElFormItem
        label="Email"
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email" />
      </ElFormItem>

      <div class="form-action">
        <ElButton
          type="success"
          plain
          size="small"
          native-type="submit"
          :loading="resetInProgress"
        >
          SignUp
        </ElButton>
      </div>

      <RouterLink :to="{ name: 'Login' }">
        <ElLink type="primary">&lt; Back to Login</ElLink>
      </RouterLink>
    </ElForm>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ResetForm',
  data: () => ({
    formData: {
      email: '',
    },
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
    },
  }),
  computed: {
    ...mapGetters('auth', ['resetInProgress']),
  },
  methods: {
    ...mapActions('auth', ['reset']),
    submitHandler() {
      this.$refs.resetForm.validate((isValid) => {
        if (!isValid) return;
        this.reset({ ...this.formData });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .reset-form {
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
