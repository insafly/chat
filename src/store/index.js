import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import authGuard from '@/guards/auth.guard';
import firebase from '@/plugins/firebase';
import auth from './modules/auth';
import notify from './modules/notify';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    notify,
    user,
  },
});

firebase.auth().onAuthStateChanged((userData) => {
  // console.log('onAuthStateChange', userData);
  store.dispatch('setLoggedInState', Boolean(userData));
  store.dispatch('setUserState', userData);

  // redirect to home
  if (userData) {
    router.push({ name: 'Home' });
  }
});

// отдельные гуарды для отдельных надобностей
authGuard(store);

export default store;
