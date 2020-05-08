<template>
  <div class="register-form">
    <h1>Registration</h1>
    <p>Could you fill next fields, please</p>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="submitHandler"
      ref="signupForm"
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
          autocomplete="off"
        />
      </ElFormItem>

      <ElFormItem
        label="Confirm password"
        prop="repeatpassword"
        size="small"
      >
        <ElInput
          v-model="formData.repeatpassword"
          type="password"
          autocomplete="off"
        />
      </ElFormItem>

      <div class="form-action">
        <ElButton
          type="success"
          plain
          size="small"
          native-type="submit"
          :loading="signupInProgress"
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
  name: 'SignupForm',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.formData.repeatpassword !== '') {
          this.$refs.signupForm.validateField('repeatpassword');
        }
        callback();
      }
    };

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.formData.password) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return ({
      formData: {
        email: '',
        password: '',
        repeatpassword: '',
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
        password: [
          {
            validator: validatePass,
            trigger: 'blur',
            required: true,
          },
        ],
        repeatpassword: [
          {
            validator: validatePass2,
            trigger: 'blur',
            required: true,
          },
        ],
      },
    });
  },
  computed: {
    ...mapGetters('auth', ['signupInProgress']),
  },
  methods: {
    ...mapActions('auth', ['signup']),
    submitHandler() {
      this.$refs.signupForm.validate((isValid) => {
        if (!isValid) return;
        this.signup({ ...this.formData });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .register-form {
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
