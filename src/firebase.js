// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
    doc,
	deleteDoc,
	where,
	query,
	setDoc
} from "firebase/firestore";
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
const projectColRef = collection(db, "projects");

const addProject = (projectData) => {
	try {
		return addDoc(collection(db, "projects"), projectData);
	} catch (error) {
		console.log(error);
	}
};

const getProjects = () => {
	getDocs(collection(db, "projects"))
		.then((Response) => {
			console.log(Response.docs.data());
			return Response.docs.map((project) => ({
				data: project.data(),
				id: project.id,
			}));
		})
		.catch((error) => console.log(error));
};

// update

const deleteProject = (id) => {
	deleteDoc(doc(projectColRef, id));
};

const addReq = (reqData) => {
	try {
		return addDoc(collection(db, "requirements"), reqData);
	} catch (error) {
		console.log(error);
	}
};

const updateProject = (reqData, docId) => {
	try {
		return setDoc(doc(db, "projects", docId), reqData);
	} catch (error) {
		console.log(error);
	}
}

export { addProject, getProjects, projectColRef, deleteProject, addReq, updateProject };
