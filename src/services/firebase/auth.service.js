import firebase from '@/plugins/firebase';

export const firebaseLogin = async (email, password) => {
  try {
    // здесь вызываем специальный метод фаербейса
    const data = await firebase.auth().signInWithEmailAndPassword(email, password);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const firebaseLogout = async () => {
  try {
    // здесь вызываем специальный метод фаербейса
    const data = await firebase.auth().signOut();
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const firebaseSignup = async (email, password) => {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const firebaseResetPassword = async (email) => {
  try {
    const data = await firebase.auth().sendPasswordResetEmail(email);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};
