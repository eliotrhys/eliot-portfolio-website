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

const Home: NextPage = () => {

  return (
    <div>
      <div className="container mx-auto px-4 md:w-2/3 md:px-0">

        <div className="half-page-container bg-cover bg-no-repeat">

          {/* <img src="/images/wink.png" className="absolute bottom-0 right-0 h-24 md:h-36 lg:h-56 rounded-br-lg" alt="" /> */}

          <motion.div 
            animate={{ opacity: [0, 1] }} 
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <h1 className="main-title highlight">
                      <span>E</span>
                      <span>l</span>
                      <span>i</span>
                      <span>o</span>
                      <span className="mr-2 md:mr-3">t</span>
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
                    <span className="text-lime-500 rounded-md border-lime-500 text-md hover:bg-lime-500 hover:text-white duration-100 ease-in-out cursor-pointer">🎨 Product UX/UI Designer</span>
                    <span className="mx-2">+</span>
                    <span className="text-purple-500 rounded-md border-purple-500 text-md hover:bg-purple-500 hover:text-white duration-100 ease-in-out cursor-pointer">👨🏻‍💻 Front End Developer</span>
                    <span className="mx-2">+</span>
                    <span className="text-amber-500 rounded-md border-amber-500 text-md hover:bg-amber-500 hover:text-white duration-100 ease-in-out cursor-pointer">🤩 Creative Genius</span>
                    </div>
                </div>

                <div className="text-white border border-neutral-900 px-2 rounded-md">Follow me on X</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-neutral-900 h-px mb-8 lg:mb-14"></div>

      <div className="container mx-auto px-4 md:w-2/3 md:px-0">
        <div className="text-white text-lg lg:text-2xl font-medium leading-loose">
          
          <div className="mb-8 lg:mb-14 flex flex-wrap items-center"><div className="bg-white h-2 w-2 rounded-full mr-4"></div> Check out my <a href="https://github.com/eliotrhys" target="_blank" className="px-2 rounded-md border-sky-500 text-sky-500 duration-100 ease-in-out hover:bg-sky-500 relative hover:text-white"><FontAwesomeIcon icon={faGithub} /> GitHub</a> for code, or my <a href="" target="_blank" className="px-2 rounded-md dribbble duration-100 ease-in-out"><FontAwesomeIcon icon={faDribbble} /> Dribbble</a> for design</div>
          
          <div className="mb-8 lg:mb-14 flex flex-wrap items-center"><div className="bg-white h-2 w-2 rounded-full mr-4"></div> My latest projects are <a href="https://www.triviamoji.com" target="_blank" className="border px-2 rounded-md border-neutral-700 bg-neutral-800 hover:bg-neutral-900 hover:border-neutral-800 text-md lg:text-xl mx-2">Triviamoji <FontAwesomeIcon icon={faUpRightFromSquare} /></a> and <a href="https://www.lifereel.co.uk" target="_blank" className="border px-2 rounded-md border-neutral-700 bg-neutral-800 hover:bg-neutral-900 hover:border-neutral-800 text-md lg:text-xl mx-2">The Lifereel Company <FontAwesomeIcon icon={faUpRightFromSquare} /></a></div>

          <div className="mb-8 lg:mb-14 flex flex-wrap items-center"><div className="bg-white h-2 w-2 rounded-full mr-4"></div> I also write <a href="https://twitter.com/optimistictales" target="_blank" className="border px-2 rounded-md border-neutral-700 bg-neutral-800 hover:bg-neutral-900 hover:border-neutral-800 text-md lg:text-xl mx-2">🌱 optimistic sci-fi short stories</a></div>
        </div>
      </div>

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

      <div className="container mx-auto mb-6">
        <div className="text-center text-white text-xl flex flex-col items-center justify-center">
          <span className="text-center mb-4">👋 Get in touch</span>

          <a href="mailto:eliot@eliotrhys.com" className="footer-gradient block">eliot@eliotrhys.com</a>
        </div>
      </div>
    </div>
  )
}

export default Home
