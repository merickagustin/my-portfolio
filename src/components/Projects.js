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
];

const renderProjectCards = (projectCards) => {
  return projectCards.map((projectCard) => (
    <div className="project-card shadow p-3">
      <div className="project-heading">
        <p className="project-title">{projectCard.projectTitle}</p>
        <p className="project-date">{projectCard.projectDate}</p>
      </div>
      <ul className="tech-tags">
        {projectCard.techs.map((tech) => (
          <li className="tech-tag-item">{tech}</li>
        ))}
      </ul>
      <p className="project-description">{projectCard.projectDescription}</p>
      <div className="source-links d-flex gap-2">
        <a className="web-link button--link" href={projectCard.sourceWebsite}>
          View Website
        </a>
        <a
          className="source-link button--link"
          href={projectCard.sourceCodeLink}
        >
          View Projects
        </a>
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
          <div className={classes.projects}>
            {renderProjectCards(projectCards)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
