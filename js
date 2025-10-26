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
