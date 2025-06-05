"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Code } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  github?: string
  demo?: string
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Acedamic-Hub",
      description: "It is a smart web-based platform that helps colleges manage student attendance, marks, feedback, and communication between admin, staff, and students in one easy-to-use system. ",
      image: "/project/AH.png?height=200&width=400",
      techStack: ["HTML", "JS", "PHP","MYSql"],
      github: "https://github.com/ShaikhCode/ACADEMIC-HUB.git",
      demo: "https://github.com/ShaikhCode/ACADEMIC-HUB.git",
    },
    {
      title: "Amazon Clone",
      description:
        "A full-featured e-commerce platform inspired by Amazon with user authentication and payment processing.",
      image: "/project/Amazon.png?height=200&width=400",
      techStack: ["React", "Firebase", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Learning Guidance",
      description: "Roadmap-based learning platform that guides users through structured learning paths.",
      image: "/project/RM.png?height=200&width=400",
      techStack: ["React", "Nodejs", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Generator",
      description: "A tool that helps developers create professional portfolios with minimal effort.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    
  ]

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

        {/* Floating Project Icons */}
        <div className="absolute top-24 right-24 opacity-15">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold transform rotate-12 animate-pulse">
            &lt;/&gt;
          </div>
        </div>
        <div className="absolute bottom-32 left-32 opacity-15">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
            {}
          </div>
        </div>

        {/* Geometric Lines */}
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-blue-500/30 to-transparent"></div>

        {/* Background Gradients */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col card-hover overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-emerald-500" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-zinc-100 dark:bg-zinc-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
