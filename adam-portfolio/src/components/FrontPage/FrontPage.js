import React, { Component } from 'react';
import profilePicture from './profilePicture.jpg';


class FrontPage extends Component {

    render() {
        return (
            <div>
                <p className="App-intro">
                    I received my bachelor’s from Brigham Young University-Idaho in Business Management with an emphasis in Marketing and am now a front-end web developer.</p>
                <p className="App-intro">
                    I recently dove into the world of coding and front-end web development through Dev-Mountain. I have experience coding with a full-stack of tech and love working with a team to solve problems using React, Angular, Node, Javascript, HTML5, CSS3, jQuery, Postgress, and any other tech I can get my hands on.</p>
                <p className="App-intro">
                    My previous 7 years were spent working as a social media marketer (SMM), content curator, search engine optimizer (SEO),  and event marketer.</p>
                <p className="App-intro">
                    I am a seeker of fresh powder, avid gamer, and enjoy most things adventurous.</p>
                    
                    <img src={profilePicture}/>
            
            </div>

        );
    }
}

export default FrontPage;