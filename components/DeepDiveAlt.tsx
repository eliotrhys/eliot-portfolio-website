import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const DeepDiveAlt = () => {

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
        <div className="container mx-auto px-4 md:px-0">

            <div className="mb-10">
                <div className="subtitle text-center">Read the other Case Studies</div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-5 md:px-0"
                initial="hidden"
                variants={variants}
                whileInView="showing"
                viewport={{ once: true }}
            >
                <motion.div variants={animationItem} className="md:col-span-3 lg:col-span-1">
                    <Link href="/featherbed">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/featherbed.jpg" className="block mb-3 rounded-md" alt="" />
                                <div className="overlay rounded-md">Read more</div>
                            </div>
                            <h4 className="title">Featherbed Tales</h4>
                            <p className="description">Read your kids a bedtime story - wherever you are</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={animationItem} className="md:col-span-3 lg:col-span-1">
                    <Link href="/braided">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/braided.jpg" className="block mb-3 rounded-md" alt="" />
                                <div className="overlay rounded-md">Read more</div>
                            </div>
                            <h4 className="title">Braided Communications</h4>
                            <p className="description">A psychology-based communications tool for Astronauts en-route to Mars</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={animationItem} className="md:col-span-2 lg:col-span-1">
                    <Link href="/langcat">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/langcat.jpg" className="block mb-3 rounded-md" alt="" />
                                <div className="overlay rounded-md">Read more</div>
                            </div>
                            <h4 className="title">The Lang Cat</h4>
                            <p className="description">Comparison tool for financial advisers choosing mortgage providers</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={animationItem} className="md:col-span-2 lg:col-span-1">
                    <Link href="/triviamoji">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/triviamoji.jpg" className="block mb-3 rounded-md" alt="" />
                                <div className="overlay rounded-md">Read more</div>
                            </div>
                            <h4 className="title">Triviamoji</h4>
                            <p className="description">An emoji trivia marathon game</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={animationItem} className="md:col-span-2 lg:col-span-1">
                    <Link href="/">
                        <div className="deep-dive-synopsis mb-10">
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

            <div className="mb-20">
                <Link href="/">
                    <div className="text-center text-lg cursor-pointer duration-100 hover:scale-110 ease-in-out">👈 Go back</div>
                </Link>
            </div>
        </div>
        
    )
}

export default DeepDiveAlt;