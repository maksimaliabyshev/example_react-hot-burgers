import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAISpMa5L_KGPCfVJia_31kjhgvECHXzgQ',
    authDomain: 'very-hot-burgers-40e6c.firebaseapp.com',
    databaseURL:
        'https://very-hot-burgers-40e6c-default-rtdb.europe-west1.firebasedatabase.app',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };

export default base;
