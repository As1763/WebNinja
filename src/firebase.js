import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDOQf-0uaCjpqeMwSa2PPSZ9tMja5KwvTY",
  authDomain: "webninja-aa109.firebaseapp.com",
  databaseURL: "https://webninja-aa109-default-rtdb.firebaseio.com",
  projectId: "webninja-aa109",
  storageBucket: "webninja-aa109.firebasestorage.app",
  messagingSenderId: "324735521325",
  appId: "1:324735521325:web:fc3c044f21c58cb48adea4",
  measurementId: "G-RB41S51LWW"
};

let app, auth, db;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0]; // Use existing app
  }
  auth = getAuth(app);
  db = getDatabase(app);
} catch (error) {
  console.error("Firebase Initialization Error:", error);
}

export { auth, db };
