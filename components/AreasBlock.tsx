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
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://langcatfinancial.co.uk/" target="_blank" rel="noreferrer" className="area-badge bg-emerald-600">💰 finance</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://acornwellbeing.io" target="_blank" rel="noreferrer" className="area-badge bg-lime-600">💊 pharmaceuticals</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-orange-600">👷🏻‍♂️ construction</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://fanbaseclub.com/" target="_blank" rel="noreferrer" className="area-badge bg-slate-600">⚽️ sports</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-red-600">✈️ travel</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.youk.co/" target="_blank" rel="noreferrer" className="area-badge bg-blue-600">🛍 ecommerce</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://featherbedtales.com/" target="_blank" rel="noreferrer" className="area-badge bg-cyan-600">👶🏻 children's books</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://biscuittin.co.uk/" target="_blank" rel="noreferrer" className="area-badge bg-yellow-600">⚰️ estate management</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-fuchsia-600">🏍 motoring</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-sky-600">💬 social networks</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="https://www.baddinosaur.co.uk/Portfolio/Rockifi" target="_blank" rel="noreferrer" className="area-badge bg-zinc-600">🎸 music</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-rose-600">🕹 gaming</a></motion.div>
                    <motion.div variants={animationItem} className="inline-flex"><a href="" target="_blank" rel="noreferrer" className="area-badge bg-teal-600">🤖 AI entertainment</a></motion.div>
                </motion.div>
            </div>
            <h2 className="subtitle px-4 md:px-0 mb-5 text-center">and even written code being used on the <a href="https://braided.space/" target="_blank" className="area-badge bg-purple-600" style={{marginRight: "0px"}}>International Space Station 👽</a></h2>
        </div>
    )
}

export default AreasBlock