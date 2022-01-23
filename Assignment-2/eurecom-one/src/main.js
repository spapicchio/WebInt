import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBtjgUoTgCsFkaXv75hl5_Cm_VirdsI1rM",
    authDomain: "assignment-2-webint.firebaseapp.com",
    projectId: "assignment-2-webint",
    storageBucket: "assignment-2-webint.appspot.com",
    messagingSenderId: "142166599801",
    appId: "1:142166599801:web:6e8ec1a109edff4e588ca8",
    measurementId: "G-N8H2MC7LVK"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
console.log(firebase);

createApp(App).use(router).mount("#app");
