import { motion } from "framer-motion";

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

    return (
        <div className="container mx-auto px-4">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white mb-4"
                initial="hidden"
                variants={variants}
                whileInView="showing"
                viewport={{ once: true }}
            >

                <motion.div variants={animationItem} className="bg-lime-500 border border-lime-900 rounded-lg">
                    <div className="p-6 pb-3">
                        <div className="text-3xl">📐</div>
                        <div className="subtitle small">UX Design</div>
                    </div>

                    <div className="h-px w-full bg-lime-700"></div>

                    <div className="p-6 pt-3">
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Research</div>
                        <div className="h-px w-full bg-lime-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Testing</div>
                        <div className="h-px w-full bg-lime-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Journeys</div>
                        <div className="h-px w-full bg-lime-700 mb-2"></div>
                        <div className="text-lg hover:pl-2 duration-200 ease-in-out cursor-pointer">Personas</div>
                        <a href="#case-studies-block" className="text-md text-white mt-6 p-4 duration-200 ease-in-out cursor-pointer bg-lime-600 hover:bg-lime-800 border border-lime-900 flex justify-center items-center rounded-lg">See case studies</a>
                    </div>
                </motion.div>

                <motion.div variants={animationItem} className="bg-red-500 border border-red-900 rounded-lg">
                    <div className="p-6 pb-3">
                        <div className="text-3xl">🎨</div>
                        <div className="subtitle small">UI Design</div>
                    </div>

                    <div className="h-px w-full bg-red-700"></div>

                    <div className="p-6 pt-3">
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Branding</div>
                        <div className="h-px w-full bg-red-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Mockups</div>
                        <div className="h-px w-full bg-red-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Prototypes</div>
                        <div className="h-px w-full bg-red-700 mb-2"></div>
                        <div className="text-lg hover:pl-2 duration-200 ease-in-out cursor-pointer">Wireframes</div>
                        <a href="#design-block" className="text-md text-white mt-6 p-4 duration-200 ease-in-out cursor-pointer bg-red-600 hover:bg-red-800 border border-red-900 flex justify-center items-center rounded-lg">See UI mockups</a>
                    </div>
                </motion.div>

                <motion.div variants={animationItem} className="bg-purple-500 border border-purple-900 rounded-lg">
                    <div className="p-6 pb-3">
                        <div className="text-3xl">👨🏻‍💻</div>
                        <div className="subtitle small">Front End Dev</div>
                    </div>

                    <div className="h-px w-full bg-purple-700"></div>

                    <div className="p-6 pt-3">
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">HTML</div>
                        <div className="h-px w-full bg-purple-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">CSS, SASS, Tailwind</div>
                        <div className="h-px w-full bg-purple-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Javascript, Typescript</div>
                        <div className="h-px w-full bg-purple-700 mb-2"></div>
                        <div className="text-lg hover:pl-2 duration-200 ease-in-out cursor-pointer">React, Next.js</div>
                        <a href="https://github.com/eliotrhys" target="_blank" rel="noreferrer" className="text-md text-white mt-6 p-4 duration-200 ease-in-out cursor-pointer bg-purple-600 hover:bg-purple-800 border border-purple-900 flex justify-center items-center rounded-lg">Github</a>
                    </div>
                </motion.div>


                <motion.div variants={animationItem} className="bg-amber-500 border border-amber-900 rounded-lg">
                    <div className="p-6 pb-3">
                        <div className="text-3xl">🤩</div>
                        <div className="subtitle small">Creative</div>
                    </div>

                    <div className="h-px w-full bg-amber-700"></div>

                    <div className="p-6 pt-3">
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Copywriting</div>
                        <div className="h-px w-full bg-amber-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Content Design</div>
                        <div className="h-px w-full bg-amber-700 mb-2"></div>
                        <div className="text-lg mb-2 hover:pl-2 duration-200 ease-in-out cursor-pointer">Audio Engineering</div>
                        <div className="h-px w-full bg-amber-700 mb-2"></div>
                        <div className="text-lg hover:pl-2 duration-200 ease-in-out cursor-pointer">Brainstorming</div>
                        <div className="text-md text-white mt-6 p-4 duration-200 ease-in-out cursor-pointer flex justify-center items-center rounded-lg">Coming soon!</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white"
                initial="hidden"
                variants={variants}
                whileInView="showing"
                viewport={{ once: true }}
            >

                <motion.div variants={animationItem} className="border border-lime-600 rounded-lg">
                    <div className="p-6 text-black flex justify-center items-center h-full">
                        <div className="text-xl font-medium text-center text-lime-600">Designed and coded<br/>40+ apps</div>
                    </div>
                </motion.div>

                <motion.div variants={animationItem} className="border border-red-600 rounded-lg">
                    <div className="p-6 text-black flex justify-center items-center h-full">
                        <div className="text-xl font-medium text-center text-red-600">4 years<br/>professional experience</div>
                    </div>
                </motion.div>

                <motion.div variants={animationItem} className="border border-purple-600 rounded-lg">
                    <div className="p-6 text-black flex justify-center items-center h-full">
                        <div className="text-xl font-medium text-center text-purple-600">Worked in dozens<br/>of different industries</div>
                    </div>
                </motion.div>


                <motion.div variants={animationItem} className="border border-orange-600 rounded-lg">
                    <div className="p-6 text-black flex justify-center items-center h-full">
                        <div className="text-xl font-medium text-center text-orange-600">Creative generalist<br/>and speedy-learner!</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HeroBlock;