import React from "react";
import './Achievements.css'
import Header from "../Header/HeaderACV";
import Navbar from "../Navbar/Navbar";

function Achievements() {
    const myStyle = {
        background: 'linear-gradient(to right, #632636, #392A48)',
        height: '100vh',
        width: '100vw'
      };

    return(
        <div style={myStyle}>
            <div className="container">
                <div className="rectangle">
                    <Header/>
                    <Navbar/>
                    <div className="heading">Achievements</div>
                    <div className="acv-rectangle-2">
                        <p1>1. Secured 3rd Prize in Malarvadi Competition in Sub-District Level </p1>
                        <p1>2. Secured 1st Prize in School level DCL Quiz Competition</p1>
                        <p1>3. Secured 1st Prize in Best Out of Waste at school level</p1>
                        <p1>4. Me, Anju and Ashwin Pradeep won 1st in Eloquor Cluster 3 conducted by IEEE</p1>
                        <p1>5. Me and my friend Anju got 3rd Prize in Debate competition conducted by NSS NITC</p1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements