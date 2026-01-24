// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvKqRYo160jNmD9-pLt_dclzNo28XhVac",
  authDomain: "op-op-6b7d3.firebaseapp.com",
  projectId: "op-op-6b7d3",
  storageBucket: "op-op-6b7d3.firebasestorage.app",
  messagingSenderId: "206775092675",
  appId: "1:206775092675:web:713024084009b6e2e2a976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
