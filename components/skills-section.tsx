"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Laptop,
  Wrench,
  FileCode,
  LayoutPanelTop,
  Smartphone,
  Server,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = "all" | "languages" | "frameworks" | "tools" | "databases";

interface Skill {
  name: string;
  category: SkillCategory[];
  icon: React.ReactNode;
  color: string;
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const skills: Skill[] = [
    // Languages
    { name: "C", category: ["languages"], icon: "C", color: "bg-blue-500" },
    { name: "C++", category: ["languages"], icon: "C++", color: "bg-blue-600" },
    {
      name: "Python",
      category: ["languages"],
      icon: "Py",
      color: "bg-yellow-500",
    },
    { name: "Java", category: ["languages"], icon: "Ja", color: "bg-red-500" },
    {
      name: "JavaScript",
      category: ["languages"],
      icon: "JS",
      color: "bg-yellow-400",
    },
    {
      name: "TypeScript",
      category: ["languages"],
      icon: "TS",
      color: "bg-sky-600",
    },
    {
      name: "HTML",
      category: ["languages"],
      icon: "HTML",
      color: "bg-orange-500",
    },
    { name: "CSS", category: ["languages"], icon: "CSS", color: "bg-blue-400" },
    {
      name: "PHP",
      category: ["languages"],
      icon: "PHP",
      color: "bg-indigo-600",
    },

    // Frameworks
    {
      name: "React",
      category: ["frameworks"],
      icon: <FileCode className="h-5 w-5" />,
      color: "bg-cyan-500",
    },
    {
      name: "Next.js",
      category: ["frameworks"],
      icon: "N",
      color: "bg-gray-800",
    },
    {
      name: "Express.js",
      category: ["frameworks"],
      icon: "Ex",
      color: "bg-zinc-700",
    },

    // Tools
    {
      name: "Android Studio",
      category: ["tools"],
      icon: <Smartphone className="h-5 w-5" />,
      color: "bg-green-700",
    },
    { name: "Arduino", category: ["tools"], icon: "Ar", color: "bg-teal-500" },
    { name: "Blynk", category: ["tools"], icon: "Bl", color: "bg-purple-500" },
    {
      name: "Tailwind CSS",
      category: ["tools"],
      icon: "TW",
      color: "bg-sky-500",
    },
    { name: "Pug", category: ["tools"], icon: "P", color: "bg-pink-600" },

    // Databases
    {
      name: "MySQL",
      category: ["databases"],
      icon: "SQL",
      color: "bg-blue-700",
    },
    {
      name: "MongoDB",
      category: ["databases"],
      icon: "Mo",
      color: "bg-green-600",
    },
    {
      name: "PostgreSQL",
      category: ["databases"],
      icon: "PG",
      color: "bg-amber-600",
    },
  ];

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category.includes(activeCategory)
  );

  const categories = [
    { id: "all", name: "All", icon: Laptop },
    { id: "languages", name: "Languages", icon: Code },
    { id: "frameworks", name: "Frameworks", icon: LayoutPanelTop },
    { id: "tools", name: "Tools", icon: Wrench },
    { id: "databases", name: "Databases", icon: Database },
  ];

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>

        {/* Floating Code Elements */}
        <div className="absolute top-16 left-16 opacity-10">
          <div className="bg-zinc-800 dark:bg-zinc-700 p-2 rounded font-mono text-xs text-cyan-400 transform rotate-12">
            {"{ skill: 'React' }"}
          </div>
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <div className="bg-zinc-800 dark:bg-zinc-700 p-2 rounded font-mono text-xs text-yellow-400 transform -rotate-12">
            {"function code() {}"}
          </div>
        </div>

        {/* Animated Circles */}
        <div
          className="absolute top-1/4 left-10 w-20 h-20 border border-purple-500/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-16 w-16 h-16 border border-emerald-500/20 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>

        {/* Gradient Background */}
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={
                  activeCategory === category.id
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : ""
                }
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                    <div
                      className={`${skill.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-3`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
