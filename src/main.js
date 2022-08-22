import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDhlu8odxhqjNGCeVDIU2fa_ZNzLpeJp3g",
    authDomain: "reto-pwc-tf.firebaseapp.com",
    projectId: "reto-pwc-tf",
    storageBucket: "reto-pwc-tf.appspot.com",
    messagingSenderId: "918460267131",
    appId: "1:918460267131:web:595b2f0e044f52a22f80de",
    measurementId: "G-QH5W36YBX8"
  };
  firebase.initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
