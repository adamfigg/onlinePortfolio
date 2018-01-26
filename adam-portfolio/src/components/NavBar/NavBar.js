import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (

            <div class="navBar">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Let's Talk</a>
            </div>

        );
    }
}

export default NavBar;