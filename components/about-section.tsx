"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const achievements = [
    { title: "1st Prize", description: "Website Making", icon: Award },
    { title: "2nd Prize", description: "Programming MCQ", icon: Award },
    { title: "2nd Prize", description: "Technical Poster Presentation", icon: Award },
    { title: "State Level", description: "Paper Presentation", icon: Award },
    { title: "State Level", description: "Technical MCQ", icon: Award },
    { title: "State Level", description: "CodeVerse", icon: Award },
    { title: "State Level", description: "Project Presentation", icon: Award },
    { title: "College Level", description: "Project Presentation", icon: Award },
    { title: "State Level", description: "Hackaton", icon: Award }
  ]

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal Grid Pattern */}
        <div className="absolute inset-0 bg-diagonal-grid opacity-5"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-emerald-500/20 rounded-lg transform rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-24 h-24 border-2 border-blue-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Picture Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square max-w-xs">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-zinc-800 dark:bg-zinc-700 rounded-lg transform -rotate-3"></div>
              <div className="relative h-full w-full overflow-hidden rounded-lg border-4 border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shadow-lg">
                <img
                  src="/hussain.png?height=400&width=400"
                  alt="Hussain Shaikh"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-mono text-sm">Mohd.Hussain</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Me Content - Now in 2 columns instead of 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="h-6 w-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Hussain Shaikh</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Full Stack Developer passionate about creating innovative
                    web solutions and exploring new technologies. I enjoy
                    solving complex problems From web apps to IoT prototypes,I
                    turning ideas into reality through code.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <ul className="text-zinc-600 dark:text-zinc-400 list-disc pl-5 space-y-1">
                    <li>
                      <strong>Diploma in Computer Engineering</strong> – CO-I,
                      MSBTE (2022–2025)
                    </li>
                    <li>
                      <strong>SSC (10th)</strong> – Maharashtra Board (2022)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements - Now full width below the profile and about content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                      <achievement.icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
