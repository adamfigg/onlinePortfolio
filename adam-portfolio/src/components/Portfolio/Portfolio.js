import React, { Component } from 'react';
import OverwatchApp from './OverwatchApp.gif';
import CCArt from './CCArt.png';
import Roominder from './Roominder.png';


class Portfolio extends Component {

    render() {
        return (
            <div>
                <div>
                   <p id="projects" className="Header">Web Development Projects</p>
                    <h3>Overwatch Hero App – Tech used: React, Nodejs, SQL, jQuery, and Bootstrap</h3>
                    <p className="Portfolio-details">
                        Implemented​ ​a​ ​user​ ​experience​ ​that​ ​makes​ ​active​ ​calls​ ​to​ ​an​ ​outside​ ​API​ ​within​ ​a​ ​React​ ​based​ ​app
                    </p>
                    <ul className="Portfolio-bullets">
                        <li>Prototyped​ ​and​ ​designed​ ​with​ ​Adobe​ ​Experience​ ​and​ ​used​ ​React​ ​best practices​ ​to​ ​reduce​ ​load​ ​times​ ​on​ ​API​ ​calls</li>
                        <li>​Utilized​ ​javascript​ ​libraries​ ​jQuery,​ ​bootstrap,​ ​and​ ​Json​ ​to​ ​create​ ​functions​ ​that​ ​run​ ​calls​ ​and​ ​actions</li>
                        </ul>

                         <img className="Project-images" src={OverwatchApp}/>

                </div>

                <div>
                    <h3>Carlsbad​ ​Cottage​ ​Art​ ​Boutique​ – Tech​ ​used:​ ​React,​ ​Nodejs,​ ​SQL,​ ​and​ ​jQuery</h3>
                    <p className="Portfolio-details">
                        Personally​​ ​​developed​ ​an​ ​online​ ​store​ ​with​ ​login,​ ​shopping​ ​cart,​ ​checkout,​ ​and​ ​payment​ ​components
                    </p>
                    <ul className="Portfolio-bullets">
                        <li>Created​ ​a​ ​sleek​ ​mobile-first​ ​shopping​ ​experience​ ​complete​ ​with​ ​a​ ​desktop​ ​version​ ​using​ ​media-queries</li>
                        <li>Set​ ​up​ ​data​ ​tables​ ​and​ ​SQL​ ​files​ ​to​ ​allow​ ​for​ ​a​ ​RESTful​ ​interaction​ ​between​ ​the​ ​user​ ​and​ ​their​ ​shopping​ ​cart</li>
                    </ul>

                    <img className="Project-images" src={CCArt}/>

                </div>

                <div>
                    <h3>RooMinder​ ​– Tech​ ​used:​ ​React,​ ​React​ ​Native,​ ​Styled​ ​Components,​ ​Nodejs,​ ​and​ ​SQL</h3>
                    <p className="Portfolio-details">
                       Worked​ ​with​ ​a​ ​group​ ​of​ ​4​ ​programmers​ ​to​ ​plan​ ​and​ ​create​ ​an​ ​app​ ​using​ ​location​ ​tracking​ ​and​ ​multiple​ ​APIs 
                    </p>
                    <ul className="Portfolio-bullets">
                        <li>Integrated​ ​Google​ ​Maps​ ​and​ ​Flight​ ​Tracker​ ​APIs​ ​to​ ​enable​ ​travel​ ​planning​ ​for​ ​mobile​ ​and​ ​online​ ​users</li>
                        <li>Acted​ ​as​ ​project​ ​manager​ ​by​ ​leading​ ​paired​ ​programming​ ​time​ ​to​ ​keep​ ​team​ ​on​ ​track​ ​to​ ​reach​ ​MVP​ ​on​ ​time</li>
                    </ul>

                    <img className="Project-images" src={Roominder}/>

                </div>

            </div>

        );
    }
}

export default Portfolio;