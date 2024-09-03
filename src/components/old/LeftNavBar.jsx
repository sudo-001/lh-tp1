import React from "react";
import NavLink from "./NavLink";

function LeftNavBar(props) {

    return (
        <div>
            <NavLink href="https://www.youtube.com/" label="Youtube" />

            <NavLink href="https://www.netflix.com/cm/" label="Netflix" />
            
            <NavLink href="https://localhost-academy.com/" label="Localhost" />
        </div>
    )
}

export default  LeftNavBar;