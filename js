<script src="https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"></script>

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      // Cualquiera puede ver y descargar (read)
      allow read: if true;

      // Solo usuarios autenticados (logueados) pueden subir (write)
      allow write: if request.auth != null;
    }
  }
}
const auth = firebase.auth();

const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginBtn.addEventListener("click", () => {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(() => alert("✅ Sesión iniciada"))
    .catch((error) => alert("Error: " + error.message));
});
