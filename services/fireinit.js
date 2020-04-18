import firebase from 'firebase'

console.log("API_KEY: ", process.env.API_KEY)

const config = {
    apiKey:            process.env.API_KEY,
    authDomain:        process.env.AUTH_DOMAIN,
    databaseURL:       process.env.DB_URL,
    projectId:         process.env.PROJECT_ID,
    storageBucket:     process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId:             process.env.APP_ID
}

const googleProvider = new firebase.auth.GoogleAuthProvider()

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export {googleProvider}

const firebaseAuth = firebase.auth();
export {firebaseAuth}
