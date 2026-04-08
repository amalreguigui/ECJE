// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjWk0DvBG2EgkAC2pYdRwqfYQIT5STCQ",
  authDomain: "app-mobile-ecje.firebaseapp.com",
  projectId: "app-mobile-ecje",
  storageBucket: "app-mobile-ecje.firebasestorage.app",
  messagingSenderId: "489863522869",
  appId: "1:489863522869:web:40bdc88d84b8028b085f7c",
  measurementId: "G-RRMFX4JDYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





// ajouter un membre
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

const addMember = async () => {
  await addDoc(collection(db, "members"), {
    name: "Amal Reguigui",
    role: "Scrum Master",
    email: "amal.reguigui123@gmail.com",
  });
};
import { getDocs, collection } from "firebase/firestore";

const getMembers = async () => {
  const querySnapshot = await getDocs(collection(db, "members"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};