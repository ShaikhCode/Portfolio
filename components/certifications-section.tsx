"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications: Certification[] = [
    {
      title: "JavaScript Fundamentals",
      issuer: "Udemy",
      date: "Oct 2024",
      image: "/cr/JS.png?height=300&width=400",
      link: "#",
    },
    {
      title: "AI Masteclass",
      issuer: "Udemy",
      date: "Dec 2024",
      image: "/cr/AI.png?height=300&width=400",
      link: "#",
    },
    {
      title: "HTML & CSS Mastery",
      issuer: "Udemy",
      date: "March 2023",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
    },
    {
      title: "PHP Development",
      issuer: "Udemy",
      date: "May 2023",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
    },
    {
      title: "MySQL Database",
      issuer: "Udemy",
      date: "July 2023",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
    },
    {
      title: "Linux Administration",
      issuer: "Udemy",
      date: "September 2023",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
    },
  ];

  const nextCertificate = () => {
    setCurrentIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Document Grid Pattern */}
        <div className="absolute inset-0 bg-document-grid opacity-5"></div>

        {/* Floating Achievement Icons */}
        <div className="absolute top-20 left-20 opacity-20">
          <div className="w-14 h-14 bg-yellow-500/30 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-2xl">🏆</span>
          </div>
        </div>
        <div className="absolute bottom-24 right-24 opacity-20">
          <div
            className="w-12 h-12 bg-emerald-500/30 rounded-lg flex items-center justify-center animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-xl">📜</span>
          </div>
        </div>
        {/* Ribbon Elements */}
        <div className="absolute top-1/3 right-10 w-2 h-32 bg-gradient-to-b from-emerald-500/20 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-10 w-2 h-24 bg-gradient-to-t from-blue-500/20 to-transparent transform -rotate-12"></div>

        {/* Background Gradients */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications</h2>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-2xl">
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={certifications[currentIndex].image || "/placeholder.svg"}
                  alt={certifications[currentIndex].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-emerald-600 text-white p-2 rounded-full">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  {certifications[currentIndex].title}
                </h3>
                <div className="flex justify-between items-center mt-2 text-zinc-600 dark:text-zinc-400">
                  <p>{certifications[currentIndex].issuer}</p>
                  <p>{certifications[currentIndex].date}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevCertificate}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextCertificate}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                {certifications[currentIndex].link && (
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700"
                    asChild
                  >
                    <a
                      href={certifications[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-emerald-500"
                    : "bg-zinc-300 dark:bg-zinc-700"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
