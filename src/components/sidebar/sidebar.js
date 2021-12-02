import Question from "../question/Question";
import logo from '../../assets/collector-logo.png'
import React from "react";


function Sidebar() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, position: 'sticky', top: 0 }}>
                <img src={logo} style={{ height: 180 }} />
            </div>
            <div>
                <Question />
            </div>
        </>
    )
}
export default Sidebar;