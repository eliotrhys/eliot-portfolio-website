import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRef } from 'react'
import React from 'react'
import { motion, useMotionValue, useTransform, Variants } from "framer-motion"

import ProjectCarousel from '../components/ProjectCarousel'
import PersonalStuff from '../components/PersonalStuff'
import StatsBlock from '../components/StatsBlock'
import DeepDives from '../components/DeepDives'
import AreasBlock from '../components/AreasBlock'
import HeroBlock from '../components/HeroBlock'

const Home: NextPage = () => {

  return (
    <div>
      <div className="half-page-container bg-cover bg-no-repeat">

        <motion.div 
          animate={{ opacity: [0, 1] }} 
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <div className="mb-8">
              <div className="flex flex-wrap justify-center items-center md:justify-start mb-4">
                <div className="mr-4 md:mr-8 image-gradient border-4 md:border-8 border-black p-4">
                  <img src="/images/eliotALT.png" className="border-4 md:border-8 border-black w-20 md:w-40  rounded-full" alt="Eliot Rhys Image" />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <h1 className="main-title mb-0 mr-3">Hi, I'm</h1>
                    <h1 className="main-title highlight">
                      <span>E</span>
                      <span>l</span>
                      <span>i</span>
                      <span>o</span>
                      <span className="mr-3">t</span>
                      <span>R</span>
                      <span>h</span>
                      <span>y</span>
                      <span>s</span>
                      <span>.</span>
                    </h1>
                  </div>
                  <h2 className="text-lg mb-0">
                    <span className="text-orange-500">🎨 UX/UI Designer</span> | <span className="text-purple-500">👨🏻‍💻 Full Stack Dev</span> | <span className="text-green-500">🤩 Creative</span>
                  </h2>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-extrabold mb-4">scroll down</div>
              <div className="text-4xl finger-down">👇</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className="zig-zag-bottom mb-10 md:mb-20"></div> */}

      <div className="container mx-auto">
        <HeroBlock />
        <AreasBlock />
      </div>

      <StatsBlock />

      <DeepDives />

      <ProjectCarousel />

      <PersonalStuff />

      <div className="container mx-auto text-center mb-5">
        <div className="relative inline-block">
          <h2 className="subtitle mb-5">Fancy a chat?</h2>
          <img src="/images/memoji.png" className="absolute -top-10 -right-16" height={80} width={80} />
        </div>
        <a href="mailto:eliot@eliotrhys.com" className="subtitle footer-gradient mb-20 w-fit mx-auto block">eliot@eliotrhys.com</a>
        <div className="text-center text-extrabold">Made with<span className="mx-2 text-center mx-auto">❤️</span>by Eliot Rhys</div>
      </div>
    </div>
  )
}

export default Home
