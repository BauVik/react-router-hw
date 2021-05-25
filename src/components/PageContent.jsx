import React from 'react';
import {Route, Switch} from "react-router-dom";
import ToDoList from "./ToDo/ToDoList";

const PageContent = () => {
    return (
        <Switch>
            <Route path="/todo">
                <ToDoList />
            </Route>
        </Switch>
    )
}

export default PageContent