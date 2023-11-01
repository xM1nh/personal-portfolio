import './_Projects.css'
import { forwardRef } from 'react'

interface Project {
  title: string,
  description: string,
  skills: string[],
  image: string,
  links: {
    preview: string,
    github: string,
  }
}

interface ProjectList {
  projects: Project[]
}

const Projects = forwardRef<HTMLDivElement, ProjectList>(({ projects }: ProjectList, ref) => {
  return (
    <div className="projects-container" ref={ref}>
      <ProjectList projects={projects} />
    </div>
  );
});

const ProjectList = ({ projects }: ProjectList) => {
  return (
    <div className="project-list">
      {projects.map((proj, index) => {
        return <Project title={proj.title} description={proj.description} links={proj.links} skills={proj.skills} image={proj.image} key={`project${index}`} />;
      })}
    </div>
  );
};

const Project = ({ title, description, links, skills, image }: Project) => {
  return (
    <div className="project-item">
      <img className="project-image" src={image} />
      <div className="project-background" />
      <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div className="project-skills">
            {skills.map((skill, index) => {
              return <div className="project-skill" key={`skill${index}`}>{skill}</div>;
            })}
          </div>
          <div className="project-links">
            {links.preview ? <a className="project-link" href={links.preview} rel="noopener" target="_blank">Live Preview</a> : <></>}
            <a className="project-link" href={links.github} rel="noopener" target="_blank">View Source</a>
          </div>
        </div>
    </div>
  );
};

export default Projects;
