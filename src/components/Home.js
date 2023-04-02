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
      <section className="about-container px-1 py-3 px-lg-3 py-xl-4 row row-cols-1 row-cols-md-2 gap-2 justify-content-center">
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
            <a href="#" className={classes["download-cv"]}>
              Download CV
            </a>
            <a href="#">View Projects &rarr;</a>
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
            <svg
              className={classes["skill-icon"] + "  d-flex align-self-center"}
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 48 48"
              id="1982846"
            >
              <path
                d="m42.91 10.92-17-9.84a3.77 3.77 0 0 0-3.76 0l-17 9.84a3.75 3.75 0 0 0-1.87 3.25v19.66a3.75 3.75 0 0 0 1.87 3.25l17 9.84a3.77 3.77 0 0 0 3.76 0l17-9.84a3.75 3.75 0 0 0 1.87-3.25V14.17a3.75 3.75 0 0 0-1.87-3.25ZM23.7 37.15c-8.55 0-12.94-5.44-12.94-13s5-13.38 13.3-13.38c9.26 0 11.84 6.1 12 9h-7.44c-.46-2.06-1.73-3.49-4.7-3.49-3.48 0-5.45 2.8-5.45 7.69 0 5.37 2.09 7.82 5.42 7.82a4.62 4.62 0 0 0 4.69-3.32h7.47c-.95 4.15-4.17 8.68-12.35 8.68Zm17.42-14h-1l-.3 1.23h.81v1.11h-1.06l-.43 1.79h-1l.44-1.79h-1.11L37 27.24h-1l.44-1.79h-.78v-1.11h1.06l.28-1.23h-.85V22h1.12l.41-1.65h1L38.31 22h1.11l.4-1.65h1L40.41 22h.72Z"
                fill="#595bd4"
                className="color000000 svgShape"
              ></path>
              <path
                d="M37.74 24.34h1.1l.3-1.23h-1.1l-.3 1.23z"
                fill="#595bd4"
                className="color000000 svgShape"
              ></path>
            </svg>
            <span className="d-flex justify-content-center fw-normal">C#</span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <svg
              className={classes["skill-icon"] + " d-flex align-self-center"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z" />
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              />
            </svg>
            <span className="d-flex justify-content-center fw-normal">
              JavaScript
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <svg
              className={classes["skill-icon"] + " d-flex align-self-center"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                fill="#5B4282"
                d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
              />
            </svg>
            <span className="d-flex justify-content-center fw-normal">
              Bootstrap
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <svg
              className={classes["skill-icon"] + " d-flex align-self-center"}
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="2056052"
            >
              <path
                d="M3.1825,2.00012,4.78735,20.00079l7.20191,1.99933,7.22168-2.00207L20.8175,2.00012ZM17.32507,7.88739H8.87683l.20178,2.26074h8.04554l-.60584,6.778L12,18.17834v.00043l-.01013.00275L7.46753,16.92615,7.1582,13.45972H9.37439l.1571,1.76074,2.45874.66388.00208-.00049v-.00018l2.46228-.66461.25635-2.86323H7.05957L6.46411,5.67969h11.0586Z"
                fill="#595bd4"
                className="color000000 svgShape"
              ></path>
            </svg>
            <span className="d-flex justify-content-center fw-normal">
              HTML5
            </span>
          </li>
          <li
            className={
              classes.skill + " d-flex flex-column justify-content-center"
            }
          >
            <svg
              className={classes["skill-icon"] + " d-flex align-self-center"}
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="2056054"
            >
              <path
                d="M20.772,3.36426A1.00062,1.00062,0,0,0,20,3H6A1,1,0,0,0,6,5H18.78613l-.78094,4H5a1,1,0,0,0,0,2H17.61475l-1.1626,5.95508-6.32324,1.99658L4.71875,17.25244l.20361-1.06494a1.00015,1.00015,0,0,0-1.96484-.375L2.5874,17.75244A1.00059,1.00059,0,0,0,3.27,18.894L9.83008,20.9541a1.00175,1.00175,0,0,0,.60107-.00049l7.18994-2.27a1.00064,1.00064,0,0,0,.68018-.7622l2.68018-13.73A1.00008,1.00008,0,0,0,20.772,3.36426Z"
                fill="#595bd4"
                className="color000000 svgShape"
              ></path>
            </svg>
            <span className="d-flex justify-content-center fw-normal">CSS</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
