
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-63b18.firebaseapp.com",
  projectId: "ai-interview-agent-63b18",
  storageBucket: "ai-interview-agent-63b18.firebasestorage.app",
  messagingSenderId: "804910125898",
  appId: "1:804910125898:web:5ee8b4faa091567b61e7b3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}