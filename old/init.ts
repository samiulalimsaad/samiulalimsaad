// Import the functions you need from the SDKs you need
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_APP_API_KEY,
    authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
    projectId: process.env.NEXT_APP_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_APP_ID,
    measurementId: process.env.NEXT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
isSupported().then((yes) => {
    yes && process.env.NEXT_APP_NODE_ENV === "production"
        ? getAnalytics(firebaseApp)
        : null;
    yes && process.env.NEXT_APP_NODE_ENV === "production"
        ? getPerformance(firebaseApp)
        : null;
});
