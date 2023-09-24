import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth" 
import {getFirestore} from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyCHelHPzHtrqAd0aGqTlWUm_VW5s9EP4ts",
  authDomain: "ar7chat.firebaseapp.com",
  projectId: "ar7chat",
  storageBucket: "ar7chat.appspot.com",
  messagingSenderId: "44330326659",
  appId: "1:44330326659:web:66eee8ddb8236fdaee99b6",
  measurementId: "G-E01Q0BZKWS"
};

 
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);

 