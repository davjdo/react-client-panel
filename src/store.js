import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import thunk from 'redux-thunk';

// Reducers
// @todo

const firebaseConfig = {
  apiKey: 'AIzaSyAIONnXSlIcmlomM4AisApoaEpI-t4P9iE',
  authDomain: 'react-client-panel-624cc.firebaseapp.com',
  databaseURL: 'https://react-client-panel-624cc.firebaseio.com',
  projectId: 'react-client-panel-624cc',
  storageBucket: 'react-client-panel-624cc.appspot.com',
  messagingSenderId: '79273966567'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};
// Add middleware
const middleware = [thunk];

// Redux-devtools extension
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
