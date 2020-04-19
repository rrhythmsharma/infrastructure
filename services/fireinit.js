import firebase from 'firebase'


const config = {
    apiKey:            "AIzaSyCsElrZU5EXZ4GIJZ-2K-kxFZ-6kXVvTVI",
    authDomain:        "fir-auth-10f12.firebaseapp.com",
    databaseURL:       "https://fir-auth-10f12.firebaseio.com",
    projectId:         "fir-auth-10f12",
    storageBucket:     "fir-auth-10f12.appspot.com",
    messagingSenderId: "308971272770",
    appId:             "1:308971272770:web:7e527d8f4d6740bf6e4bdb",
    measurementId:     "G-CNDSWT1L5Z"
}

const googleProvider = new firebase.auth.GoogleAuthProvider()

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export {googleProvider}

const firebaseAuth = firebase.auth();
export {firebaseAuth}
