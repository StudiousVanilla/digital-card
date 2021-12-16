import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArow2nzoQAwifJrE1x4HV9tOv1KzRDnoY",
  authDomain: "digital-card-36250.firebaseapp.com",
  projectId: "digital-card-36250",
  storageBucket: "digital-card-36250.appspot.com",
  messagingSenderId: "88230715755",
  appId: "1:88230715755:web:ae877a28988471e292ec2e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

const colRef = collection(db, 'yearContent')

getDocs(colRef).then((snapshot)=>{
    console.log(snapshot.docs)
})

export default colRef