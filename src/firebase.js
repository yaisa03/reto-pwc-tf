// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyDhlu8odxhqjNGCeVDIU2fa_ZNzLpeJp3g",
	authDomain: "reto-pwc-tf.firebaseapp.com",
	projectId: "reto-pwc-tf",
	storageBucket: "reto-pwc-tf.appspot.com",
	messagingSenderId: "918460267131",
	appId: "1:918460267131:web:595b2f0e044f52a22f80de",
	measurementId: "G-QH5W36YBX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const sendThis = (projectData) => {
	try {
		return addDoc(collection(db, "projects"), projectData);
	} catch (error) {
		console.log(error);
	}
};
export { addProject };
