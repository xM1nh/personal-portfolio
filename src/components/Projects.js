const Projects = ({projects}) => {
    return (
        <div className="projects-container">
            <div className="projects-container-title">Projects</div>
            <ProjectList projects={projects} />
        </div>
    )
}

const ProjectList = ({projects}) => {
    return (
        <div className="project-list">
            {projects.map((proj, index) => {
                return (
                    <Project project={proj} key={index}/>
                )
            })}
        </div>
    )
}

const Project = ({proj}) => {
    return (
        <div className="project-item">
            <h2>{proj.title}</h2>
            <h3>{proj.description}</h3>
            <TechList />
            <ProjectLink demo={proj.demo} github={proj.github} />
        </div>
    )
}

const TechList = ({techlist}) => {
    return (
        <div className="tech-list">
            {techlist.map((item, index) => {
                <TechItem item={item} key={index} />
            })}
        </div>
    )
}

const TechItem = ({tech}) => {
    return (
        <div className="tech-item">

        </div>
    )
}

const ProjectLink = ({demo, github}) => {
    return (
        <div className="project-link">
            <a className="project-demo" href={demo}></a>
            <a className="project-github" href={github}></a>
        </div>
    )
}

export default Projects