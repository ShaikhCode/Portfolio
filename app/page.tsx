"use client"

import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Moon, Sun, ChevronDown, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import BootAnimation from "@/components/boot-animation"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import TerminalEasterEgg from "@/components/terminal-easter-egg"
import { useTheme } from "next-themes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 overflow-x-hidden">
      {!bootComplete ? (
        <BootAnimation onComplete={() => setBootComplete(true)} />
      ) : (
        <>
          <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowTerminal(!showTerminal)}
              className="rounded-full"
            >
              <Terminal className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {showTerminal && (
            <div className="fixed bottom-4 right-4 z-50">
              <TerminalEasterEgg onClose={() => setShowTerminal(false)} />
            </div>
          )}

          <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating Code Snippets */}
              <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
                <div className="bg-zinc-800 dark:bg-zinc-700 p-3 rounded-md font-mono text-xs text-emerald-500 transform rotate-12">
                  <div>const developer = {`{`}</div>
                  <div> name: "Hussain",</div>
                  <div> skills: ["React", "JS"]</div>
                  <div>{`}`}</div>
                </div>
              </div>
              

              <div className="absolute top-40 right-20 opacity-20 dark:opacity-10">
                <div className="bg-zinc-800 dark:bg-zinc-700 p-3 rounded-md font-mono text-xs text-blue-400 transform -rotate-6">
                  <div>function createAwesome() {`{`}</div>
                  <div> return "portfolio";</div>
                  <div>{`}`}</div>
                </div>
              </div>

              <div className="absolute bottom-32 left-20 opacity-20 dark:opacity-10">
                <div className="bg-zinc-800 dark:bg-zinc-700 p-3 rounded-md font-mono text-xs text-purple-400 transform rotate-6">
                  <div>{"<HussainOS />"}</div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-32 right-32 animate-bounce">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold opacity-30">
                  JS
                </div>
              </div>

              <div className="absolute bottom-40 right-40 animate-pulse">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold opacity-30">
                  Re
                </div>
              </div>

              <div className="absolute top-60 left-32 animate-bounce" style={{ animationDelay: "1s" }}>
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold opacity-30">
                  Py
                </div>
              </div>

              <div className="absolute top-80 left-10 animate-bounce" style={{ animationDelay: "1s" }}>
                <div className="w-8 h-8  rounded-lg flex items-center justify-center text-white font-bold opacity-30" >
                  <img src="/logo.png" alt="logo" style={{borderRadius:"50%"}}/>
                </div>
              </div>

              {/* Grid Pattern Background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

              {/* Gradient Orbs */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            <div className="max-w-4xl w-full text-center relative z-10">
              {/* Terminal Window Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="terminal-window max-w-2xl mx-auto">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="text-xs text-zinc-400 ml-2">hussain-os-boot</span>
                  </div>
                  <div className="terminal-body text-left">
                    <div className="font-mono text-sm text-emerald-500 mb-2">HussainOS v1.0.0 loaded successfully</div>
                    <div className="font-mono text-sm text-zinc-400 mb-4">
                      System ready. Initializing developer profile...
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={["Welcome, I'm MD.Hussain Shaikh", 1000, "Full Stack Developer", 1000, "Expert In Front-End Dev",1000,
                      "Welcome, I'm MD.Hussain Shaikh",1000,"Till Now 109 Completed Project",1000,"2 Month Expreience"
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </h1>

                <motion.p
                  className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Building digital experiences with code and creativity. Passionate about turning innovative ideas into
                  reality.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button
                    onClick={() => scrollToSection("about")}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Enter Portfolio
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 text-lg font-semibold"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>

              {/* Tech Stack Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12"
              >
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Tech Stack</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["React", "JavaScript", "Python", "Java", "C++", "MySQL"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <ChevronDown className="h-8 w-8 text-emerald-500" />
            </motion.div>
          </section>

          <div className="snap-y snap-mandatory">
            <div id="about" className="snap-start">
              <AboutSection />
            </div>
            <div id="skills" className="snap-start">
              <SkillsSection />
            </div>
            <div id="projects" className="snap-start">
              <ProjectsSection />
            </div>
            <div id="certifications" className="snap-start">
              <CertificationsSection />
            </div>
            <div id="resume" className="snap-start">
              <ResumeSection />
            </div>
            <div id="contact" className="snap-start">
              <ContactSection />
            </div>
          </div>
        </>
      )}
    </main>
  )
}
