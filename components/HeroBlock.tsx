import React from 'react';
import Image from 'next/image'
import { motion, Variants } from 'framer-motion';

const HeroBlock = () => {

    const variants = {
        hidden: { opacity: 0 },
        showing: {
            opacity: 1,
            transition: {
                staggerChildren: 0.125
            }
        }
    }

    const animationItem = {
        hidden: {
            opacity: 0,
        },
        showing: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    const firstLineVariants: Variants = {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 0,
          rotate: -6,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
    };

    const secondLineVariants: Variants = {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 0,
          rotate: 6,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
    };
    
    return (
        <div>
            <div className="px-4 md:px-0">

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8}}
                    variants={firstLineVariants}
                >
                    <h2 className="subtitle mb-10">I’m a UI/UX designer… 🎨</h2>
                </motion.div>

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8}}
                    variants={secondLineVariants}
                >
                    <div>
                    <h2 className="subtitle text-right mb-1">… and a full-stack developer 🧑🏻‍💻</h2>
                    <h3 className="font-medium text-gray-400 mb-10 md:mb-20 text-lg md:text-xl tracking-tighter text-right">Also a little copywriting, game dev, audio engineering, 3D modelling...</h3>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}

export default HeroBlock