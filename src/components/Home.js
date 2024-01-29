/*
Extra small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px

*/

import { Link } from "react-router-dom";
import myPic from "../img/my_picture.webp";
import classes from "../css/Home.module.css";
import CSharpLogo from "../components/subcomponents/CSharpLogo.js";
import JavaScriptLogo from "../components/subcomponents/JavaScriptLogo.js";
import ReactLogo from "../components/subcomponents/ReactLogo.js";
import BootStrapLogo from "./subcomponents/BootStrapLogo.js";
import HTML5Logo from "./subcomponents/HTML5Logo.js";
import CSSLogo from "./subcomponents/CSSLogo.js";
import SocialsSub from "./subcomponents/SocialsSub.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";

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
  const [isLoading, setLoading] = useState(true);

  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <div
      className={
        classes["home-container"] +
        " container-fluid row justify-content-center"
      }
    >
      <SkeletonTheme baseColor="#a2d2ff" highlightColor="#444">
        <section className="about-section px-1 py-3 px-lg-3 py-xl-4 row row-cols-1 row-cols-md-2 gap-2 justify-content-center">
          <div className="about-image px-1 px-md-0 col col-md-4 d-flex flex-column justify-content-center">
            {isLoading ? (
              <span className="d-flex justify-content-center align-items-center">
                <Skeleton circle height={400} width={400} />
              </span>
            ) : (
              <img
                src={myPic}
                alt="Merick Icy Agustin"
                className={
                  classes["img-profile"] + " image-fluid align-self-center"
                }
              />
            )}
            <div className="d-flex flex-column mt-2">
              {isLoading ? (
                <>
                  <Skeleton height={25} />
                </>
              ) : (
                <>
                  <div className="d-flex flex-row justify-content-center">
                    <Link className={classes["email-link"]} to="/contacts">
                      merickic.agustin@gmail.com
                    </Link>
                  </div>
                </>
              )}
              <div className="d-flex flex-row justify-content-center mt-1">
                <SocialsSub />
              </div>
            </div>
          </div>
          <div className={classes["about-content"] + " col"}>
            {isLoading ? (
              <>
                <h1>
                  <Skeleton height={50} />
                </h1>
                <p>
                  <Skeleton count={6} />
                </p>
              </>
            ) : (
              <>
                <h1>About</h1>
                <p>
                  My name is&nbsp;
                  <strong className={classes.name + " text-primary"}>
                    Merick Icy Agustin
                  </strong>
                  , I've been in the I.T industry for&nbsp;
                  <strong>{curYear - startYear}</strong> years. I graduated at
                  Notre Dame of Dadiangas Universisty with a Degree of Bachelor
                  Science in Computer Science.
                </p>
                <p>
                  I'm currently exploring new techs in building web
                  applications.
                </p>
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
              </>
            )}
          </div>
        </section>
        <section className="experience-section bg-secondary pb-1 px-1 px-md-0">
          <div className="container pt-3 px-0 ">
            {isLoading ? (
              <h1>
                <Skeleton />
              </h1>
            ) : (
              <h1>Experience</h1>
            )}
            <ul className="experiences d-flex flex-column gap-3">
              {isLoading ? (
                <Skeleton count={6} />
              ) : (
                <li className="experience d-flex flex-column">
                  <p className="h3">SOFTWARE DEVELOPER</p>
                  <p className={classes["company-name"]}>
                    IT Group, Inc. (May 2023 – Present)
                  </p>
                  <ul className="d-flex flex-column gap-1">
                    <li>
                      Participated in the system design, development and
                      implementation of Netsuite Customization for the client
                    </li>
                    <li>
                      Played a key role as the main developer for the majority
                      of the projects assigned
                    </li>
                  </ul>
                </li>
              )}
              {isLoading ? (
                <Skeleton count={6} />
              ) : (
                <li className="experience d-flex flex-column">
                  <p className="h3">SOFTWARE ENGINEER</p>
                  <p className={classes["company-name"]}>
                    N-PAX Philippines, Inc. (March 2017 – May 2023)
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
              )}
              {isLoading ? (
                <Skeleton count={6} />
              ) : (
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
              )}
            </ul>
          </div>
        </section>
        <section className="skills-section pb-1 px-1 px-md-0">
          <div className="container pt-3 px-0 ">
            {isLoading ? (
              <h1>
                <Skeleton />
              </h1>
            ) : (
              <h1>Skills</h1>
            )}
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
              {isLoading ? (
                <>
                  <Skeleton circle height={80} width={80} />
                  <Skeleton />
                </>
              ) : (
                <>
                  <CSharpLogo
                    className={
                      classes["skill-icon"] + "  d-flex align-self-center"
                    }
                  />
                  <span className="d-flex justify-content-center fw-normal">
                    C#
                  </span>
                </>
              )}
            </li>
            <li
              className={
                classes.skill + " d-flex flex-column justify-content-center"
              }
            >
              {isLoading ? (
                <>
                  <Skeleton circle height={80} width={80} />
                  <Skeleton />
                </>
              ) : (
                <>
                  <JavaScriptLogo
                    className={
                      classes["skill-icon"] + "  d-flex align-self-center"
                    }
                  />
                  <span className="d-flex justify-content-center fw-normal">
                    JavaScript
                  </span>
                </>
              )}
            </li>
            <li
              className={
                classes.skill + " d-flex flex-column justify-content-center"
              }
            >
              {isLoading ? (
                <>
                  <Skeleton circle height={80} width={80} />
                  <Skeleton />
                </>
              ) : (
                <>
                  <ReactLogo
                    className={
                      classes["skill-icon"] + "  d-flex align-self-center"
                    }
                  />
                  <span className="d-flex justify-content-center fw-normal">
                    React.js
                  </span>
                </>
              )}
            </li>
            <li
              className={
                classes.skill + " d-flex flex-column justify-content-center"
              }
            >
              {isLoading ? (
                <>
                  <Skeleton circle height={80} width={80} />
                  <Skeleton />
                </>
              ) : (
                <>
                  <BootStrapLogo
                    className={
                      classes["skill-icon"] + "  d-flex align-self-center"
                    }
                  />
                  <span className="d-flex justify-content-center fw-normal">
                    Bootstrap
                  </span>
                </>
              )}
            </li>
            <li
              className={
                classes.skill + " d-flex flex-column justify-content-center"
              }
            >
              {isLoading ? (
                <>
                  <Skeleton circle height={80} width={80} />
                  <Skeleton />
                </>
              ) : (
                <>
                  <HTML5Logo
                    className={
                      classes["skill-icon"] + "  d-flex align-self-center"
                    }
                  />
                  <span className="d-flex justify-content-center fw-normal">
                    HTML5
                  </span>
                </>
              )}
            </li>
            <li
              className={
                classes.skill + " d-flex flex-column justify-content-center"
              }
            >
              {isLoading ? (
                <>
                  <Skeleton circle height={80} width={80} />
                  <Skeleton />
                </>
              ) : (
                <>
                  <CSSLogo
                    className={
                      classes["skill-icon"] + "  d-flex align-self-center"
                    }
                  />
                  <span className="d-flex justify-content-center fw-normal">
                    CSS
                  </span>
                </>
              )}
            </li>
          </ul>
        </section>
      </SkeletonTheme>
    </div>
  );
}

export default About;
