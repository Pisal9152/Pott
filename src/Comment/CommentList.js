// CommentList.js
//2 1
// import React from 'react';
// import Comment from './Comment';

// const CommentList = ({ comments }) => (
//   <div>
//     {comments.map((comment, index) => (
//       <Comment key={index} author={comment.author} text={comment.text} />
//     ))}
//   </div>
// );

// export default CommentList;

// CommentList.js
import React from 'react';

const CommentList = ({ comments, onDelete }) => {
  return (
    <ul>
      {comments.map((comment, index) => (
        <div key={index}>
         {comment.user} : {comment.text} 
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default CommentList;
