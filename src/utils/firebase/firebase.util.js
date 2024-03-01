// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//google imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  getFirestore,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { logDOM } from "@testing-library/react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjls0Bw5Hm2Hq7L1hy68tm3cBi9d2a-2o",
  authDomain: "greda-gbc-v1.firebaseapp.com",
  projectId: "greda-gbc-v1",
  storageBucket: "greda-gbc-v1.appspot.com",
  messagingSenderId: "168162065332",
  appId: "1:168162065332:web:56c86b59f071e13581d0e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore();
const storage = getStorage();

export const saveDataToFirestore = async (buildingName, data) => {
  try {
    if (buildingName && data) {
      await setDoc(doc(db, "greda-gbc-data", buildingName), data);
    }
    return true;
  } catch (error) {
    console.error("Error saving data:", error);
    return false;
  }
};
export const getBuildingData = async () => {
  const collectionRef = collection(db, "greda-gbc-data");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const buildingMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { name, items } = docSnapshot.data();
    acc[name] = items;
    // console.log(JSON.stringify(docSnapshot.data()));
    return acc;
  }, {});
  // console.log(JSON.stringify(buildingMap));
  return buildingMap;
};
export const createUserDocumentFromAuth = () => {};
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

async function uploadMediaFile(mediaFile) {
  const storageRef = ref(
    storage,
    `/greda-gbc/${new Date()}/${mediaFile.value.name}`
  );

  const response = await uploadBytes(storageRef, mediaFile.value);
  const url = await getDownloadURL(response.ref);
  return url;
}

export default async function uploadMediaFiles(mediaFiles) {
  const mediaFilePromises = Array.from(mediaFiles, (mediaFile) =>
    uploadMediaFile(mediaFile)
  );

  const mediaFileUrls = await Promise.all(mediaFilePromises);
  // console.log(JSON.stringify(mediaFileUrls, null, 2));
  return mediaFileUrls; // list of url like ["https://..", ...]
}
