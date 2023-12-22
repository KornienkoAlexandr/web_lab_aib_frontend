import React, { useState, useContext } from "react";
import { Context } from "./context.jsx";
const PostFormFour = (props) => {
  const [post, setPost] = useState({ username: "", text: "", tag: "" });
  const { createPost } = useContext(Context);
  const addNewPost = (e) => {
    e.preventDefault();
    console.log("1212");
    console.log(post.username);
    console.log(post.text);
    if (post.username && post.text) {
      const newPost = {
        ...post,
        id: props.posts.length + 1,
      };
      createPost(newPost);
    }
    setPost({ username: "", text: "", tag: "" });
  };
  return (
    <form onSubmit={addNewPost} className="PostForm">
      <label>Имя</label>
      <input
        type="text"
        placeholder="Имя"
        onChange={(e) => setPost({ ...post, username: e.target.value })}
      />
      <label>Текст</label>
      <input
        type="text"
        placeholder="текст"
        onChange={(e) => setPost({ ...post, text: e.target.value })}
      />
      <label>Тэг</label>
      <input
        type="text"
        placeholder="тэг"
        onChange={(e) => setPost({ ...post, tag: "#" + e.target.value })}
      />
      <button>Добавить</button>
    </form>
  );
};

export default PostFormFour;