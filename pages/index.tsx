import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRef } from 'react'
import React from 'react'
import { motion, useMotionValue, useTransform, Variants } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'

import ProjectCarousel from '../components/ProjectCarousel'
import PersonalStuff from '../components/PersonalStuff'
import StatsBlock from '../components/StatsBlock'
import DeepDives from '../components/DeepDives'
import AreasBlock from '../components/AreasBlock'
import HeroBlock from '../components/HeroBlock'
import HeroList from '../components/HeroList'
import Mockups from '../components/Mockups'

const Home: NextPage = () => {

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
      <div className="container mx-auto px-4 md:w-2/3 md:px-0">

        <div className="half-page-container bg-cover bg-no-repeat">

          <motion.div 
            animate={{ opacity: [0, 1] }} 
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="py-14">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center mb-2">
                    <h1 className="main-title highlight">
                      <span>E</span>
                      <span>l</span>
                      <span>i</span>
                      <span>o</span>
                      <span className="mr-2 md:mr-2">t</span>
                      <span>R</span>
                      <span>h</span>
                      <span>y</span>
                      <span>s</span>
                    </h1>
                    <div className="text-white text-4xl mx-2 md:mx-4 vertical-separator"></div>
                    <h1 className="main-title !text-slate-500">
                      <span className="font-light">P</span>
                      <span className="font-light">o</span>
                      <span className="font-light">r</span>
                      <span className="font-light">t</span>
                      <span className="font-light">f</span>
                      <span className="font-light">o</span>
                      <span className="font-light">l</span>
                      <span className="font-light">i</span>
                      <span className="font-light">o</span>
                    </h1>
                  </div>
                  <div className="text-white">
                    <span className="text-lime-500 rounded-md border-lime-500 text-md hover:bg-lime-500 hover:text-white hover:px-2 duration-100 ease-in-out cursor-pointer">🎨 Product UX/UI Designer</span>
                    <span className="mx-2">+</span>
                    <span className="text-purple-500 rounded-md border-purple-500 text-md hover:bg-purple-500 hover:text-white hover:px-2 duration-100 ease-in-out cursor-pointer">👨🏻‍💻 Front End Developer</span>
                    <span className="mx-2">+</span>
                    <span className="text-amber-500 rounded-md border-amber-500 text-md hover:bg-amber-500 hover:text-white hover:px-2 duration-100 ease-in-out cursor-pointer">🤩 Creative</span>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-neutral-800 h-px mb-8 lg:mb-14"></div>

      <svg className="absolute -z-10" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800" opacity="1"><g strokeWidth="1" stroke="url(#sssquiggly-grad)" fill="none" strokeLinecap="round" transform="matrix(1,0,0,1,-5,282.8648338317871)"><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13"></path><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13" transform="matrix(1,0,0,1,0,210)"></path><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13" transform="matrix(1,0,0,1,0,175)"></path><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13" transform="matrix(1,0,0,1,0,140)"></path><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13" transform="matrix(1,0,0,1,0,105)"></path><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13" transform="matrix(1,0,0,1,0,70)"></path><path d="M10,10C21.805555555555557,13.75,40.97222222222223,33.416666666666664,66.66666666666667,28C92.36111111111111,22.583333333333336,105.55555555555557,-18.291666666666668,133.33333333333334,-16C161.11111111111111,-13.708333333333334,172.22222222222223,40.458333333333336,200,39C227.77777777777777,37.541666666666664,238.8888888888889,-24.666666666666668,266.6666666666667,-23C294.44444444444446,-21.333333333333332,305.5555555555556,42.416666666666664,333.33333333333337,47C361.11111111111114,51.583333333333336,372.22222222222223,2.75,400,-1C427.77777777777777,-4.75,438.8888888888889,31.5,466.6666666666667,29C494.44444444444446,26.5,505.5555555555556,-13,533.3333333333334,-13C561.1111111111111,-13,572.2222222222222,25.041666666666668,600,29C627.7777777777778,32.958333333333336,638.8888888888889,2.875,666.6666666666667,6C694.4444444444446,9.125,705.5555555555557,47.958333333333336,733.3333333333334,44C761.1111111111111,40.041666666666664,786.1111111111111,-1.125,800,-13" transform="matrix(1,0,0,1,0,35)"></path></g><defs><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="sssquiggly-grad"><stop stopColor="hsl(206, 75%, 49%)" stopOpacity="1" offset="0%"></stop><stop stopColor="hsl(331, 90%, 56%)" stopOpacity="1" offset="100%"></stop></linearGradient></defs></svg>

      <div className="container mx-auto px-4 md:w-2/3 md:px-0">
        <motion.div className="text-white text-lg lg:text-2xl font-medium leading-loose"
        initial="hidden"
        // animate="showing"
        whileInView="showing"
        variants={variants}
        // whileInView={{ opacity: 1 }}
        viewport={{ once: true }} >
          
          <motion.div className="mb-8 lg:mb-14 flex flex-wrap items-center" variants={animationItem}>
            <div className="bg-white h-2 w-2 rounded-full mr-4"></div> 
            <span>Check out my</span> 
            <a href="https://github.com/eliotrhys" target="_blank" rel="noreferrer" className="px-2 rounded-md border-sky-500 text-sky-500 duration-100 ease-in-out hover:bg-sky-500 relative hover:text-white hover:mx-2"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <span>for code, or my</span>
            <a href="https://dribbble.com/eliotrhys" target="_blank" rel="noreferrer" className="px-2 rounded-md dribbble duration-100 ease-in-out hover:mx-2"><FontAwesomeIcon icon={faDribbble} /> Dribbble</a> 
            <span>for design</span>
          </motion.div>
          
          <motion.div className="mb-8 lg:mb-14 flex flex-wrap items-center" variants={animationItem}>
            <div className="bg-white h-2 w-2 rounded-full mr-4"></div> 
            <span>My latest projects are</span>
            <a href="https://www.triviamoji.com" target="_blank" rel="noreferrer" className="px-2 rounded-md duration-100 ease-in-out hover:bg-red-500 text-red-500 hover:text-white hover:mx-2">Triviamoji <FontAwesomeIcon icon={faUpRightFromSquare} /></a> 
            <span>and</span> 
            <a href="https://www.lifereel.co.uk" target="_blank" rel="noreferrer" className="px-2 rounded-md duration-100 ease-in-out hover:bg-green-500 text-green-500 hover:text-white hover:mx-2">The Lifereel Company <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
          </motion.div>

          <motion.div className="mb-8 lg:mb-14 flex flex-wrap items-center" variants={animationItem}>
            <div className="bg-white h-2 w-2 rounded-full mr-4"></div> I also write <a href="https://twitter.com/optimistictales" target="_blank" rel="noreferrer" className="px-2 rounded-md duration-100 ease-in-out hover:bg-violet-500 text-violet-500 hover:text-white hover:mx-2">🌱 optimistic sci-fi short stories</a>
          </motion.div>
        </motion.div>
      </div>

      <Mockups />

      <HeroList />

      <div className="container mx-auto px-4 md:w-2/3 md:px-0">
        <div className="grid xl:grid-cols-2 gap-4">
          <div>
            <AreasBlock />
          </div>
          <div>
            <StatsBlock />
          </div>
        </div>
      </div>

      <DeepDives />

      {/* <ProjectCarousel /> */}

      <div className="w-full bg-neutral-800 h-px mb-8 lg:mb-14"></div>

      <div className="container mx-auto mb-8 lg:mb-14">
        <div className="text-center text-white text-xl flex flex-col items-center justify-center">
          <span className="text-center mb-4">👋 Get in touch</span>

          <a href="mailto:eliot@eliotrhys.com" className="footer-gradient block">eliot@eliotrhys.com</a>
        </div>
      </div>
    </div>
  )
}

export default Home
