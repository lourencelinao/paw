import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/output.css' // css

import firebase from 'firebase/app'
import 'firebase/auth'
import UserService from './Services/UserService'
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

  if (firebaseUser) {
		let user = []
		if (!localStorage.id) {
      // console.log(firebaseUser.email)
      user = await UserService.getUser(firebaseUser.email)
      // console.log(user)
      console.log(user)
			localStorage.id = user[0].user_id
      localStorage.password = user[0].password
      localStorage.email = firebaseUser.email
      console.log(localStorage)
			// localStorage.firstname = user[0].firstname
			// localStorage.lastname = user[0].lastname
			// localStorage.email = user[0].email
			// localStorage.position = user[0].position
			// localStorage.contact = user[0].contact
      // console.log(localStorage)
      // console.log(localStorage.id)
      console.log('id', localStorage.id)
		}
	} else {
		localStorage.clear()
		console.log(localStorage)
	}
})