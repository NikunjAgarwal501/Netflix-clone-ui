import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcss2Sw39aJFLGCR4Es0ojkLkRmhZycGs",
  authDomain: "react-netflix-clone-d2dc2.firebaseapp.com",
  projectId: "react-netflix-clone-d2dc2",
  storageBucket: "react-netflix-clone-d2dc2.appspot.com",
  messagingSenderId: "726811339944",
  appId: "1:726811339944:web:223a9fc16da0a92259e69d",
  measurementId: "G-WS4YXPVM67"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);   