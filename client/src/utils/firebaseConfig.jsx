import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkISB6zen5FaJiTGCFWRvSF0zLPuDv6Oc",
    authDomain: "nirvana-sih.firebaseapp.com",
    projectId: "nirvana-sih",
    storageBucket: "nirvana-sih.appspot.com",
    messagingSenderId: "398299507763",
    appId: "1:398299507763:web:9abd04e596802056d14746"
  };

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);