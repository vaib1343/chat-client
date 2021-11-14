import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = " https://chatserver1343.herokuapp.com/";
toast.configure();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
