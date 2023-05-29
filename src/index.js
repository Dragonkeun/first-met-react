import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Library from "./03/Library";
import Clock from "./04/Clock";
import CommentList from "./05/CommentList";
import NotificationList from "./06/NotificationList";
import Counter from "./07/Counter";
import Accomodate from "./07/Accomodate";
import ConfirmButton from "./08/ConfirmButtonFunc";
import ConfirmButtonFunc from "./08/ConfirmButtonFunc";
import LoginControl from "./09/LoginControl";
// import MainPage from "./09/MainPage";
import LandingPage from "./09/LandingPage";
import Blog from "./10/Blog";
import NameForm from "./11/NameForm";
import FruitSelect from "./11/FruitSelect";
import Reservation from "./11/Reservation";
import SignUp from "./11/SignUp";
import Calculator from "./12/Calculator";
import WelcomeDialog from "./13/WelcomeDialog";
import ProfileCard from "./13/ProfileCard";
import App from "./14/App";
import DarkOrLight from "./14/DarkOrLight";
import MainPage from "./15/MainPage"
import Blocks from "./15/Blocks";
import Weather from "./etc/Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Weather/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
