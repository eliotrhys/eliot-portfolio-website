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
            <div className="h-6 wavybreak top w-full"></div>
                <div className="deep-dive-block py-10 md:py-20 relative zoom-in">
                    <div className="absolute right-2/4 left-2/4 -ml-8 md:-ml-20 -top-5 md:-top-10 text-6xl md:text-9xl z-20">🦈</div>
                    <div className="absolute right-2/4 left-2/4 -ml-8 md:-ml-16 -bottom-5 md:-bottom-10 text-6xl md:text-9xl rotate-[30deg] z-20">🦀</div>
                    <div className="container mx-auto mb-10">
                        <div className="mb-10">
                            <h2 className="text-white subtitle text-center">UX deep dives 🤿</h2>
                            <div className="text-xl text-center mb-10" style={{color: "#acc4ff"}}>Take a dip into the details...</div>
                        </div>
                        
                        <div>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-0"
                                initial="hidden"
                                variants={variants}
                                whileInView="showing"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={animationItem}>
                                    <Link href="/braided">
                                        <div className="deep-dive-synopsis mb-10 md:mb-0">
                                            <div className="relative">
                                                <img src="/images/dives/braided.jpg" className="block mb-3 rounded-md" alt="" />
                                                <div className="overlay">Read more</div>
                                            </div>
                                            <h4 className="title">Braided Communications</h4>
                                            <p className="description">A psychology-based communications tool for Astronauts en-route to Mars</p>
                                        </div>
                                    </Link>
                                </motion.div>

                                <motion.div variants={animationItem}>
                                    <Link href="/featherbed">
                                        <div className="deep-dive-synopsis mb-10 md:mb-0">
                                            <div className="relative">
                                                <img src="/images/dives/featherbed.jpg" className="block mb-3 rounded-md" alt="" />
                                                <div className="overlay">Read more</div>
                                            </div>
                                            <h4 className="title">Featherbed Tales</h4>
                                            <p className="description">Read your kids a bedtime story - wherever you are</p>
                                        </div>
                                    </Link>
                                </motion.div>

                                <motion.div variants={animationItem} className="md:col-span-2 lg:col-span-1">
                                    <Link href="/langcat">
                                        <div className="deep-dive-synopsis">
                                            <div className="relative">
                                                <img src="/images/dives/langcat.jpg" className="block mb-3 rounded-md" alt="" />
                                                <div className="overlay">Read more</div>
                                            </div>
                                            <h4 className="title">The Lang Cat</h4>
                                            <p className="description">Comparison tool for financial advisers choosing mortgage providers</p>
                                        </div>
                                    </Link>
                                </motion.div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            <div className="h-24 wavybreak w-full"></div>
        </div>
    )
}

export default DeepDives