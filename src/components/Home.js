/*
Extra small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px

*/

import { Link } from "react-router-dom";
import myPic from "../img/my_picture.jpg";
import classes from "../css/Home.module.css";
import CSharpLogo from "../components/subcomponents/CSharpLogo.js";
import JavaScriptLogo from "../components/subcomponents/JavaScriptLogo.js";
import ReactLogo from "../components/subcomponents/ReactLogo.js";
import BootStrapLogo from "./subcomponents/BootStrapLogo.js";
import HTML5Logo from "./subcomponents/HTML5Logo.js";
import CSSLogo from "./subcomponents/CSSLogo.js";

const startYear = new Date("03/01/2014").getFullYear();
const curYear = new Date().getFullYear();
const downloadFileAtURL = function () {
  const aTag = document.createElement("a");
  aTag.href = "/CV_Merick Icy Agustin.doc";
  aTag.setAttribute("download", "CV_Merick Icy Agustin");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

function About() {
  return (
    <div
      className={
        classes["about-container"] +
        " container-fluid row justify-content-center"
      }
    >
      <section className="about-container px-1 py-3 px-lg-3 py-xl-4 row row-cols-1 row-cols-md-2 gap-2 justify-content-center">
        <div className="about-image px-1 px-md-0 col col-md-4 d-flex justify-content-center">
          <img
            src={myPic}
            alt="Merick Icy Agustin"
            className={classes["img-profile"] + " image-fluid"}
          />
        </div>
        <div className={classes["about-content"] + " col"}>
          <h1>About</h1>
          <p>
            My name is&nbsp;
            <strong className={classes.name + " text-primary"}>
              Merick Icy Agustin
            </strong>
            , I've been in the I.T industry for&nbsp;
            <strong>{curYear - startYear}</strong> years. I graduated at Notre
            Dame of Dadiangas Universisty with a Degree of Bachelor Science in
            Computer Science.
          </p>
          <p>I'm currently exploring new techs in building web applications.</p>
          <div className="about-links d-flex justify-content-center align-items-center gap-1">
            <button
              onClick={() => {
                downloadFileAtURL();
              }}
              className="btn btn-primary btn-lg text-dark"
            >
              Download CV
            </button>
            <Link to="/projects">View Projects &rarr;</Link>
          </div>
        </div>
      </section>
      <section className="bg-secondary pb-1 px-1 px-md-0">
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
      </section>
      <section className="pb-1 px-1 px-md-0">
        <div className="container pt-3 px-0 ">
          <h1>Skills</h1>
        </div>
        {/* Logos source in this link:https://icons8.com */}
        <ul
          className={
            classes["skill-list"] +
            " mt-2 d-flex flex-column flex-lg-row gap-1 justify-content-center gap-2 gap-lg-4"
          }
        >
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <CSharpLogo
              className={classes["skill-icon"] + "  d-flex align-self-center"}
            />
            <span className="d-flex justify-content-center fw-normal">C#</span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <JavaScriptLogo
              className={classes["skill-icon"] + "  d-flex align-self-center"}
            />
            <span className="d-flex justify-content-center fw-normal">
              JavaScript
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <ReactLogo
              className={classes["skill-icon"] + "  d-flex align-self-center"}
            />
            <span className="d-flex justify-content-center fw-normal">
              React.js
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <BootStrapLogo
              className={classes["skill-icon"] + "  d-flex align-self-center"}
            />
            <span className="d-flex justify-content-center fw-normal">
              Bootstrap
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <HTML5Logo
              className={classes["skill-icon"] + "  d-flex align-self-center"}
            />
            <span className="d-flex justify-content-center fw-normal">
              HTML5
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <CSSLogo
              className={classes["skill-icon"] + "  d-flex align-self-center"}
            />
            <span className="d-flex justify-content-center fw-normal">CSS</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
