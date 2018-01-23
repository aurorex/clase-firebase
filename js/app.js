// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBiuJ_rFatxDTWs_-IhXplwUiBU8UFi9bs',
  authDomain: 'juntas-red-social.firebaseapp.com',
  databaseURL: 'https://juntas-red-social.firebaseio.com',
  projectId: 'juntas-red-social',
  storageBucket: 'juntas-red-social.appspot.com',
  messagingSenderId: '1083856608534'
};
firebase.initializeApp(config);

// login
var provider = new firebase.auth.GoogleAuthProvider();
$('#login').click(function(result) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(result.user);
    guardaDatos(result.user);
    $('#login').hide();
    $('#root').append('<img src="' + result.user.photoURL + '">');
  });
});

// función que guarda los datos automaticamente
function guardaDatos(user) {
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL
  }

  firebase.database().ref('Telmex/' + user.uid).set(usuario);

}

// escribir en la base de datos
$('#guardar').click(function() {
  firebase.database().ref('Telmex').set({
    nombre: 'BliSs',
    edad: '15',
    sexo: 'mucho'
  });
})