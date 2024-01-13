// // CommentForm.js

// import React, { useState } from 'react';

// const CommentForm = ({ onCommentSubmit }) => {
//   const [author, setAuthor] = useState('');
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!author || !text) {
//       return;
//     }

//     onCommentSubmit({ author, text });
//     setAuthor('');
//     setText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Author:</label>
//         <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//       </div>
//       <div>
//         <label>Comment:</label>
//         <textarea value={text} onChange={(e) => setText(e.target.value)} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CommentForm;


// CommentForm.js
//2

import React, { useState } from 'react';
import"./ComFrom.css"

const CommentForm = ({ onCommentSubmit, userData }) => {
  const [user, setUser] = useState(userData.displayName); // Set the default author to the logged-in user's display name
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !text) {
      return;
    }

    //For submit
    onCommentSubmit({ user, text });
    setUser('');
    setText('');
  };

  return (
    <form className='backgroung' onSubmit={handleSubmit}>
      <div className='user'>
        <label>User :</label>  &emsp;&emsp;
        <input type="text" value={user} readOnly />
      </div><br/>

      
      <div className='Comment'>
        <label>Comment:</label> &emsp;
        <textarea className='comment' value={text} onChange={(e) => setText(e.target.value)} />
      </div><br/>
      <button type="submit" className='button'>Submit</button>
    </form>
  );
};

export default CommentForm;



