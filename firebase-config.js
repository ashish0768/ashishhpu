// firebase-config.js
// Aapki Cash Flow App ki Configuration

const firebaseConfig = {
  apiKey: "AIzaSyAJha5gqCQq_8OPvUu-H_7oNieW-92_YBc",
  authDomain: "cash-flow-b015a.firebaseapp.com",
  projectId: "cash-flow-b015a",
  storageBucket: "cash-flow-b015a.firebasestorage.app",
  messagingSenderId: "140507120634",
  appId: "1:140507120634:web:7cbfe2b302a2f488c15a43"
};

// Firebase start karna
firebase.initializeApp(firebaseConfig);

// Tools ko variable mein daalna taaki hum use kar sakein
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
