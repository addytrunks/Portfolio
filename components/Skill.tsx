"use client"

import { motion } from "framer-motion"

interface SkillProps {
    directionLeft?: boolean
    progress: number
    imageUrl: string
    noAnimate?: boolean
}

const Skill = ({directionLeft,imageUrl,progress,noAnimate}:SkillProps) => {
  return (
    <div className='group relative flex cursor-pointer mr-2'>
        <motion.img
            initial={{
                x: noAnimate ? 0 : directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{
                duration:0.5
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            src={imageUrl}
            className="rounded-full border-gray-500 border object-cover h-10 w-10 xl:h-24 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/50 h-10 w-10 xl:w-24 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="xl:text-3xl text-sm font-bold text-black opacity-100">{progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill