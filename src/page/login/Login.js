
import './Login.css'
import { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebaseConfig';


function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        // const {displayName, email} = result
        // setUserData({ displayName, email })
        const { displayName, email, photoURL } = user;
        setUserData({ displayName, email, photoURL });

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])
  
  const SignUpUsingGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {

        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL });
        // const { displayName, email,profile } = result.user;
        // setUserData({ displayName, email,profile })

        setIsLoggedIn(true)
      }).catch((error) => {

        console.log({ error });

      });
  }

  const Logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserData({})
      setIsLoggedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log({ error });
    });
  }

  return (
    <div className="App">

      {!isLoggedIn &&
        <button onClick={SignUpUsingGoogle} type="button" className="login-with-google-btn" >
          Sign in with Google
        </button>
      }

      {isLoggedIn &&
        <div className="wrapper">
          <div className="profile-card js-profile-card">

            <div  className="profile-card__img">
              <img src={userData.photoURL || "default-profile-image-url"} alt="profile card" />
            </div>

            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{userData.displayName}</div>
              <div className="profile-card__txt">{userData.email}</div>
              {/* <div className="profile-card-loc">
              <img src={userData.photoURL || "default-profile-image-url"} alt="profile card" />
              </div> */}
              <div className="profile-card-ctr">
                <button className="profile-card__button button--orange" onClick={Logout}>SIGN OUT</button>
              </div>
            </div>

          </div>
        </div>
      }



    </div>
  );
}

export default Login;




