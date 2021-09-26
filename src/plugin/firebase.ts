// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb2_2-KFbabzd0tCmfCe0v1Bw7ethnIMI",
  authDomain: "mybloghomesweethome.firebaseapp.com",
  projectId: "mybloghomesweethome",
  storageBucket: "mybloghomesweethome.appspot.com",
  messagingSenderId: "828934412105",
  appId: "1:828934412105:web:f09bc13749e772a9062c98"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp