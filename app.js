
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth , onAuthStateChanged , createUserWithEmailAndPassword , signInWithEmailAndPassword  , signOut   } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_d7WyHqiRpccy_72fnLwRQHH1NkhUb44",
    authDomain: "clone-3-86188.firebaseapp.com",
    projectId: "clone-3-86188",
    storageBucket: "clone-3-86188.appspot.com",
    messagingSenderId: "486511785566",
    appId: "1:486511785566:web:0ae620de0cbf7b7929e6cf",
    measurementId: "G-3QQTTVXQ25"
  };
let login1 = document.getElementById('login1')
let logout2 = document.getElementById('logout2')
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);
console.log(auth);
onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log('login');
    const uid = user.uid;
    login1.style.display = 'none'
    logout2.style.display = 'block'
    // ...
  } else {
  console.log('user is not login');
    login1.style.display = 'block'
    logout2.style.display = 'none'
  }
});

let ceate_email = document.getElementById('ceate_email')
let create_pass = document.getElementById('create_pass')
let create_btn = document.getElementById('create_btn')


let signin_email = document.getElementById('signin_email')
let signin_pass = document.getElementById('signin_pass')
let signin_btn = document.getElementById('signin_btn')

create_btn.addEventListener('click', create_acc)
function create_acc() {
  createUserWithEmailAndPassword(auth, ceate_email.value, create_pass.value)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
  ceate_email.value = ''
  create_pass.value = ''
}


signin_btn.addEventListener('click', signin_acc)
function signin_acc() {

    signInWithEmailAndPassword(auth, signin_email.value, signin_pass.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
      signin_email.value = ''
      signin_pass.value = ''
  }
  let logout = document.getElementById('logout')
  logout.addEventListener('click', logoutacc1)
  function logoutacc1() {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }
  
  document.getElementById("clean").addEventListener("click", () => {
    document.getElementById("input").value = "";
    document.getElementById("click").style.display = "none";
  });
  window.addEventListener("keydown", () => {
    if (document.getElementById("input").value.length > 0) {
      document.getElementById("clean").style.display = "block";
    }
  });
  document.getElementById("search1").addEventListener("click", () => {
    window.location.href = `https://www.google.com/search?q=${
      document.getElementById("input").value
    }`;
  });
   