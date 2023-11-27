import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <NavBar></NavBar>
            </div>
        )
    }
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App></App>, document.getElementById("main"));
})