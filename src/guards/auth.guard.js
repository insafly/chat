import router from '@/router';

export default function authGuard(store) {
  const authRoutes = ['Login', 'ForgotPassword', 'SignUp'];

  // вызывается перед каждым переходом
  router.beforeEach((to, from, next) => {
    // Редирект пользователя, в зависимости от того, залогинен или нет
    if (authRoutes.includes(to.name) && store.state.auth.isLoggedIn) {
      return next({ name: 'Home' });
    }

    if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedIn) {
      return next({ name: 'Login' });
    }

    // обязательно, и наче застрянет
    return next();
  });
}
