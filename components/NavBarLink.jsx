import React from "react";

class NavBarLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a>
                {this.props.link}
            </a>
        )
    }
}

export default NavBarLink;