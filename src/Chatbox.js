import React, {useState} from 'react';
import "./App.css";
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function Chatbox() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="chatbox">
            {!user ? (
                <Login />
            ) : (
        <div className="app__body">
                <Sidebar />
                    <Chat />
        </div>
    )}
    </div>
    );
}

export default Chatbox;
