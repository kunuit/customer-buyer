import auth from "@react-native-firebase/auth";

// export const onGoogleButtonPressAPI = async () => {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// };

export const loginFirebaseAPI = async ({ email, password }) => {
  try {
    const loginFirebaseRes = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    // Handle user state changes
    // function onAuthStateChanged(user) {
    //   console.log(user, "user firebase");
    // }
    // auth().onAuthStateChanged(onAuthStateChanged);
    return loginFirebaseRes;
  } catch (error) {
    return { code: 400, message: error + "" };
  }
};

export const logoutFirebaseAPI = async () => {
  try {
    auth()
      .signOut()
      .then(() => console.log("logouted"));
  } catch (error) {
    return { code: 400, message: error + "" };
  }
};
// export const logoutAPI = () => {
//   // return  auth()
//   //   .signOut()
//   //   .then(() => console.log("User signed out!"));
//   const isSignOut = auth().signOut();
//   console.log(isSignOut, "isSignOut");
//   return isSignOut;
// };
