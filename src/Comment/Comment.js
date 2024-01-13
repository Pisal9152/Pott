// Comment.js
//2 1
import React from 'react';

const Comment = ({ user, text }) => (
  <div>
    <strong>{user}:</strong> {text}
  </div>
);

export default Comment;
