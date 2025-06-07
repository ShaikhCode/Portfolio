"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function ResumeSection() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Document Grid Pattern */}
        <div className="absolute inset-0 bg-document-grid opacity-5"></div>

        {/* Floating Document Icons */}
        <div className="absolute top-16 right-16 opacity-15">
          <div className="w-16 h-20 bg-zinc-300 dark:bg-zinc-700 rounded-sm shadow-lg transform rotate-6 animate-pulse">
            <div className="w-full h-2 bg-emerald-500/50 rounded-t-sm"></div>
            <div className="p-2 space-y-1">
              <div className="w-full h-1 bg-zinc-400 dark:bg-zinc-600 rounded"></div>
              <div className="w-3/4 h-1 bg-zinc-400 dark:bg-zinc-600 rounded"></div>
              <div className="w-full h-1 bg-zinc-400 dark:bg-zinc-600 rounded"></div>
            </div>
          </div>
        </div>

        {/* PDF Icon */}
        <div className="absolute bottom-20 left-20 opacity-15">
          <div className="w-12 h-12 bg-red-500/30 rounded flex items-center justify-center font-bold text-white animate-bounce">
            PDF
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-px h-24 bg-gradient-to-t from-transparent via-blue-500/30 to-transparent"></div>

        {/* Background Gradients */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title">Resume</h2>

          <div className="w-full max-w-4xl bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-emerald-600 text-white flex justify-between items-center">
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                <h3 className="font-semibold">Hussain_Shaikh_Resume.pdf</h3>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/40"
                  onClick={() => setShowQR(!showQR)}
                >
                  <QrCode className="h-4 w-4 mr-2" />
                  QR Code
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/40"
                  asChild
                >
                  <a href="/hussain_resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </div>

            {/* <div className="relative">
            {showQR && (
              <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10">
                <div className="w-32 h-32 bg-zinc-100 flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-zinc-800" />
                </div>
                <p className="text-xs text-center mt-2 text-zinc-600">Scan to download resume</p>
              </div>
            )}

            <div className="h-[70vh] bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <img
                      src="/placeholder.svg?height=800&width=600"
                      alt="Resume preview"
                      className="h-full max-h-[65vh] object-contain"
                    />
                    <p className="text-center mt-2 text-sm text-zinc-600 dark:text-zinc-400">Click to view full size</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh]">
                  <div className="h-full w-full overflow-auto">
                    <img
                      src="/placeholder.svg?height=1200&width=800"
                      alt="Resume full view"
                      className="w-full h-auto"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
