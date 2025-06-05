"use client"

import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"

interface BootAnimationProps {
  onComplete: () => void
}

export default function BootAnimation({ onComplete }: BootAnimationProps) {
  const [progress, setProgress] = useState(0)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setShowWelcome(true)
            return 100
          }
          return prev + Math.floor(Math.random() * 10) + 1
        })
      }, 150)

      return () => clearInterval(interval)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        onComplete()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showWelcome, onComplete])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-2xl px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2">hussain-os-terminal</span>
          </div>
          <div className="terminal-body h-96">
            <div className="terminal-text">
              <p>$ Starting HussainOS v1.0.0</p>
              <p>$ Initializing system components...</p>
              <p>$ Loading kernel modules... Done</p>
              <p>$ Checking system integrity... Done</p>
              <p>$ Mounting file systems... Done</p>
              <p>$ Starting network services... Done</p>
              <p>$ Loading developer profile... Done</p>
              <p>$ System boot in progress: {progress}%</p>
              {progress >= 100 && (
                <div className="mt-4">
                  <p>$ System boot complete</p>
                  <p>$ Welcome to HussainOS</p>
                  <p className="mt-4">
                    {showWelcome && (
                      <TypeAnimation
                        sequence={[
                          "Initializing portfolio interface...",
                          1000,
                          "Loading developer data...",
                          1000,
                          "Ready to explore!",
                          500,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="typing-cursor"
                      />
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
