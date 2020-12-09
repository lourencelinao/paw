import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/output.css' // css

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBO6H7q99jYoP6Ak2qrAxX_MHTZoWwYwZI",
  authDomain: "paw-98484.firebaseapp.com",
  projectId: "paw-98484",
  storageBucket: "paw-98484.appspot.com",
  messagingSenderId: "237823382850",
  appId: "1:237823382850:web:0a577faeeb3e0a1dafe4db",
  measurementId: "G-MNHGSWSDTC"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(async (firebaseUser) => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')    
  }

  if(firebaseUser){
    let user = []
    if(!localStorage.id) {
      // user service here
    }
  }
})