"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Sparkles, ArrowRight, Menu, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Page() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "ILTAE App",
      description:
          "Aplicación móvil educativa para personas en condición de analfabetismo, desarrollada con React Native y TypeScript.",
      details:
          "Enfocada en la inclusión social mediante ejercicios interactivos y retroalimentación visual. Incluye sistema de progreso, ejercicios adaptativos y interfaz intuitiva.",
      image: "/iltae.png",
      technologies: [
        { name: "React Native", logo: "/logos/react.png", color: "bg-cyan-600" },
        { name: "TypeScript", logo: "/logos/typescript.png", color: "bg-blue-600" },
        { name: "Figma", logo: "/logos/figma.png", color: "bg-purple-600" },
        { name: "Node.js", logo: "/logos/nodejs.png", color: "bg-orange-600" },
      ],
      github: "https://github.com/yuyo272003/iltae-app",
      demo: "https://iltae.netlify.app",
      gradient: "from-pink-600 to-purple-700",
    },
    {
      title: "PatitasAlRescate API",
      description:
          "API REST desarrollada en NestJS y MongoDB para reportar y localizar mascotas perdidas, con enfoque comunitario.",
      details:
          "Permite publicar reportes, adjuntar fotos y recibir pistas de otros usuarios. Sistema de geolocalización y notificaciones en tiempo real.",
      image: "/patitas.png",
      technologies: [
        { name: "NestJS", logo: "/logos/nestjs.png", color: "bg-red-600" },
        { name: "MongoDB", logo: "/logos/mongodb.png", color: "bg-green-600" },
        { name: "Node.js", logo: "/logos/nodejs.png", color: "bg-green-700" },
        { name: "TypeScript", logo: "/logos/typescript.png", color: "bg-gray-600" },
      ],
      github: "https://github.com/HenryEnoch22/PatitasAlRescate",
      gradient: "from-emerald-600 to-teal-700",
    },
    {
      title: "Base de Datos IMSS",
      description: "Modelo académico en SQL que simula el sistema de información de hospitales del IMSS.",
      details:
          "Incluye entidades de pacientes, personal médico y tratamientos, optimizando consultas complejas. Diseño normalizado y procedimientos almacenados.",
      image: "/imss.png",
      technologies: [
        { name: "MySQL", logo: "/logos/mysql.png", color: "bg-blue-700" },
        { name: "PostgreSQL", logo: "/logos/postgresql.png", color: "bg-orange-600" },
      ],
      github: "https://github.com/yuyo272003/bdimss",
      gradient: "from-orange-600 to-red-700",
    },
  ]

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
      <div className="min-h-screen bg-gray-900">
        {/* Navigation */}
        <nav className="relative z-50 flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">Julio Gutiérrez</div>
          <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-md border-t border-gray-700 shadow-2xl">
                <div className="max-w-7xl mx-auto px-6 py-4">
                  <div className="flex flex-col space-y-4">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(item.href)}
                            className="text-left text-white hover:text-cyan-400 transition-colors duration-200 py-2 text-lg font-medium hover:bg-white/5 rounded-lg px-4"
                        >
                          {item.name}
                        </button>
                    ))}
                  </div>
                </div>
              </div>
          )}
        </nav>

        {/* Hero/Presentation Section */}
        <section
            id="inicio"
            className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center relative z-10">
            {/* Content Section - Now full width and centered */}
            <div className="text-center space-y-10 max-w-5xl">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                  Hola Soy{" "}
                  <span className="inline-flex items-center">
                  <Sparkles className="w-16 h-16 lg:w-20 lg:h-20 text-cyan-400 mx-4" />
                </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Julio Gutiérrez Mendoza
                </span>
                </h1>

                <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                  Estudiante de Ingeniería de Software, especializado en Diseño de Software, desarrollo backend,
                  desarrollo frontend y móvil. Me apasiona crear soluciones tecnológicas, combinando diseño UI/UX con
                  código limpio y funcional.
                </p>

                <div className="flex flex-wrap justify-center gap-6 pt-8">
                  <Button
                      variant="outline"
                      size="lg"
                      className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-0 hover:from-cyan-700 hover:to-blue-800 hover:scale-105 transition-all shadow-lg text-lg px-8 py-4"
                      onClick={() => scrollToSection("#sobre-mi")}
                  >
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Conoce más sobre mí
                  </Button>

                  <div className="flex gap-4">
                    <Button
                        variant="ghost"
                        size="lg"
                        asChild
                        className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all p-4"
                    >
                      <a href="mailto:juliogm2003@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-7 h-7" />
                      </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        asChild
                        className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all p-4"
                    >
                      <a href="https://github.com/yuyo272003" target="_blank" rel="noopener noreferrer">
                        <Github className="w-7 h-7" />
                      </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        asChild
                        className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all p-4"
                    >
                      <a
                          href="https://www.linkedin.com/in/julio-guti%C3%A9rrez-mendoza-058560361"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <Linkedin className="w-7 h-7" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the content with dark background */}
        <div className="bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 space-y-20 py-20">
            {/* About Section */}
            <section id="sobre-mi" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Sobre mí
                </h2>
                <div className="w-20 h-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 mx-auto rounded-full" />
              </div>

              {/* Main About Content */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Personal Story Card */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm h-full">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Mi Historia</h3>
                          <p className="text-emerald-400">Desarrollador en formación</p>
                        </div>
                      </div>

                      <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                          Soy estudiante de <span className="text-emerald-400 font-semibold">Ingeniería de Software</span>{" "}
                          en la Universidad Veracruzana, con una pasión genuina por crear soluciones tecnológicas que
                          generen un impacto positivo en la sociedad o simplemente me gusta explorar soluciones de software
                          con diversas tecnologías.
                        </p>
                        <p>
                          Mi enfoque se centra en el{" "}
                          <span className="text-cyan-400 font-semibold">desarrollo frontend y móvil</span>, donde combino
                          código limpio y funcional con diseños intuitivos que realmente conecten con los usuarios.
                        </p>
                        <p>
                          Disfruto especialmente el proceso de{" "}
                          <span className="text-purple-400 font-semibold">traducir necesidades reales </span>
                          en soluciones digitales, colaborando estrechamente con usuarios y clientes para entender sus
                          desafíos y crear herramientas que marquen la diferencia.
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">3+</div>
                          <div className="text-sm text-gray-400">Años estudiando</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">5+</div>
                          <div className="text-sm text-gray-400">Proyectos completados</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Facts Sidebar */}
                <div className="space-y-6">
                  {/* Education Card */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          🎓
                        </div>
                        <h4 className="text-lg font-semibold text-white">Educación</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-300 font-medium">Universidad Veracruzana</p>
                        <p className="text-gray-400">Ingeniería de Software</p>
                        <p className="text-emerald-400 text-xs">En curso</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Specialization Card */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          💻
                        </div>
                        <h4 className="text-lg font-semibold text-white">Especialización</h4>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">Frontend Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-gray-300">Backend Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Software Designer</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Interests Card */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          ⚡
                        </div>
                        <h4 className="text-lg font-semibold text-white">Intereses</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Tecnología", "Diseño", "Innovación"].map((interest, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 text-xs rounded-full border border-gray-600"
                            >
                          {interest}
                        </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Skills Preview */}
              {/*<Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm">*/}
              {/*  <CardContent className="p-8">*/}
              {/*    <div className="text-center mb-8">*/}
              {/*      <h3 className="text-2xl font-bold text-white mb-2">Lo que me apasiona</h3>*/}
              {/*      <p className="text-gray-400">Combinando creatividad con tecnología</p>*/}
              {/*    </div>*/}

              {/*    <div className="grid md:grid-cols-3 gap-6">*/}
              {/*      <div className="text-center space-y-4 group">*/}
              {/*        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">*/}
              {/*          <span className="text-2xl">📱</span>*/}
              {/*        </div>*/}
              {/*        <div>*/}
              {/*          <h4 className="text-lg font-semibold text-white mb-2">Desarrollo Móvil</h4>*/}
              {/*          <p className="text-gray-400 text-sm">*/}
              {/*            Creando experiencias móviles intuitivas con React Native y tecnologías modernas.*/}
              {/*          </p>*/}
              {/*        </div>*/}
              {/*      </div>*/}

              {/*      <div className="text-center space-y-4 group">*/}
              {/*        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">*/}
              {/*          <span className="text-2xl">🎨</span>*/}
              {/*        </div>*/}
              {/*        <div>*/}
              {/*          <h4 className="text-lg font-semibold text-white mb-2">Diseño UI/UX</h4>*/}
              {/*          <p className="text-gray-400 text-sm">*/}
              {/*            Diseñando interfaces que no solo se ven bien, sino que resuelven problemas reales.*/}
              {/*          </p>*/}
              {/*        </div>*/}
              {/*      </div>*/}

              {/*      <div className="text-center space-y-4 group">*/}
              {/*        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">*/}
              {/*          <span className="text-2xl">🚀</span>*/}
              {/*        </div>*/}
              {/*        <div>*/}
              {/*          <h4 className="text-lg font-semibold text-white mb-2">Impacto Social</h4>*/}
              {/*          <p className="text-gray-400 text-sm">*/}
              {/*            Desarrollando soluciones tecnológicas que generen un cambio positivo en la comunidad.*/}
              {/*          </p>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
            </section>

            {/* Skills Section */}
            <section id="habilidades" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Habilidades
                </h2>
                <div className="w-20 h-2 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 mx-auto rounded-full" />
              </div>

              {/* Skills Categories */}
              <div className="space-y-16">
                {/* Frontend Development */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-cyan-400 text-center">Frontend Development</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "JavaScript", logo: "/logos/javascript.png" },
                      { name: "TypeScript", logo: "/logos/typescript.png" },
                      { name: "React", logo: "/logos/react.png" },
                      { name: "Next.js", logo: "/logos/nextjs.png" },
                      { name: "CSS", logo: "/logos/css.png" },
                      { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-cyan-500/50"
                        >
                          <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                            <div className="w-12 h-12 relative">
                              <Image
                                  src={skill.logo || "/placeholder.svg"}
                                  alt={`${skill.name} logo`}
                                  fill
                                  className="object-contain"
                              />
                            </div>
                          </div>
                          <h4 className="text-white font-medium text-center group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Backend Development */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-emerald-400 text-center">Backend Development</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "Java", logo: "/logos/java.png" },
                      { name: "PHP", logo: "/logos/php.png" },
                      { name: "Python", logo: "/logos/python.png" },
                      { name: "C++", logo: "/logos/cpp.png" },
                      { name: "C#", logo: "/logos/csharp.png" },
                      { name: "Node.js", logo: "/logos/nodejs.png" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-emerald-500/50"
                        >
                          <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                            <div className="w-12 h-12 relative">
                              <Image
                                  src={skill.logo || "/placeholder.svg"}
                                  alt={`${skill.name} logo`}
                                  fill
                                  className="object-contain"
                              />
                            </div>
                          </div>
                          <h4 className="text-white font-medium text-center group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-purple-400 text-center">Bases de Datos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "MySQL", logo: "/logos/mysql.png" },
                      { name: "PostgreSQL", logo: "/logos/postgresql.png" },
                      { name: "MongoDB", logo: "/logos/mongodb.png" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-purple-500/50"
                        >
                          <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                            <div className="w-12 h-12 relative">
                              <Image
                                  src={skill.logo || "/placeholder.svg"}
                                  alt={`${skill.name} logo`}
                                  fill
                                  className="object-contain"
                              />
                            </div>
                          </div>
                          <h4 className="text-white font-medium text-center group-hover:text-purple-400 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Version Control */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-pink-400 text-center">Herramientas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "Git", logo: "/logos/git.png" },
                      { name: "GitHub", logo: "/logos/github.png" },
                      { name: "VS Code", logo: "/logos/vscode.png" },
                      { name: "Postman", logo: "/logos/postman.png" },
                      { name: "Figma", logo: "/logos/figma.png" },
                      { name: "Photoshop", logo: "/logos/photoshop.png" },
                      { name: "Adobe Premiere Pro", logo: "/logos/premiere.png" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-pink-500/50"
                        >
                          <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                            <div className="w-12 h-12 relative">
                              <Image
                                  src={skill.logo || "/placeholder.svg"}
                                  alt={`${skill.name} logo`}
                                  fill
                                  className="object-contain"
                              />
                            </div>
                          </div>
                          <h4 className="text-white font-medium text-center group-hover:text-pink-400 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Carousel Section */}
            <section id="proyectos" className="space-y-8">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Proyectos</h2>
              </div>

              <div className="relative">
                {/* Carousel Container */}
                <div className="flex items-center justify-center min-h-[600px]">
                  {/* Navigation Buttons */}
                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevProject}
                      className="absolute left-4 z-30 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full w-12 h-12 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>

                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextProject}
                      className="absolute right-4 z-30 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full w-12 h-12 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>

                  {/* Projects Display */}
                  <div className="flex items-center justify-center w-full max-w-7xl mx-auto overflow-hidden">
                    <div className="flex items-center justify-center gap-4">
                      {projects.map((project, index) => {
                        const isActive = index === currentProject
                        const isPrev = index === (currentProject - 1 + projects.length) % projects.length
                        const isNext = index === (currentProject + 1) % projects.length

                        if (!isActive && !isPrev && !isNext) return null

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-500 cursor-pointer ${
                                    isActive
                                        ? "scale-100 opacity-100 z-20"
                                        : "scale-75 opacity-60 z-10 hover:opacity-80 hover:scale-80"
                                }`}
                                onClick={() => setCurrentProject(index)}
                            >
                              <Card
                                  className={`w-80 h-[520px] bg-gradient-to-br from-gray-800 to-gray-900 border-0 shadow-2xl transition-all duration-300 ${
                                      isActive ? "ring-2 ring-cyan-500/50 shadow-cyan-500/20" : "hover:shadow-xl"
                                  }`}
                              >
                                <CardContent className="p-6 h-full flex flex-col">
                                  {/* Project Image */}
                                  <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-700 h-48 flex items-center justify-center group">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                                          <div className="text-white/80 text-sm font-medium bg-gray-800/80 px-3 py-1 rounded-full">
                                            Click para ver
                                          </div>
                                        </div>
                                    )}
                                  </div>

                                  {/* Project Info */}
                                  <div className="flex-1 space-y-3">
                                    <h3
                                        className={`text-xl font-bold transition-colors ${
                                            isActive ? "text-white" : "text-gray-300"
                                        }`}
                                    >
                                      {project.title}
                                    </h3>

                                    <p
                                        className={`text-sm leading-relaxed transition-colors ${
                                            isActive ? "text-gray-300" : "text-gray-400"
                                        }`}
                                    >
                                      {project.description}
                                    </p>

                                    {isActive && <p className="text-gray-500 text-xs animate-fadeIn">{project.details}</p>}

                                    {/* Technology Icons */}
                                    <div className="flex flex-wrap gap-2">
                                      {project.technologies.slice(0, isActive ? 4 : 3).map((tech, techIndex) => (
                                          <div
                                              key={techIndex}
                                              className={`flex items-center gap-1 px-2 py-1 rounded-full ${tech.color} text-white text-xs font-medium transition-all ${
                                                  isActive ? "opacity-100" : "opacity-80"
                                              }`}
                                          >
                                            <div className="w-4 h-4 relative">
                                              <Image
                                                  src={tech.logo || "/placeholder.svg"}
                                                  alt={`${tech.name} logo`}
                                                  fill
                                                  className="object-contain"
                                              />
                                            </div>
                                            <span>{tech.name}</span>
                                          </div>
                                      ))}
                                    </div>

                                    {/* Action Buttons - Only show on active card */}
                                    {isActive && (
                                        <div className="pt-2 animate-fadeIn space-y-2">
                                          <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                asChild
                                                className="text-gray-400 hover:text-white hover:bg-gray-700 p-0 flex-1"
                                            >
                                              <a
                                                  href={project.github}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="flex items-center justify-center gap-2 py-2"
                                              >
                                                <Github className="w-4 h-4" />
                                                <span className="text-sm">GitHub</span>
                                              </a>
                                            </Button>

                                            {project.demo && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    asChild
                                                    className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 p-0 flex-1 border border-cyan-500/30"
                                                >
                                                  <a
                                                      href={project.demo}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="flex items-center justify-center gap-2 py-2"
                                                  >
                                                    <span className="text-sm">🌐</span>
                                                    <span className="text-sm">Ver Demo</span>
                                                  </a>
                                                </Button>
                                            )}
                                          </div>
                                        </div>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {projects.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentProject(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentProject
                                  ? "bg-cyan-500 scale-125"
                                  : "bg-gray-600 hover:bg-gray-500 hover:scale-110"
                          }`}
                      />
                  ))}
                </div>

                {/* Project Counter */}
                <div className="text-center mt-4">
                <span className="text-gray-500 text-sm">
                  {currentProject + 1} de {projects.length}
                </span>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="text-center space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Contacto
                </h2>
                <div className="w-20 h-2 bg-gradient-to-r from-purple-500 via-pink-600 to-rose-600 mx-auto rounded-full" />
              </div>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center">
                    <Sparkles className="w-12 h-12 text-cyan-400 animate-bounce" />
                  </div>
                  <p className="text-lg text-gray-300">¿Te interesa colaborar conmigo o ver más de mi trabajo?</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        size="lg"
                        asChild
                        className="bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 hover:from-cyan-700 hover:via-blue-800 hover:to-purple-800 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 border-0"
                    >
                      <a href="mailto:juliogm2003@hotmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Contáctame
                      </a>
                    </Button>

                    <Button
                        size="lg"
                        asChild
                        className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-700 hover:from-emerald-700 hover:via-teal-800 hover:to-cyan-800 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 border-0"
                    >
                      <a href="/CV Julio Gutiérrez Mendoza.pdf" download="CV-Julio-Gutierrez.pdf">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                          />
                        </svg>
                        Resumen
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
  )
}
