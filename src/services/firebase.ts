import firebase from 'firebase/app'

//importar cada serviço que for usar do firebase
//auth - recurso de autenticação
//database - recurso de banco de dados
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DATABASE_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_APP_ID
};

//inicializa
firebase.initializeApp(firebaseConfig);

//obs: o firebase instalado foi o 8.6.7 pois o atual 9.1.0 estava dando erro nas consts abaixo 
//para quando for chamar esses recursos não precisa ficar digitando tudo
//firebase.auth() - resumido = auth
//firebase.database(); - resumido = database
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }