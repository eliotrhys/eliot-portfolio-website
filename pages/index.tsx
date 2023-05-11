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
import HeroList from '../components/HeroList'

const Home: NextPage = () => {

  return (
    <div>
      <div className="container mx-auto px-4 mb-4 mt-4">

        <div className="half-page-container bg-cover bg-no-repeat py-10 border border-slate-900 relative rounded-lg">

          <img src="/images/wink.png" className="absolute bottom-0 right-0 h-24 md:h-36 lg:h-56 rounded-br-lg" alt="" />

          <motion.div 
            animate={{ opacity: [0, 1] }} 
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <div className="">
                <div className="flex flex-wrap justify-center items-center md:justify-start mb-4">
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
                    <h2 className="text-lg lg:text-xl font-medium text-center mb-0 relative z-20">
                      <span className="text-lime-500">🎨 UX/UI Designer</span> | <span className="text-purple-500">👨🏻‍💻 Full Stack Dev</span> | <span className="text-amber-500">🤩 Creative</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <HeroList />

      <div className="text-center mt-8">
        <div className="text-extrabold mb-4">scroll for the full story</div>
        <div className="text-4xl finger-down">👇</div>
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

      <div className="lg:container w-full lg:w-3/4 mx-auto px-4 mb-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

          <div className="p-4 border border-black relative rounded-lg flex justify-center items-center">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img src="/images/github.png" className="block w-full p-4" alt="" />
              </div>
              <div className="col-span-8 h-full flex items-center">
                <div className="">
                  <div className="text-xl md:text-2xl">You can see some code examples on <a href="https://github.com/eliotrhys" target="_blank" rel="noreferrer" className="text-bold text-blue-500 hover:cursor-pointer">my Github</a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border border-black relative rounded-lg flex justify-center items-center">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img src="/images/thumbs.png" className="block w-full" alt="" />
              </div>
              <div className="col-span-8 h-full flex items-center">
                <div className="">
                  <div className="text-xl md:text-2xl !leading-loose">Fancy a chat?</div>
                  <a href="mailto:eliot@eliotrhys.com" className="text-xl md:text-3xl !leading-loose footer-gradient block">eliot@eliotrhys.com</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="text-center text-extrabold">Made with<span className="text-center mx-2">❤️</span>by Eliot Rhys</div>
      </div>
    </div>
  )
}

export default Home
