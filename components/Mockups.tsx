import { motion } from "framer-motion";

const Mockups = () => { 

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

        <motion.ul initial="hidden"
            // animate="showing"
            whileInView="showing"
            variants={variants}
            // whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            className="scroll mb-14">

            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/fullstack.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">Fullstack Music Management</div>
                </div>
            </motion.li>
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/badgelife.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">BadgeLife</div>
                </div>
            </motion.li>
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/prospera.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">Prospera</div>
                </div>
            </motion.li>
            {/* <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/securiforce_dash.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">Securiforce</div>
                </div>
            </motion.li> */}
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/triviamoji.png" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">Triviamoji</div>
                </div>
            </motion.li>
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/goatcalculator.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">GOAT Calculator</div>
                </div>
            </motion.li>
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/reekie.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">Reekie</div>
                </div>
            </motion.li>
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/rehumaning.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">Rehumaning</div>
                </div>
            </motion.li>
            {/* <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/securiforce_spider.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">Securiforce</div>
                </div>
            </motion.li> */}
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/wsb.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white font-medium">WSB Tendie Rush Game</div>
                </div>
            </motion.li>
            {/* <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/pdtracker.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">PD Tracker</div>
                </div>
            </motion.li> */}
            <motion.li className="list-item" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/timeline.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">Timeline wooooo</div>
                </div>
            </motion.li>
            <motion.li className="list-item pr-4" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/oddcomplex.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">The Odd Complex</div>
                </div>
            </motion.li>
            {/* <motion.li className="list-item pr-4" variants={animationItem}>
                <div className="">
                    <div>
                        <img src="/images/projects/new_mockups/asclepius.jpg" alt="" className="rounded-md mb-4 h-56 md:h-96 xl:h-[38rem] max-w-fit saturate-150" />
                    </div>
                    <div className="text-white font-medium">Asclepius Clinic</div>
                </div>
            </motion.li> */}
        </motion.ul>
    )
}

export default Mockups;