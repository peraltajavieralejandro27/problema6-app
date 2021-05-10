import './App.css';
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import './styles/app.scss';
import NavBar from "./components/ui/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <div className={'container'}>
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;
