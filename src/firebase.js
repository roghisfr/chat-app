import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyAid930f55AKk8k2pmb9ZsKJ1X38jp2Au8",
  authDomain: "botogram-4a483.firebaseapp.com",
  projectId: "botogram-4a483",
  storageBucket: "botogram-4a483.appspot.com",
  messagingSenderId: "1087661283156",
  appId: "1:1087661283156:web:187d180376232cc27b9ac1"
}).auth();