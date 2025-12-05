import ProjectCard from "./Projectcard";
import projectData from "./projectsData"
export default function Projects(){
    return(
        <section id="projects" className="py-24 px-4 md:px-12 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-12">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectData.map((project)=>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}