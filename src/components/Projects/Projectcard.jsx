export default function Projectcard({project}){
    return(
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-sky-100 hover:shadow-2xl transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-sky-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className="text-xs bg-sky-100 text-sky-600 px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col gap-3">
                    <a href={project.demo} target="_blank" className="w-full text-center py-2 rounded-xl bg-gray-800 text-white font-semibold hover:bg-sky-600 transiton">
                        Live demo
                    </a>
                    <a href={project.github} target="_blank" className="w-full text-center py-2 rounded-xl bg-gray-800 text-white font-semibold hover:bg-black transition">
                        GitHub
                    </a>
                    {project.video&&<a href={project.video} target="_blank" className="w-full text-center py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                       Watch Tutorial 
                    </a>}
                </div>
            </div>
        </div>
    )
}