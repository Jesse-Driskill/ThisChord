import React from "react";
import NavBarLink from "./NavBarLink";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <NavBarLink link="Download"></NavBarLink>
                <NavBarLink link="Discover"></NavBarLink>
                <NavBarLink link="Safety"></NavBarLink>
                <NavBarLink link="Support"></NavBarLink>
                <NavBarLink link="Blog"></NavBarLink>
                <NavBarLink link="Careers"></NavBarLink>
            </div>
        );
    }
}

export default NavBar;