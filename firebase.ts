import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyByPZE1AbM25312K1eNZYRgiRi5vI_kxW8",
  authDomain: "netflix-clone-e2fe9.firebaseapp.com",
  projectId: "netflix-clone-e2fe9",
  storageBucket: "netflix-clone-e2fe9.appspot.com",
  messagingSenderId: "487325552410",
  appId: "1:487325552410:web:9048f268ee5d0100fa26a3",
  measurementId: "G-7HMFKK88PL"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }