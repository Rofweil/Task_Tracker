import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5d1rWrn9C9x5slkvkLQXW29JiMXoMSeg",
  authDomain: "tasktracker-e2329.firebaseapp.com",
  databaseURL: "https://tasktracker-e2329-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tasktracker-e2329",
  storageBucket: "tasktracker-e2329.firebasestorage.app",
  messagingSenderId: "1044567656792",
  appId: "1:1044567656792:web:58a8e5f942f1ac66213d2d",
  measurementId: "G-VNRBNZ4R28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
