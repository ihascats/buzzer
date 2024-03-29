import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoCOspn-6gJs_gngCzsOgIkLwFlGc7Rew',
  authDomain: 'buzz3r.firebaseapp.com',
  projectId: 'buzz3r',
  storageBucket: 'buzz3r.appspot.com',
  messagingSenderId: '9443323288',
  appId: '1:9443323288:web:753e141f613c749162cfed',
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const info = await signInWithPopup(auth, provider);
    return info;
  } catch (error) {
    console.log(error);
    // some error handling i cant be bothered about right now
  }
};

export const database = getFirestore(app);

export const postCollection = collection(database, 'posts');

class CurrentUser {
  constructor() {
    this.name = undefined;
    this.picture = undefined;
  }

  setName(name) {
    this.name = name;
  }
  setPicture(picture) {
    this.picture = picture;
  }
}

export const user = new CurrentUser();

export const sendPost = async (text) => {
  try {
    await addDoc(postCollection, {
      name: user.name,
      text: text,
      profilePicUrl: user.picture,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error writing new post to Firebase Database', error);
  }
};
