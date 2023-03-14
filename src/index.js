import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnbyjfRxHKR5AZy9tcPOhDSYJlyIj28hA",
    authDomain: "flame-313cb.firebaseapp.com",
    projectId: "flame-313cb",
    storageBucket: "flame-313cb.appspot.com",
    messagingSenderId: "489631571607",
    appId: "1:489631571607:web:de387a3372da4d10a353d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
