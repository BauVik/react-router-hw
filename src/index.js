import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigate from "./components/Navigate";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Navigate />
    </BrowserRouter>
    ,
  document.getElementById('root')
);

