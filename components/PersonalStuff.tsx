import React from 'react';
import Image from 'next/image'

import eliot from '../public/images/face.png'
import bassMan from '../public/images/bass.jpg'
import cryptoHarry from '../public/images/cryptoharry.png'
import remoteWork from '../public/images/womanlaptop.jpg'
import floatingCities from '../public/images/floatingcity.jpg'
import greenSpaces from '../public/images/greenspaces.jpg'
import { motion } from 'framer-motion';

const PersonalStuff = () => {

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
        <div>
            <div className="container mx-auto lg:w-2/3 px-4 md:px-0 mb-10 md:mb-0">
                <motion.div
                    className="grid grid-cols-2" 
                    initial="hidden"
                    variants={variants}
                    whileInView="showing"
                    viewport={{ once: true }}
                >
                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div>
                            <div className="bitty-text -rotate-6 text-center md:text-left">atm I'm all about</div>
                        </div>
                    </motion.div>

                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div>
                            <img src="/images/face.png" className="h-24 md:h-80 rotate-6" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container mx-auto w-full lg:w-2/3 px-4 md:px-0 mb-10 md:mb-0">
                <motion.div
                        className="grid grid-cols-2" 
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div className="-rotate-6">
                            <img src="/images/bass.jpg" alt="" />
                        </div>
                    </motion.div>

                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div>
                            <div className="bitty-text rotate-6 text-center md:text-left">fun, quirky design</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container mx-auto w-full lg:w-2/3 px-4 md:px-0 mb-10 md:mb-0">
                <motion.div
                        className="grid grid-cols-2" 
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div>
                            <div className="bitty-text -rotate-6 text-center md:text-left">all things web3, crypto and decentralisation</div>
                        </div>
                    </motion.div>

                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div className="rotate-6">
                            <Image src={cryptoHarry} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container mx-auto w-full lg:w-2/3 px-4 md:px-0 mb-10 md:mb-20">
                <motion.div
                    className="grid grid-cols-2" 
                    initial="hidden"
                    variants={variants}
                    whileInView="showing"
                    viewport={{ once: true }}
                >
                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div className="-rotate-6">
                            <Image src={remoteWork} />
                        </div>
                    </motion.div>

                    <motion.div variants={animationItem} className="flex justify-center items-center">
                        <div>
                            <div className="bitty-text rotate-6 text-center md:text-left">remote work & async</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container w-3/4 lg:w-2/3 mx-auto text-center mb-20">
                <div className="bitty-text mb-0 md:mb-20">also randomly on a hyperfixation about <span>‘seasteading’</span> and walkable cities</div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 mb-20" 
                    initial="hidden"
                    variants={variants}
                    whileInView="showing"
                    viewport={{ once: true }}
                >
                    <motion.div variants={animationItem} className="col-span-1 md:col-span-2 flex items-center">
                        <div className="walkable-block-1"></div>
                    </motion.div>
                    <motion.div variants={animationItem} className="col-span-1">
                        <div className="walkable-block-2"></div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container w-full lg:w-2/3 mx-auto px-4 md:px-0 mb-20">
                <h2 className="subtitle text-center mb-20">A little about me</h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-16" 
                    initial="hidden"
                    variants={variants}
                    whileInView="showing"
                    viewport={{ once: true }}
                >

                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div> 
                        <div>Originally from England</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🏴󠁧󠁢󠁳󠁣󠁴󠁿</div> 
                        <div>Currently based in Edinburgh</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">󠁧󠁢󠁥󠁮󠁧🤓</div> 
                        <div>Side project addict</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">👍🏻</div> 
                        <div>Easy for clients to talk to</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🚵‍♂️</div> 
                        <div>Avid Bikepacker</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🎸</div> 
                        <div>Play in a terrible band</div>
                    </motion.div>
                </motion.div>

            </div>

            <div className="container w-full lg:w-2/3 mx-auto mb-20">
                <motion.div
                        className="grid grid-cols-2 mb-10 px-4 md:px-0" 
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem} className="flex items-center justify-end">
                        <div className="testimonial-block -mr-5 md:-mr-20 relative z-10">
                            <div>Eliot is lowkey great at coding fr fr</div>
                            <div className="text-right text-blue-400">~ Bill Gates</div>
                            <div className="quotation-mark">“</div>
                        </div>
                    </motion.div>
                    <motion.div variants={animationItem} >
                        <div className="yilon-block"></div>
                    </motion.div>
                </motion.div>
                <div className="bitty-text text-center">...aaaaand thats about it</div>
            </div>
            
        </div>
    )
}

export default PersonalStuff