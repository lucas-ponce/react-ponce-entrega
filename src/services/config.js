
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDwXRCz9ZfMuW-wLMFn2CRvrwMvcbL8tMI",
    authDomain: "ponce-joyas.firebaseapp.com",
    projectId: "ponce-joyas",
    storageBucket: "ponce-joyas.appspot.com",
    messagingSenderId: "91418774147",
    appId: "1:91418774147:web:6009a444a2458ed2e129b6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);