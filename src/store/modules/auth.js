import mutations from '@/store/mutations';
import {
  firebaseLogin,
  firebaseLogout,
  firebaseSignup,
  firebaseResetPassword,
} from '@/services/firebase/auth.service';

const {
  IS_LOGGED_IN,
  LOGIN_LOADER,
  IS_REGISTERED,
  SIGNUP_LOADER,
  IS_PASSWORD_RESET,
  RESET_LOADER,
} = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
    isRegistered: false,
    signupInProgress: false,
    isPasswordReset: false,
    resetInProgress: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
    isRegistered: ({ isRegistered }) => isRegistered,
    signupInProgress: ({ signupInProgress }) => signupInProgress,
    isPasswordReset: ({ isPasswordReset }) => isPasswordReset,
    resetInProgress: ({ resetInProgress }) => resetInProgress,
  },
  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.isLoggedIn = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
    [IS_REGISTERED](state, bool) {
      state.isRegistered = bool;
    },
    [SIGNUP_LOADER](state, bool) {
      state.signupInProgress = bool;
    },
    [IS_PASSWORD_RESET](state, bool) {
      state.isPasswordReset = bool;
    },
    [RESET_LOADER](state, bool) {
      state.resetInProgress = bool;
    },
  },
  actions: {
    setLoggedInState: {
      handler({ commit }, bool) {
        commit(IS_LOGGED_IN, bool);
      },
      root: true, // рутовый экшен, доступен из других мест, без надобности указания сторы
    },
    async login({ commit, dispatch }, { email, password }) { // (context, payload)
      // context.commit - вызов мутации
      // context.dispatch - вызов другого экшена из данного (есть еще геттеры)
      try {
        commit(LOGIN_LOADER, true);
        await firebaseLogin(email, password);
      } catch (err) {
        dispatch('loadMessage', { type: 'error', message: err.message }, { root: true });
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
    async signup({ commit, dispatch }, { email, password }) {
      try {
        commit(SIGNUP_LOADER, true);
        await firebaseSignup(email, password);
      } catch (err) {
        dispatch('loadMessage', { type: 'error', message: err.message }, { root: true });
      } finally {
        commit(SIGNUP_LOADER, false);
      }
    },
    async reset({ commit, dispatch }, { email }) {
      try {
        commit(RESET_LOADER, true);
        const data = await firebaseResetPassword(email);
        console.log('reset data', data);
        dispatch('loadMessage', { type: 'info', message: 'Verification email was sent' }, { root: true });
      } catch (err) {
        dispatch('loadMessage', { type: 'error', message: err.message }, { root: true });
      } finally {
        commit(RESET_LOADER, false);
      }
    },
    async logout({ dispatch }) {
      try {
        await firebaseLogout();
      } catch (err) {
        dispatch('loadMessage', { type: 'error', message: err.message }, { root: true });
      }
    },
  },
};

export default authStore;
