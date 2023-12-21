import React, { useState } from "react";
import PostItem from "./Task_2_Items";
import PostForm from "./Task_3";
const Post = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: "Василий", text: "Да я не Вася", like: true },
    { id: 2, username: "Невасилий", text: "Да я Вася", like: false },
    { id: 3, username: "Аркадий", text: "Да я Паровозов!!!!!!", like: true },
    { id: 4, username: "Геннадий", text: "дабл сандали", like: true },
  ]);

  const likePost = (postclick) => {
    if (postclick) {
      const update = posts.map((post) => {
        if (post.id === postclick.id) return { ...post, like: !post.like };
        return post;
      });
      setPosts(update);
    }
  };

  const removePost = (post) => {
    console.log(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="postFlex">
      <div>
        <PostForm create={createPost} posts={posts} />
      </div>
      <div>
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            likes={likePost}
            remove={removePost}
          />
        ))}
      </div>
    </div>
  );
};
export default Post;