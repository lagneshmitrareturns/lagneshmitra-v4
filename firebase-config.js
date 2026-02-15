import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getAuth } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_NEW_API_KEY",
  authDomain: "PASTE_NEW_AUTH_DOMAIN",
  projectId: "PASTE_NEW_PROJECT_ID",
  appId: "PASTE_NEW_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
