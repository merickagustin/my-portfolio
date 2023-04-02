import classes from "../css/Projects.module.css";

const projectCards = [
  {
    projectTitle: "Omnifood Responsive website app",
    projectDate: "(March 2023)",
    projectDescription:
      "Building a responsive website from mobile first to desktop display.",
    techs: ["HTML5", "JavaScript", "CSS"],
  },
];

const renderProjectCards = (projectCards) => {
  return projectCards.map((projectCard) => (
    <div className="project-card">
      <div className="project-heading">
        <p className="project-title">{projectCard.projectTitle}</p>
        <p className="project-date">{projectCard.projectDate}</p>
      </div>
      <p className="project-description">{projectCard.projectDescription}</p>
      <ul className="tech-tags">
        {projectCard.techs.map((tech) => (
          <li className="tech-tag-item">{tech}</li>
        ))}
      </ul>
    </div>
  ));
};

function Projects() {
  return (
    <div className="row justify-content-center">
      <div className="px-1 py-3 px-lg-3 py-xl-4 row justify-content-center">
        <div className="container pt-3 px-0">
          <h1>Projects</h1>
          <div className="projects"></div>
          {renderProjectCards(projectCards)}
        </div>
      </div>
    </div>
  );
}

export default Projects;
