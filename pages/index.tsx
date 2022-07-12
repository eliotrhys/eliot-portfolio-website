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
      <div className="full-page-container bg-cover bg-no-repeat bg-black mb-10 md:mb-20">
        <motion.div 
          animate={{ opacity: [0, 1], y: [-800, 0]} } 
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}>
          <div>
            <div>
              <video width="800" autoPlay loop muted>
                <source src="https://eliot.eu-central-1.linodeobjects.com/mgm.mp4" type="video/mp4" />
                <source src="https://eliot.eu-central-1.linodeobjects.com/mgm.webm" type="video/webm" />
              </video>
            </div>
            {/* <img src="/images/memoji.png" className="h-60 md:h-96" /> */}
          </div>
        </motion.div>

        <motion.div 
          animate={{ opacity: [0, 1] }} 
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <h1 className="main-title text-white mb-5">Hi, I'm <span>Eliot.</span></h1>
            <div>
              <div className="text-extrabold text-white mb-4">scroll down</div>
              <div className="text-4xl finger-down">👇</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto">
        <HeroBlock />
        <AreasBlock />
      </div>

      <StatsBlock />

      <ProjectCarousel />

      <DeepDives />

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
