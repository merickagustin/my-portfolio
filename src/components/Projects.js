import classes from "../css/Projects.module.css";

const projectCards = [
  {
    projectTitle: "Omnifood Responsive Website",
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
    projectDescription: "My own portfolio website to showcase my projects.",
    sourceCodeLink: "https://github.com/merickagustin/my-portfolio",
    sourceWebsite: "",
    techs: ["HTML5", "JavaScript", "CSS", "React.js", "BootStrap5"],
  },
];

const renderProjectCards = (projectCards) => {
  return projectCards.map((projectCard, i) => (
    <div key={i} className="col-10 col-sm-8 col-lg-12 col-xl-7">
      <div className="card border-primary shadow">
        <div className="card-header d-flex flex-column flex-lg-row gap-1 align-items-center">
          <p className={classes["project-title"]}>{projectCard.projectTitle}</p>
          <p className={classes["project-date"] + " text-primary"}>
            {projectCard.projectDate}
          </p>
        </div>
        <div className="card-body">
          <p className="card-text">{projectCard.projectDescription}</p>
          <div className={classes["tech-tags"]}>
            {projectCard.techs.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>

          <div className="source-links d-flex flex-column flex-md-row gap-2 mt-2">
            {projectCard.sourceWebsite !== "" ? (
              <a
                key={i}
                className={classes["link-highlight"]}
                href={projectCard.sourceWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            ) : (
              <></>
            )}
            <a
              className={classes["link-highlight"]}
              href={projectCard.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
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
    <section className="container-fluid justify-content-center">
      <div className="px-1 py-3 px-lg-5 py-xl-4 row justify-content-center">
        <div className="container px-0">
          <h1>Projects</h1>
          <div className="row g-1 justify-content-center">
            {renderProjectCards(projectCards)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
