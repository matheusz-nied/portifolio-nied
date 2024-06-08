"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Transformando ideias em software
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='font-kalam text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Uma linguagem não faz seu código ser bom, programadores bons fazem seu código ser bom.
        </motion.div>
    </div>
  )
}

export default SkillText