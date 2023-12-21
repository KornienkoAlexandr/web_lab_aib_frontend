import React, { useState } from "react";
import "./style.css";
const PostItem = (props) => {
  let like = props.post.like ? (
    <div className="red btn-click" onClick={() => props.likes(props.post)}>
      понравилось
    </div>
  ) : (
    <div className="black btn-click" onClick={() => props.likes(props.post)}>
      не понравилось
    </div>
  );
  return (
    <div className="post">
      <div>{props.post.id}</div>
      <div>{props.post.username}</div>
      <div>{props.post.text}</div>
      {like}
      <div className="red1" onClick={() => props.remove(props.post)}>
        удалить
      </div>
    </div>
  );
};
export default PostItem;