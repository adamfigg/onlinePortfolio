import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class NavBar extends Component {

    render() {
        return (

            <div id="nav" className="navBar">
                <AnchorLink offset='100' href="#home">Home</AnchorLink>
                <AnchorLink offset='100' href="#projects">Projects</AnchorLink>
                <AnchorLink offset='100' href="#resume">Resume</AnchorLink>
                <AnchorLink offset='100' href="#contact">Let's Talk</AnchorLink>
                
            </div>

        );
    }
}

export default NavBar;