const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyAXOliRTIsDiRqHSM4t9f4IRGoQK69PEyc',
  authDomain: 'tweet-app-78cb7.firebaseapp.com',
  databaseURL: 'https://tweet-app-78cb7.firebaseio.com'
};
const baseRef = 'livecode';

firebase.initializeApp(config);

let ref = null;
let store = {};
let auth = firebase.auth();
let database = firebase.database();

module.exports.init = (options) => {
  let provider = firebase.auth.GoogleAuthProvider;
  let credential = provider.credential(options.idToken);
  return auth.signInWithCredential(credential).then(user => {
    ref = database.ref([baseRef, user.uid, options.name].join('/'));
    return ref.remove();
  });
};

module.exports.update = (file) => {
  let key = store[file.path];
  if (!key) {
    key = ref.push().key;
    store[file.path] = key;
  }
  return ref.update({ [key]: file });
};
