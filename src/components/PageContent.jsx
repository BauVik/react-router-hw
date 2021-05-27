import React from "react";
import { Route, Switch } from "react-router-dom";
import ToDoList from "./ToDo/ToDoList";
import Post from "./Post/posts";
import Album from "./Album/Albums";
const PageContent = () => {
  return (
    <Switch>
      <Route path="/todo">
        <ToDoList />
      </Route>
      <Route path="/posts">
        <Post />
      </Route>
      <Route path="/Albums">
        <Album />
      </Route>
    </Switch>
  );
};

export default PageContent;
