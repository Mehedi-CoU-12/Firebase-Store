import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-C0vlOvjbzZVanZSCoXAQwEwtInTN65A",
  authDomain: "fir-store-80dc6.firebaseapp.com",
  projectId: "fir-store-80dc6",
  storageBucket: "fir-store-80dc6.appspot.com",
  messagingSenderId: "816079774094",
  appId: "1:816079774094:web:2f15dad7fec3ab5b7984df"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
