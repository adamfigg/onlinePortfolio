import React, { Component } from 'react';
import AdamFiggatWebDeveloper from './AdamFiggatWebDeveloper.pdf';
import { Document } from 'react-pdf'

class Resume extends Component {

    render() {
        return (

            <div  className="Resume">
              <p id="resume" className="Header">Resume</p>
              <h3>Feel free to download a copy of my resume featuring my skills and experience.</h3>
              <p>Image of the resume here...</p>

               <Document
          file="AdamFiggatWebDeveloper.pdf"
          onLoadSuccess={this.onDocumentLoad}>
          </Document>
            </div>

        );
    }
}

export default Resume;