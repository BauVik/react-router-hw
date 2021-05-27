import React, { useContext, useEffect, useState, Fragment } from "react";
import { userContext } from "../App";
import Loading from "../Loading";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const cntxt = useContext(userContext);

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    fetchingData();
  }, [cntxt.user]);

  const fetchingData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${cntxt.user.id}`)
      .then((data) => data.json())
      .then((json) => setPosts(json));
  };

  const renderPosts = () => {
    if (!posts.length) {
      return <Loading />;
    }
    return posts.map((item) => (
      <div id={"posts_" + item.id} key={item.id}>
        {item.title}
      </div>
    ));
  };

  return <Fragment>{renderPosts()}</Fragment>;
};

export default Post;
