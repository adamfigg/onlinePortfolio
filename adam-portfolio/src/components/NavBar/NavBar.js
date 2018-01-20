import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (

            <div class="navBar">
                <a class="active" href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </div>

        );
    }
}

export default NavBar;