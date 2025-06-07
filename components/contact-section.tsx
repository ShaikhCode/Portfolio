"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    // Redirect to default email app
    // window.location.href = `mailto:hussain25177@gmail.com?subject=${email:""}&body=${message:""}`;
  };

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network Pattern */}
        <div className="absolute inset-0 bg-network-pattern opacity-5"></div>

        {/* Floating Communication Icons */}
        <div className="absolute top-20 right-20 opacity-20">
          <div className="w-14 h-14 bg-blue-500/30 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-2xl">💬</span>
          </div>
        </div>
        <div className="absolute bottom-32 left-16 opacity-20">
          <div className="w-12 h-12 bg-emerald-500/30 rounded-lg flex items-center justify-center animate-bounce">
            <span className="text-xl">📧</span>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="absolute top-1/2 left-1/4 w-24 h-px bg-gradient-to-r from-emerald-500/30 to-blue-500/30 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-32 h-px bg-gradient-to-l from-blue-500/30 to-purple-500/30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Signal Waves */}
        <div className="absolute top-1/4 left-10">
          <div className="w-8 h-8 border-2 border-emerald-500/20 rounded-full animate-ping"></div>
          <div
            className="absolute top-2 left-2 w-4 h-4 border-2 border-emerald-500/30 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Have a question or want to work together? Feel free to reach out
                using the form or through my social links.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <a
                  href="mailto:hussain25177@gmail.com"
                  className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <span>hussain25177@gmail.com</span>
                </a>

                <a
                  href="https://github.com/ShaikhCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                    <Github className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <span>github.com/hussain</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/MdHussainShaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                    <Linkedin className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <span>linkedin.com/in/hussain</span>
                </a>
              </div>
            </div>

            <div>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-zinc-400 ml-2">
                    contact-form
                  </span>
                </div>
                <div className="terminal-body">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <p className="mb-1">$ name:</p>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <p className="mb-1">$ email:</p>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-emerald-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <p className="mb-1">$ message:</p>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-emerald-500 min-h-[120px]"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">Processing...</span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
