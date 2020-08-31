import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_mek3AMawM4Mz_ip9FGAKo4Xtac8pdpM",
    authDomain: "comentakiprojeto.firebaseapp.com",
    databaseURL: "https://comentakiprojeto.firebaseio.com",
    projectId: "comentakiprojeto",
    storageBucket: "comentakiprojeto.appspot.com",
    messagingSenderId: "266266457208",
    appId: "1:266266457208:web:899fe50cd398cde25da98d"
  }

  firebase.initializeApp(firebaseConfig)
  export default firebase