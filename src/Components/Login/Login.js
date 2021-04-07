import React, { useContext } from "react";
import "../../App.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
//   const [newUser, setNewUser] = useState(false);
let history = useHistory();
let location = useLocation();


let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        // history.replace('/deals');
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          error: "",
          success: false,
        };
        setUser(signedOutUser);
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <div className="App">
    
      <h1>Sign In to continue</h1>
      <section className="container-fluid">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form action="" className="form-container" >
             
                <br />
                <input className="form-control" type="text" name="email"  placeholder="Email Address"required></input>
                <br></br>
                <input className="form-control" type="password" name="password" placeholder="Enter your password" required></input>
                <br></br>
             

                {user.isSignedIn ? (
                <button className="btn-secondary form-control" onClick={handleSignOut}>Sign out</button>
                ) : (
                <button className="form-control btn-success" onClick={handleSignIn}>Sign in Using Google</button>
                )}

            </form>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Login;
