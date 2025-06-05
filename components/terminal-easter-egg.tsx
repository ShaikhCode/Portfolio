"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TerminalEasterEggProps {
  onClose: () => void
}

export default function TerminalEasterEgg({ onClose }: TerminalEasterEggProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to HussainOS Terminal",
    "Type 'help' to see available commands",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
    inputRef.current?.focus()
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    let response: string[] = []

    switch (command) {
      case "help":
        response = [
          "Available commands:",
          "- help: Show this help message",
          "- about: Show information about me",
          "- skills: List my skills",
          "- projects: Show my projects",
          "- contact: Show contact information",
          "- clear: Clear the terminal",
          "- exit: Close the terminal",
        ]
        break
      case "about":
        response = ["Hussain Shaikh", "Full Stack Developer", "Computer Engineering Student (MSBTE, 2025)"]
        break
      case "skills":
        response = [
          "Skills:",
          "- Languages: C, C++, Python, Java, JavaScript, HTML, CSS",
          "- Frameworks: React",
          "- Tools: Arduino, Blynk",
          "- Databases: MySQL, MongoDB, Pot",
        ]
        break
      case "projects":
        response = [
          "Projects:",
          "1. Portfolio Generator",
          "2. Amazon Clone",
          "3. Learning Guidance – Roadmap Based Learning",
          "",
          "Type 'project 1', 'project 2', or 'project 3' for details",
        ]
        break
      case "project 1":
        response = [
          "Portfolio Generator",
          "A tool that helps developers create professional portfolios with minimal effort.",
          "Tech: React, JavaScript, Tailwind CSS",
        ]
        break
      case "project 2":
        response = [
          "Amazon Clone",
          "A full-featured e-commerce platform inspired by Amazon with user authentication and payment processing.",
          "Tech: React, Firebase, CSS",
        ]
        break
      case "project 3":
        response = [
          "Learning Guidance",
          "Roadmap-based learning platform that guides users through structured learning paths.",
          "Tech: JavaScript, HTML, CSS, MongoDB",
        ]
        break
      case "contact":
        response = [
          "Contact Information:",
          "Email: hussain@example.com",
          "GitHub: github.com/hussain",
          "LinkedIn: linkedin.com/in/hussain",
        ]
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "exit":
        onClose()
        return
      default:
        response = [`Command not found: ${command}. Type 'help' for available commands.`]
    }

    setHistory([...history, `$ ${input}`, ...response])
    setInput("")
  }

  return (
    <div className="terminal-window w-80 md:w-96">
      <div className="terminal-header flex justify-between items-center">
        <div className="flex items-center">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="text-xs text-zinc-400 ml-2">hussain-os-terminal</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6 text-zinc-400 hover:text-zinc-200">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div ref={terminalRef} className="terminal-body h-80 overflow-y-auto">
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-emerald-500"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}
