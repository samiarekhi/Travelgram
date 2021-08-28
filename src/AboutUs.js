import React from 'react';
import Fade from "react-reveal/Fade";
import Samia from './Samia.JPG';
import Rajat from './Rajat.jpg';
import './AboutUs.css';
import "./App.css";


function AboutUs() {
    return (
        <div className="container__aboutUs">
             
            <div className="container__details">
                <div className="details__image">   
                    <h1>About Us</h1>
                </div>
                <div className="details__text">   
                <Fade left>
                    <p className="me-text"><i>
                        I am Samia Rekhi, an aspiring Web Developer currently pursuing my
                        BCA from SICSR. 
                        Web Development is something that has always interested and fascinated
                        me. I have started working on some of real time projects recently.
                        My hobbies include, watching movies, reading books and dancing  which help me relax and focus
                        better at work.
                        </i>
                    </p>
                </Fade>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Fade left>
                    <p className="me-text"><i>
                        I am Rajat Sharma, currently pursuing my BCA from SICSR. 
                        I am interested in Machine Learning. My hobbies are watching informational movies and series 
                        to keep my mind fresh.
                        </i>
                    </p> 
                </Fade>
                </div>
                <div className="container__3">
        <div className="row1">
          <div className="image">
            <Fade right>
              <center>
                <img
                  className="img1"
                  src={Samia}
                ></img>
              </center>
            </Fade>
          </div>
        </div>
        <br></br>
        <div className="row2">
          <div className="image">
            <Fade right>
              <center>
                <img
                  className="img2"
                  src={Rajat}
                ></img>
              </center>
            </Fade>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
        


export default AboutUs;
