import React from 'react';
import Image from 'next/image'

import eliot from '../public/images/face.png'
import bassMan from '../public/images/bass.jpg'
import cryptoHarry from '../public/images/cryptoharry.png'
import remoteWork from '../public/images/womanlaptop.jpg'
import floatingCities from '../public/images/floatingcity.jpg'
import greenSpaces from '../public/images/greenspaces.jpg'
import { motion } from 'framer-motion';
import Link from 'next/link';

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
                            <div className="bitty-text rotate-6 text-center md:text-left">fun, quirky, functional design</div>
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
                            <div className="bitty-text -rotate-6 text-center md:text-left">all things web3 and crypto, generative AI, decentralisation and music tech history</div>
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
                            <div className="bitty-text rotate-6 text-center md:text-left">remote / hybrid work</div>
                            <div className="rotate-6 text-center md:text-left text-gray-400 text-sm">(stock photo used for comedic effect, I don't steal stock photos)</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container w-3/4 lg:w-2/3 mx-auto text-center mb-20">
                <div className="bitty-text mb-0 md:mb-20">also randomly down a rabbit hole about <span>‘seasteading’</span> and urban planning / walkable cities</div>

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

                <div>
                    <img src="/images/eliot.png" className="h-48 md:h-64 mx-auto rounded-lg rotate-[16deg] mb-20" alt="" />
                </div>

                <h2 className="subtitle text-center mb-20">About me in 9 bullet points</h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-16" 
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
                        <div className="text-6xl mb-5">󠁧󠁢󠁥󠁮󠁧🎨</div> 
                        <div>Almost 5 years design experience</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">󠁧󠁢󠁥󠁮󠁧🤓</div> 
                        <div>Side project coding addict</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">👍🏻</div> 
                        <div>Good speaker, client friendly</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🎓</div> 
                        <div>CodeClan graduate (2019)</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🧑‍🎨</div> 
                        <div>Creative generalist</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🚵‍♂️</div> 
                        <div>Occasional Bikepacker</div>
                    </motion.div>
                    <motion.div variants={animationItem} className="text-xl md:text-2xl lg:text-4xl text-center">
                        <div className="text-6xl mb-5">🎸</div> 
                        <div>Play in a terrible band</div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container w-full lg:w-2/3 mx-auto px-4 md:px-0 mb-20">
                <h2 className="text-center text-4xl mb-5">🦕</h2>
                <h2 className="text-center text-xl md:text-3xl leading-10">I worked at <a href="https://www.baddinosaur.co.uk" target="_blank" rel="noreferrer" className="text-bold text-blue-500 hover:cursor-pointer">Bad Dinosaur</a> for 3 and a bit years, freelanced and worked contracts for 1 more year and I'm now looking for a new opportunity, to learn, to design and to make cool stuff!</h2>
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
                            <div>Eliot is lowkey great at coding and design fr fr</div>
                            <div className="text-right text-blue-400">~ Elon Musk?</div>
                            <div className="quotation-mark">“</div>
                        </div>
                    </motion.div>
                    <motion.div variants={animationItem} >
                        <div className="yilon-block"></div>
                    </motion.div>
                </motion.div>
                <div className="bitty-text text-center">... silliness aside, that's about it!</div>
            </div>

            <div className="container w-full lg:w-2/3 mx-auto px-4 md:px-0 mb-20">
                <h2 className="mb-5">
                    <img src="/images/projects/triviamoji_og.jpg" className="h-48 rounded-md mx-auto" alt="" />
                </h2>
                <h2 className="text-center text-xl md:text-3xl leading-10">I've just released the Beta version of my new web trivia game <a href="https://www.triviamoji.com" target="_blank" rel="noreferrer" className="text-bold text-blue-500 hover:cursor-pointer">Triviamoji</a>, built in a few days using React, Next.js and Framer Motion.</h2>
            </div>

            <div className="container w-full lg:w-2/3 mx-auto px-4 md:px-0 mb-20">
                <h2 className="mb-5">
                    <img src="/images/github.png" className="h-24 mx-auto" alt="" />
                </h2>
                <h2 className="text-center text-3xl leading-10">You can see some code examples on <a href="https://github.com/eliotrhys" target="_blank" rel="noreferrer" className="text-bold text-blue-500 hover:cursor-pointer">my Github</a></h2>
            </div>
        </div>
    )
}

export default PersonalStuff