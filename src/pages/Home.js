import React from "react";
import Loader from '../components/loader';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="#section1">Section 1</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                    <li><a href="#section4">Section 4</a></li>
                </ul>
            </div>

            {/* Main content area */}
            <div className="main-content">
                <h1>Hello there!</h1>
                <p>🚧 <strong>This website is currently under construction.</strong> 🚧<br /><br />
                    You might want to check it out another time.<br />
                    Either way, thanks for being here.</p>

                    <Loader />

                {/*
                
                Sections
                
                                <div id="section1">
                    <h3>Section 1</h3>
                    <p>This is section 1.</p>
                </div>
                <div id="section2">
                    <h3>Section 2</h3>
                    <p>This is section 2.</p>
                </div>
                <div id="section3">
                    <h3>Section 3</h3>
                    <p>This is section 3.</p>
                </div>
                <div id="section4">
                    <h3>Section 4</h3>
                    <p>This is section 4.</p>
                </div>
                
                */}

            </div>
        </div>
    );
}

export default Home;
