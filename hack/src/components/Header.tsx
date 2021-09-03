import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() =>{
        if(location.pathname === "/") {
            setActiveTab("Home");
        }
        else if(location.pathname === "/watson") {
            setActiveTab("Watson");
        }
        else if(location.pathname === "/quiz") {
            setActiveTab("Quiz");
        }
    }, [location]);
    return(
        <div className="header">
            <p className="logo">Pendemic Heven</p>
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Home</p>
                </Link>
                <Link to="/watson">
                    <p className={`${activeTab === "Watson" ? "active" : ""}`} onClick={() => setActiveTab("Watson")}>Watson</p>
                </Link>
                <Link to="/quiz">
                    <p className={`${activeTab === "Quiz" ? "active" : ""}`} onClick={() => setActiveTab("Quiz")}>Quiz</p>
                </Link>
                <Link to="/games">
                    <p className={`${activeTab === "Games" ? "active" : ""}`} onClick={() => setActiveTab("Games")}>Games</p>
                </Link>
                <Link to="/draw">
                    <p className={`${activeTab === "Draw" ? "active" : ""}`} onClick={() => setActiveTab("Draw")}>Draw</p>
                </Link>
            </div>
        </div>

    )
}

export default Header;