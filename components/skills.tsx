import Image from "next/image"

const skills = [
    {
        name: "React",
        logo: "/logos/react.png",
        level: 90,
    },
    {
        name: "JavaScript",
        logo: "/logos/javascript.png",
        level: 95,
    },
    {
        name: "TypeScript",
        logo: "/logos/typescript.png",
        level: 85,
    },
    {
        name: "Node.js",
        logo: "/logos/nodejs.png",
        level: 80,
    },
    {
        name: "Python",
        logo: "/logos/python.png",
        level: 75,
    },
    {
        name: "Next.js",
        logo: "/logos/nextjs.png",
        level: 88,
    },
    {
        name: "Tailwind CSS",
        logo: "/logos/tailwind.png",
        level: 92,
    },
    {
        name: "Git",
        logo: "/logos/git.png",
        level: 85,
    },
]

export default function Skills() {
    return (
        <section id="habilidades" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Habilidades Técnicas</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tecnologías y herramientas que domino para crear soluciones innovadoras
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 mb-4 relative">
                                    <Image
                                        src={skill.logo || "/placeholder.svg"}
                                        alt={`${skill.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{skill.name}</h3>

                                {/* Progress bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional skills section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Otras Competencias</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "MongoDB",
                            "PostgreSQL",
                            "Docker",
                            "AWS",
                            "Firebase",
                            "GraphQL",
                            "REST APIs",
                            "Agile/Scrum",
                            "Testing",
                            "CI/CD",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
