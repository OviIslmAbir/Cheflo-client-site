import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlQbx3ibmTDDVGPgs3Vtaat2Z4VbHxiiY",
  authDomain: "cheflo-5a75c.firebaseapp.com",
  projectId: "cheflo-5a75c",
  storageBucket: "cheflo-5a75c.appspot.com",
  messagingSenderId: "385516479183",
  appId: "1:385516479183:web:e3a2f05eaef458b3338dba"
};


const app = initializeApp(firebaseConfig);
export default app