// // this is purely for gains and expenses app
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD0BYS0ppAA8B9rlAxN3xtP5NomXlSwkfI",
//   authDomain: "gains-and-expenses-2a16e.firebaseapp.com",
//   projectId: "gains-and-expenses-2a16e",
//   storageBucket: "gains-and-expenses-2a16e.appspot.com",
//   messagingSenderId: "554061710081",
//   appId: "1:554061710081:web:17898e67f31ef5ce4b9100",
//   measurementId: "G-YDKR7235SQ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// this is purely for mobigic app need to uncomment letter

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// shivam singh firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDZOaLkPPqE-CDjdpWZgmnAdBXTnGiFzyw",
//   authDomain: "mobigic-ffe84.firebaseapp.com",
//   projectId: "mobigic-ffe84",
//   storageBucket: "mobigic-ffe84.appspot.com",
//   messagingSenderId: "71060914208",
//   appId: "1:71060914208:web:9e1b3775efa21dc75abc45",
// };

// bhangale software firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRGiYv-Gdl_EuXvcuPV-IiZFko1weOiG8",
  authDomain: "fish-143cf.firebaseapp.com",
  projectId: "fish-143cf",
  storageBucket: "fish-143cf.firebasestorage.app",
  messagingSenderId: "814405538225",
  appId: "1:814405538225:web:931e3349fe8a87c2106d90",
  measurementId: "G-89HFL69QLR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
