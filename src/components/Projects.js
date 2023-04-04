import classes from "../css/Projects.module.css";

const projectCards = [
  {
    projectTitle: "Omnifood Responsive website app",
    projectDate: "(March 2023)",
    projectDescription:
      "Building a responsive website from mobile first to desktop display.",
    sourceCodeLink: "https://github.com/merickagustin/omnifood-website-project",
    sourceWebsite: "https://omnifood-merick.netlify.app/",
    techs: ["HTML5", "JavaScript", "CSS"],
  },
  {
    projectTitle: "Portfolio Website",
    projectDate: "(April 2023)",
    projectDescription:
      "Building a my own portfolio website to showcase my projects.",
    sourceCodeLink: "https://github.com/merickagustin/my-portfolio",
    sourceWebsite: "",
    techs: ["HTML5", "JavaScript", "CSS", "ReactJs", "BootStrap5"],
  },
];

const renderProjectCards = (projectCards) => {
  return projectCards.map((projectCard) => (
    // <div className="project-card shadow col p-2">
    //   <div className="project-heading text-light">
    //     <p className="project-title">{projectCard.projectTitle}</p>
    //     <p className="project-date">{projectCard.projectDate}</p>
    //   </div>
    //   <ul className={classes["tech-tags"] + " d-flex flex-row gap-1"}>
    //     {projectCard.techs.map((tech) => (
    //       <li className="tech-tag-item">
    //         <span>{tech}</span>
    //       </li>
    //     ))}
    //   </ul>
    //   <p className="project-description">{projectCard.projectDescription}</p>
    //   <div className="source-links d-flex gap-2">
    //     <a className="web-link button--link" href={projectCard.sourceWebsite}>
    //       View Website
    //     </a>
    //     <a
    //       className="source-link button--link"
    //       href={projectCard.sourceCodeLink}
    //     >
    //       View Projects
    //     </a>
    //   </div>
    // </div>
    <div className="col col-sm-3">
      <div class="card border-primary shadow">
        <div className="card-header d-flex flex-row gap-1 align-items-center">
          <p className={classes["project-title"] + " text-primary"}>
            {projectCard.projectTitle}
          </p>
          <p className={classes["project-date"]}>{projectCard.projectDate}</p>
        </div>
        <div class="card-body">
          <p className="card-text">{projectCard.projectDescription}</p>
          <ul className={classes["tech-tags"] + " d-flex flex-row gap-1 mb-1"}>
            {projectCard.techs.map((tech) => (
              <li className="tech-tag-item">
                <span>{tech}</span>
              </li>
            ))}
          </ul>
          <div className="source-links d-flex gap-2">
            {projectCard.sourceWebsite !== "" ? (
              <a
                className={classes["link-highlight"]}
                href={projectCard.sourceWebsite}
              >
                View Website
              </a>
            ) : (
              <></>
            )}
            <a
              className={classes["link-highlight"]}
              href={projectCard.sourceCodeLink}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
};

function Projects() {
  return (
    <section className="row justify-content-center">
      <div className="px-1 py-3 px-lg-5 py-xl-4 row justify-content-center">
        <div className="container pt-3 px-0">
          <h1>Projects</h1>
          <div className="projects row row-cols-1 row-cols-xl-2">
            {renderProjectCards(projectCards)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
