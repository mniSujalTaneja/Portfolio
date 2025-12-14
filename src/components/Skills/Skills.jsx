export default function Skills(){
    const skills=[
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React.js", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "💠" },
        { name: "Git & GitHub", icon: "📁" },
        { name: "Responsive Design", icon: "📱" },
        { name: "API Integration", icon: "🔌" },
        { name: "Data Structures & Algorithms (DSA)", icon: "🧠" },
    ]
    return(
        <section id="skills" className="py-24 px-4 md:px-12 bg-sky-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-12">
                Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill,index)=>(
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-sky-100 flex flex-col items-center hover:shadow-xl transition">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-sky-700 font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}