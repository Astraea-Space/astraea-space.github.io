"use client";

import { motion } from "framer-motion"
import { Pill, Globe, BarChart3, ArrowRight } from 'lucide-react'

export default function AnimatedTimeline() {
  const waveAnimation = {
    y: [-20, 20, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative h-32">
        {/* Animated icons and arrows */}
        <div className="relative h-full flex items-center justify-between">
          <motion.div animate={waveAnimation} className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-full shadow-md">
              <Pill className="w-8 h-8 text-black" />
            </div>
            <div className="mt-2 text-sm font-medium">Drugs Designed on Earth</div>
          </motion.div>

          <motion.div 
            animate={waveAnimation} 
            transition={{ ...waveAnimation.transition, delay: 0.66 }}
            className="flex flex-col items-center flex-grow"
          >
            <div className="w-full flex items-center justify-center">
              <div className="h-0.5 bg-gray-300 flex-grow" />
              <ArrowRight className="w-8 h-8 text-gray-500 mx-2" />
            </div>
          </motion.div>

          <motion.div 
            animate={waveAnimation} 
            transition={{ ...waveAnimation.transition, delay: 1.33 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white p-2 rounded-full shadow-md">
              <Globe className="w-8 h-8 text-black" />
            </div>
            <div className="mt-2 text-sm font-medium">Bring Into Space</div>
          </motion.div>

          <motion.div 
            animate={waveAnimation} 
            transition={{ ...waveAnimation.transition, delay: 2 }}
            className="flex flex-col items-center flex-grow"
          >
            <div className="w-full flex items-center justify-center">
              <div className="h-0.5 bg-gray-300 flex-grow" />
              <ArrowRight className="w-8 h-8 text-gray-500 mx-2" />
            </div>
          </motion.div>

          <motion.div 
            animate={waveAnimation}
            transition={{ ...waveAnimation.transition, delay: 2.66 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white p-2 rounded-full shadow-md">
              <BarChart3 className="w-8 h-8 text-black" />
            </div>
            <div className="mt-2 text-sm font-medium">Enabling Greater Analysis</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

