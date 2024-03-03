// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//google imports
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  getFirestore,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  doc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
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
export const getUsersData = async () => {
  const collectionRef = collection(db, "users");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const usersMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    acc[docSnapshot.id] = docSnapshot.data();
    return acc;
  }, {});
  return usersMap;
};
export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName, phoneNumber, photoURL } = user;
    const date = new Date();
    try {
      const res = await setDoc(userDocRef, {
        email,
        displayName,
        phoneNumber,
        photoURL,
        date,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user.", error.message);
    }
  }
  return userDocRef;
};
export const signUserOut = async () => await signOut(auth);
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUser = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
export const updateUserProfile = async (user, profile) => {
  const res = await updateProfile(user, profile);
  return res;
};

const uploadMediaFile = async (mediaFile) => {
  try {
    const storageRef = ref(
      storage,
      `/greda-gbc/${new Date()}/${mediaFile.value.name}`
    );
    const response = await uploadBytes(storageRef, mediaFile.value);
    const url = await getDownloadURL(response.ref);
    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};
export const uploadImageToFirebase = async (file) => {
  try {
    const storageRef = ref(
      storage,
      `/greda-gbc-profile/${new Date()}/${file.name}`
    );
    const response = await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(response.ref);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export default async function uploadMediaFiles(mediaFiles) {
  const mediaFilePromises = Array.from(mediaFiles, (mediaFile) =>
    uploadMediaFile(mediaFile)
  );

  const mediaFileUrls = await Promise.all(mediaFilePromises);
  // console.log(JSON.stringify(mediaFileUrls, null, 2));
  return mediaFileUrls; // list of url like ["https://..", ...]
}

export const authStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
