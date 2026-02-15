import { auth } from "/firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

console.log("MAIN JS STARTED 🚀");

// mobile session persist
await setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// 🔥 LOGIN BUTTON
const btn = document.getElementById("loginBtn");

if (btn) {
  console.log("Login button connected");

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };
}


// 🔥 LOGIN DETECTOR (after redirect return)
onAuthStateChanged(auth, (user) => {

  if (!user) {
    console.log("No user session");
    return;
  }

  console.log("User logged in:", user.email);

  // redirect after successful login
  window.location.href = "/ideology.html";

});
