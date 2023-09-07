import React from 'react';
import Image from 'next/image'
import { motion, Variants } from 'framer-motion';


const StatsBlock = () => {

    const variants = {
        hidden: { opacity: 0 },
        showing: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const animationItem = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        showing: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                type: "spring", 
                bounce: 0.4
            }
        }
    }

    return (
        <div className="hero-card stats-container min-h-full min-w-full border border-neutral-950 hover:border-yellow-500 bg-neutral-900 hover:bg-neutral-950 duration-100 ease-in-out rounded-md">
            <div className="stats-block flex justify-center pt-10">
                <h2 className="text-xl text-white text-center mb-4">Stuff I'm good at</h2>
            </div>

            <div className="stats-block min-h-full min-w-full">
                <motion.div 
                    initial="hidden"
                    // animate="showing"
                    whileInView="showing"
                    variants={variants}
                    // whileInView={{ opacity: 1 }}
                    className="flex flex-wrap items-center justify-center lg:p-6"
                    viewport={{ once: true }}
                >
                    <motion.div variants={animationItem}><img src="/images/tech_images/html.png" className="h-14 rotate-[25deg] html" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/css.png" className="h-14 rotate-[-25deg] css" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/sass.png" className="h-14 rotate-[20deg] sass" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/bootstrap.png" className="h-14 rotate-[15deg] bootstrap" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/tailwind.svg" className="h-8 rotate-[-24deg] tailwind" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/react.png" className="h-14 rotate-[-15deg] react" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/next.svg" className="h-10 rotate-[25deg] next" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/javascript.png" className="h-14  rotate-[20deg] javascript" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/xd.png" className="h-14 rotate-[30deg] xd" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/ps.png" className="h-14 rotate-[-30deg] ps" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/ai.png" className="h-14 rotate-[-15deg] ai" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/pr.png" className="h-14 rotate-[30deg] pr" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/ae.png" className="h-14 rotate-[10deg] ae" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/node.png" className="h-14 rotate-[-30deg] node" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/typescript.png" className="h-14 rotate-[30deg] typescript" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/csharp.png" className="h-14 rotate-[-25deg] csharp" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/dotnet.png" className="h-14 rotate-[-15deg] dotnet" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/blender.png" className="h-14 rotate-[15deg] blender" alt="" /></motion.div>
                    <motion.div variants={animationItem}><img src="/images/tech_images/unity.png" className="h-14 rotate-[-27deg] unity" alt="" /></motion.div>
                </motion.div> 
            </div>
        </div>
    )
}

export default StatsBlock