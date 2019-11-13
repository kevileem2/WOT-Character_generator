window.onload = () => {
  let firebaseConfig = {
    apiKey: "AIzaSyCQNaj_ftiw41dz8pvfOnQVC00sTVK5Wj8",
    authDomain: "wot-character-generator-a31a4.firebaseapp.com",
    databaseURL: "https://wot-character-generator-a31a4.firebaseio.com",
    projectId: "wot-character-generator-a31a4",
    storageBucket: "wot-character-generator-a31a4.appspot.com",
    messagingSenderId: "902582803972",
    appId: "1:902582803972:web:64c55fba0d722335989f51",
    measurementId: "G-1KSZZ7P9L0"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
  const getButton = document.getElementById("submit")
  getButton.addEventListener("click", () => {
    const getEmail = document.getElementById("inputEmail")
    const getPass = document.getElementById("inputPassword")
    signIn(getEmail, getPass)
  })
}

const signUp = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)
      // ...
    })
}

const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const uid = user.uid
          window.localStorage.setItem(authenticated, uid)
        } else {
          window.localStorage.removeItem(authenticated)
        }
      })
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)

      // ...
    })
}
