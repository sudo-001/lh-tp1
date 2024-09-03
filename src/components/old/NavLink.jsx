import React from "react";

function NavLink(props) {

    return (
        <a href={props.href}>{props.label}</a>
    )
}

export default NavLink;