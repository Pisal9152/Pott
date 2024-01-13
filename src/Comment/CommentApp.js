
//2
// import React, { useState } from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';

// const CommentApp = ({ isLoggedIn, userData }) => {
//   const [comments, setComments] = useState([]);

//   const handleCommentSubmit = (comment) => {
//     setComments([...comments, comment]);
//   };

//   return (
    // <div><br/>
    //   <h1>Comment App</h1>
    //   {isLoggedIn ? (
    //     <>
    //       <CommentList comments={comments} /> <br/>
    //       <CommentForm onCommentSubmit={handleCommentSubmit} userData={userData} /><br/>
    //     </>
    //   ) : (
    //     <p>Login to comment.</p>
    //   )}
    // </div>
//   );
// };

// export default CommentApp;



// CommentApp.js
//can comment can resfrish
// import React, { useState, useEffect } from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';

// const CommentApp = ({ isLoggedIn, userData }) => {
//   const [comments, setComments] = useState([]);



//   useEffect(() => {
//     // Retrieve comments from local storage on component mount
//     const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
//     setComments(storedComments);
//   }, []); // Empty dependency array to run the effect only once on mount

//   const handleCommentSubmit = (comment) => {
//     const newComments = [...comments, comment];
//     setComments(newComments);

//     // Store comments in local storage
//     localStorage.setItem('comments', JSON.stringify(newComments));
//   };

//   return (

//     <div><br/>
//     <h1>Comment App</h1>
//     {isLoggedIn ? (
//       <>
//         <CommentList comments={comments} /> <br/>
//         <CommentForm onCommentSubmit={handleCommentSubmit} userData={userData} /><br/>
//       </>
//     ) : (
//       <p>Login to comment.</p>
//     )}
//   </div>

 
  
//   );
// };

// export default CommentApp;


// CommentApp.js
import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentApp = ({ isLoggedIn, userData }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Retrieve comments from local storage on component mount
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []); // Empty dependency array to run the effect only once on mount

  const handleCommentSubmit = (comment) => {
    const newComments = [...comments, comment];
    setComments(newComments);

    // Store comments in local storage
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  const handleCommentDelete = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments.splice(commentIndex, 1);
    setComments(updatedComments);

    // Update local storage after deleting a comment
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div>
      <br />
      <h1>Comment </h1>
      {isLoggedIn ? (
        <>
          <CommentList comments={comments} onDelete={handleCommentDelete} />
          <br />
          <CommentForm onCommentSubmit={handleCommentSubmit} userData={userData} />
          <br />
        </>
      ) : (
        <p>Login to comment.</p>
      )}
    </div>
  );
};

export default CommentApp;
