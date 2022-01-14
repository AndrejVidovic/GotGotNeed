import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../helpers/firebase";
import firebase from "firebase/compat/app";

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};

const SignInWithGoogle = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;

export default SignInWithGoogle;
