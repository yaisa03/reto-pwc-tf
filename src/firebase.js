// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	getDoc,
	doc,
	deleteDoc,
	updateDoc,
	onSnapshot,
    setDoc,
	where,
	query,
    arrayUnion,
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
const referencia = (id) => doc(db, "projects", id);
const referenciaReq = (id) => doc(db, "requirements", id);
const refCol = collection(db, "requirements");
const refByProject = (id) => query(refCol, where('proyectID', '==', id))

const addProject = (projectData) => {
	try {
		return addDoc(collection(db, "projects"), projectData);
	} catch (error) {
		console.log(error);
	}
};
const addRequer = (reqData) => {
	try {
		return addDoc(collection(db, "requirements"), reqData);
	} catch (error) {
		console.log(error);
	}
};
const addReq = (reqData) => {
	try {
		return addDoc(collection(db, "requirements"), reqData);
	} catch (error) {
		console.log(error);
	}
};

const getItemsById = (id) => {
	getDoc(doc(db, "projects", id))
		.then((item) => {
			console.log;
			return {
				id: item.id,
				data: item.data(),
			};
		})
		.catch((err) => {
			console.log(err.message);
		});
};
const updateProject = (idProject, objt) => {
    return updateDoc(doc(db, "projects", idProject), objt);
}
const readReq = (id) => onSnapshot(doc(db, "requirements", id), (doc) => {
    console.log("Current data: ", doc.data().idProyecto);
    updateProject(doc.data().idProyecto, { requerimientos: id })
});
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
/* const deleteProject = (id) => {
    deleteDoc(doc(projectColRef, id));
}; */

const addRequirement = (idReq, objt) => {
    return updateDoc(doc(db, "requirements", idReq), objt);
}
async function findReqByProj(id) {
    const postsRef = collection(db, 'requirements');
    const q = query(postsRef, where('proyectID', '==', id));
    return onSnapshot(q, (snapshot) => snapshot);
}
const sortPendingOrders = (state, callback) => {
    const data = query(ordersCollectionRef, where("state", "==", state), orderBy('date', 'desc'));
    return onSnapshot(data, callback);
}

// añadir a imports setDoc y arrayUnion
const deleteProject = async (id) => {
    const docSnap = await getDoc(doc(db, 'projects', id));
    let array = docSnap.data().requirements;
    if(array && array.length > 0) {
        console.log(0)
        array.forEach(reqId => {
            deleteDoc(doc(collection(db, "requirements"), reqId));
            console.log('deleting requirement', reqId)
        });
    }
    deleteDoc(doc(projectColRef, id));
    console.log('deleting project', id)
};

const addReqId = async (projId, reqId) => {
    try {
        await updateDoc(doc(db, "projects", projId), {
            requirements: arrayUnion(reqId)
        });
    } catch (err) {
        console.log(err);
        console.log(err.stack);
        console.log(err.message);
    }
};

const addOneReq = (onlyReqData) => {
    try {
        return addDoc(collection(db, "newcolleccion"), onlyReqData);
    } catch (error) {
        console.log(error);
    }
};

const updateReq = (id, objt) => {
    return updateDoc(doc(db, "requirements", id), objt);
}
const editProject = (id, newProjData) => {
	try {
		return setDoc(doc(db, "projects", id), newProjData);
	} catch (error) {
		console.log(error);
	}
};


export {
    addProject, addRequer, readReq, getProjects,
    projectColRef, deleteProject, addReq, getItemsById,
    referencia, referenciaReq, addRequirement, refByProject,
    findReqByProj, refCol, addReqId, addOneReq, updateReq, editProject
};