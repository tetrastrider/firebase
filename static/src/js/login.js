
/*    const Email = document.getElementById('Email');
    const Password = document.getElementById('Password');
    const Login = document.getElementById('Login');
    const SignUp = document.getElementById('SignUp');
    const Logout = document.getElementById('Logout');*/


// iniciar session
 /* Login.addEventListener('click', e => {*/
    //Obtener email y pass
/*    const email = Email.value;
    const pass = Password.value;
    const auth = firebase.auth();*/
// Sign in
/*    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });*/

// Registrarse
/*  SignUp.addEventListener('click', e => {
    const email = Email.value;
    const pass = Password.value;
    const auth = firebase.auth();*/

// Crear usuario
/*    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });*/

//Cerrar session
 /* Logout.addEventListener('click', e => { firebase.auth().signOut(); });*/

// Añadir un listener en tiempo real a la autentificacion
 /* firebase.auth().onAuthStateChanged( fb => {
    if(fb) {
      usuarioActual.innerHTML = fb.email;
      Login.classList.add('hide');
      SignUp.classList.add('hide');
      Logout.classList.remove('hide');
    } else {
      usuarioActual.innerHTML = 'no logueado';
      Login.classList.remove('hide');
      SignUp.classList.remove('hide');
      Logout.classList.add('hide');

    }
  });*/