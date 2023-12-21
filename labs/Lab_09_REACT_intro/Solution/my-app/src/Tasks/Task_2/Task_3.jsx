import React, { useState } from "react";

const PostForm = (props) => {
  const [post, setPost] = useState({ username: "", text: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    if (post.username && post.text) {
      const newPost = {
        ...post,
        id: props.posts.length + 1,
      };
      props.create(newPost);
    }
    setPost({ username: "", text: "" });
  };
  return (
    <form onSubmit={addNewPost} className="PostForm">
      <label>Имя</label>
      <input
        type="User"
        placeholder="Имя"
        onChange={(e) => setPost({ ...post, username: e.target.value })}
      />
      <label>Текст</label>
      <input
        type="Text"
        placeholder="Текст"
        onChange={(e) => setPost({ ...post, text: e.target.value })}
      />
      <button>Добавить</button>
    </form>
  );
};

export default PostForm;