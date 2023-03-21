/*
Extra small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px

*/

import React from "react";
import MyPic from "../img/my_picture.jpg";
import classes from "../css/Home.module.css";

const startYear = new Date("03/01/2014").getFullYear();
const curYear = new Date().getFullYear();

function About() {
  return (
    <div className="row justify-content-center">
      <div className="about-container px-1 py-3 px-lg-3 py-xl-4 row row-cols-1 row-cols-md-2 gap-2 justify-content-center">
        <div className="about-image px-1 px-md-0 col col-md-4 d-flex justify-content-center">
          <img
            src={MyPic}
            rel="Profile picture of Merick Icy Agustin"
            className={classes["img-profile"] + " image-fluid"}
          />
        </div>
        <div className={classes["about-content"] + " col"}>
          <h1>About</h1>
          <p>
            My name is&nbsp;
            <strong className={classes.name}>Merick Icy Agustin</strong>, I've
            been in the I.T industry for&nbsp;
            <strong>{curYear - startYear}</strong> years. I graduated at Notre
            Dame of Dadiangas Universisty with a Degree of Bachelor Science in
            Computer Science.
          </p>
          <p>I'm currently exploring new techs in building web applications.</p>
          <div className="about-links d-flex justify-content-center align-items-center gap-1">
            <a href="#" className={classes["download-cv"]}>
              Download CV
            </a>
            <a href="#">View Projects &rarr;</a>
          </div>
        </div>
      </div>
      <div className={classes["experience-container"] + " pb-1 px-1 px-md-0"}>
        <div className="container pt-3 px-0 ">
          <h1>Experience</h1>
          <ul className="experiences d-flex flex-column gap-3">
            <li className="experience d-flex flex-column">
              <p className="h3">SOFTWARE ENGINEER</p>
              <p className={classes["company-name"]}>
                N-PAX Philippines, Inc. (March 2017 – Present)
              </p>
              <ul className="d-flex flex-column gap-1">
                <li>
                  Participated in the system design, development and
                  implementation of Loyalty Program for the client
                </li>
                <li>Involved as Dev, QA and Technical Implementer</li>
                <li>
                  Deployed to the project site for the on-going development
                  project
                </li>
              </ul>
            </li>
            <li className="experience d-flex flex-column">
              <p className="h3">PROGRAMMER</p>
              <p className={classes["company-name"]}>
                Geodata Solutions Inc. (February 2014 – March 2017)
              </p>
              <ul className="d-flex flex-column gap-1">
                <li>Web Developer/Fullstack Developer.</li>
                <li>
                  Responsible for the development and maintaining Web Based
                  Systems
                </li>
                <li>
                  Deployed to the project site for the on-going development
                  project
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
