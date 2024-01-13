// // App.js

// import React from 'react';
// import CommentApp from './CommentApp';
// import Login from '../page/login/Login';
// // import Login from '../page/login/Login';


// const Com = () => {
//   return (
//     <div>
//       {/* <CommentApp /> */}
    
//       // In the parent component where you render CommentApp
//      <CommentApp />
//     <Login/>

//     </div>
//   );
// };

// export default Com;




import React, { useEffect, useState } from 'react';
import CommentApp from './CommentApp';
import { onAuthStateChanged, auth } from '../page/login/firebase/firebaseConfig';  // Assuming you have Firebase authentication set up

const Com = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        const { displayName, email } = user;
        setIsLoggedIn(true);
        setUserData({ displayName, email });
      } else {
        // User is not logged in
        setIsLoggedIn(false);
        setUserData({});
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Render the CommentApp component and pass isLoggedIn and userData as props */}
      <CommentApp isLoggedIn={isLoggedIn} userData={userData} />
    </div>
  );
};

export default Com;

