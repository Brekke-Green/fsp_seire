import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-col footer-div-name"> 
                    <div className="footer-col-label">SEIRE</div>
                    <div id="footer-paragraph">This is a clone of Strava created by Brekke Green and is intended for demonstration purposes only. Route creation was created with the Mapbox API. </div>
                </div>
                <div className="footer-col footer-div-menu">
                    <div className="footer-col-label">MENU</div>
                    <ul>
                        <li>FEATURES</li><li>LOCAL</li>
                        <li>SUBSCRIPTION</li><li>SUPPORT</li>
                        <li>ABOUT</li><li>BUSINESS</li>
                        <li>CAREERS</li><li>TERMS</li>
                        <li>BLOG</li><li>PRIVACY</li>
                    </ul>
                </div>
                <div className="footer-col footer-div-follow">
                    <div className="footer-col-label">FOLLOW</div>
                    <ul>
                        <li><a href="https://github.com/Brekke-Green">GITHUB</a></li>
                        <li><a href="https://www.linkedin.com/in/brekke-andrew-green/">LINKEDIN</a></li>
                        <li><a href="https://angel.co/u/brekke-andrew-green">ANGELLIST</a></li>
                        <li><a href="https://www.kaggle.com/brekkeandrewgreen">KAGGLE</a></li>
                    </ul>
                </div>
                <div className="footer-col footer-div-get-started">
                    <div className="footer-col-label">GET STARTED</div>
                    <ul>
                        <li>
                            <Link to="/register">SIGN UP</Link>
                        </li>
                        <li>
                            <Link to="/login">LOG IN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;