import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/viniProfile.jpeg"
import { motion } from "framer-motion"
import { DownloadButton } from "./DownloadButton"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

export default function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Vinícius Bonifácio
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="mb-4"
                        >
                            <DownloadButton />
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-24 hidden sm:block">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic}
                        className="rounded-xl items-center h-[450px] sm:h-[450px] sm:ml-auto sm:mr-[100px]"
                        alt="Vinícius Bonifácio"
                    />
                </div>
            </div>
        </div>
    )
}
