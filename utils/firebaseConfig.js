import firebase from "firebase/app";
import 'firebase/analytics'


// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// }
const firebaseConfig = {
  apiKey: "AIzaSyC4iinfOrENEpeLHOYp1yOxPKwGf6r1gXg",
  authDomain: "rustbots-website.firebaseapp.com",
  projectId: "rustbots-website",
  storageBucket: "rustbots-website.appspot.com",
  messagingSenderId: "862130436015",
  appId: "1:862130436015:web:778d76f54be7548885215a",
  measurementId: "G-4K79E88093"
};

firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();

export { analytics };