import * as firebase from "firebase";
// import firebase from "react-native-firebase";

const firebaseConfig = {
  clientID:
    "406080064712-d6cpfjjl8tdrqfr8habb9gjucekcfc4o.apps.googleusercontent.com",
  apiKey: "AIzaSyAgR1WZalx30PkguJ6Yb4BggwgZMm-1mNE",
  databaseURL: "https://goceries-fe687-default-rtdb.firebaseio.com/",
  projectId: "goceries-fe687",
  storageBucket: "goceries-fe687.appspot.com",
  messagingSenderId: "406080064712",
  appId: "1:406080064712:android:db776324d4a2fef6d129fd",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
