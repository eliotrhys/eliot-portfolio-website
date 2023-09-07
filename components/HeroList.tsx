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
        <div className="container mx-auto px-4 md:w-2/3 md:px-0 mb-4">

            <motion.div className="grid grid-cols-2 xl:grid-cols-12 gap-4 text-white"
                initial="hidden"
                variants={variants}
                whileInView="showing"
                viewport={{ once: true }}
            >

                <motion.div variants={animationItem} className="border border-neutral-900 hover:bg-neutral-900 duration-100 ease-in-out rounded-lg xl:col-span-3">
                    <div className="p-6 text-black flex justify-center items-center flex-col h-full">
                        <div className="mb-6">
                            <img src="/images/phone.png" alt="" />
                        </div>
                        <div className="text-xl font-medium text-center text-lime-500">Built 40+<br/>apps</div>
                    </div>
                </motion.div>

                <motion.div variants={animationItem} className="border border-neutral-900 hover:bg-neutral-900 duration-100 ease-in-out rounded-lg xl:col-span-3">
                    <div className="p-6 text-black flex justify-center items-center flex-col h-full">
                        <div className="mb-6">
                            <img src="/images/phone.png" alt="" />
                        </div>
                        <div className="text-xl font-medium text-center text-red-500">5+ years<br/>experience</div>
                    </div>
                </motion.div>

                <motion.div variants={animationItem} className="border border-neutral-900 hover:bg-neutral-900 duration-100 ease-in-out rounded-lg xl:col-span-3">
                    <div className="p-6 text-black flex justify-center items-center flex-col h-full">
                        <div className="mb-6">
                            <img src="/images/phone.png" alt="" />
                        </div>
                        <div className="text-xl font-medium text-center text-purple-500">Agency, contract<br/>+ freelance</div>
                    </div>
                </motion.div>


                <motion.div variants={animationItem} className="border border-neutral-900 hover:bg-neutral-900 duration-100 ease-in-out rounded-lg xl:col-span-3">
                    <div className="p-6 text-black flex justify-center items-center flex-col h-full">
                        <div className="mb-6">
                            <img src="/images/phone.png" alt="" />
                        </div>
                        <div className="text-xl font-medium text-center text-orange-500">Creative<br/>consultant</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HeroBlock;