import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

const AreasBlock = () => {

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
        <div>
          <h2 className="subtitle mb-5 md:mb-10 text-center">I've worked on projects in</h2>
            <div className="">
                <motion.div
                    className="mb-5 text-center areas-block px-4 md:px-0" 
                    initial="hidden"
                    variants={variants}
                    whileInView="showing"
                    viewport={{ once: true }}
                >
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://langcatfinancial.co.uk/" target="_blank" rel="noreferrer" className="area-badge bg-emerald-500 border border-emerald-900">💰 finance</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.baddinosaur.co.uk/Portfolio/Acorn" target="_blank" rel="noreferrer" className="area-badge bg-lime-500 border border-lime-900">💊 pharmaceuticals</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.baddinosaur.co.uk/Portfolio/SocialConnections" target="_blank" rel="noreferrer" className="area-badge bg-orange-500 border border-orange-900">👩‍🔬 research</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://fanbaseclub.com/" target="_blank" rel="noreferrer" className="area-badge bg-slate-500 border border-slate-900">⚽️ sports</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.baddinosaur.co.uk/Portfolio/StaffmetrixGenderPayGapUK" target="_blank" rel="noreferrer" className="area-badge bg-red-500 border border-red-900">📈 data vis</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.youk.co/" target="_blank" rel="noreferrer" className="area-badge bg-blue-500 border border-blue-900">🛍 ecommerce</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://featherbedtales.com/" target="_blank" rel="noreferrer" className="area-badge bg-cyan-500 border border-cyan-900">👶🏻 children's books</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://biscuittin.co.uk/" target="_blank" rel="noreferrer" className="area-badge bg-yellow-500 border border-yellow-900">⚰️ estate management</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://speedcheetah.com/" target="_blank" rel="noreferrer" className="area-badge bg-fuchsia-500 border border-fuchsia-900">🏍 motoring</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-sky-500 border border-sky-900">💬 social networks</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.baddinosaur.co.uk/Portfolio/Rockifi" target="_blank" rel="noreferrer" className="area-badge bg-zinc-500 border border-zinc-900">🎸 music</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.triviamoji.com" target="_blank" rel="noreferrer" className="area-badge bg-rose-500 border border-rose-900">🕹 gaming</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://github.com/eliotrhys/mystic_miriam" target="_blank" rel="noreferrer" className="area-badge bg-teal-500 border border-teal-900">🤖 AI entertainment</a></motion.div>
                </motion.div>
            </div>
            <h2 className="subtitle px-4 md:px-0 mb-5 text-center">and even written code being used on the <a href="https://braided.space/" target="_blank" rel="noreferrer" className="area-badge bg-purple-500 border border-purple-900" style={{marginRight: "0px"}}>International Space Station 👽</a></h2>
            <h3 className="font-medium text-gray-400 mb-10 md:mb-20 text-lg md:text-xl tracking-tighter text-center">⬆️ Click to explore</h3>
        </div>
    )
}

export default AreasBlock