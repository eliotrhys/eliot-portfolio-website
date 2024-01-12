import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const DeepDives = () => {

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
        },
        showing: {
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    }

    return (
        <div className="mt-10" id="case-studies-block">
            <div className="container mx-auto mb-10 md:w-2/3">
                <div className="mb-10">
                    <h2 className="text-white subtitle text-center">Case Studies</h2>
                </div>
                
                <div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 px-4 md:px-0"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={animationItem} className="md:col-span-2 lg:col-span-6">
                            <Link href="/triviamoji">
                                <div className="deep-dive-synopsis mb-10 md:mb-0">
                                    <div className="relative">
                                        <img src="/images/dives/triviamoji.jpg" className="block mb-3 rounded-md" alt="" />
                                        <div className="overlay rounded-md">Read more</div>
                                    </div>
                                    <h4 className="title">Triviamoji</h4>
                                    <p className="description">A marathon emoji trivia game</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div variants={animationItem} className="lg:col-span-6">
                            <Link href="/">
                                <div className="deep-dive-synopsis mb-10 md:mb-0">
                                    <div className="relative">
                                        <img src="/images/dives/promptblocks.jpg" className="block mb-3 rounded-md" alt="" />
                                        <div className="overlay rounded-md">Read more</div>
                                    </div>
                                    <h4 className="title">Promptblocks (Coming Soon)</h4>
                                    <p className="description">Local Storage prompt-builder for Stable Diffusion and Midjourney</p>
                                </div>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default DeepDives