import { motion } from "framer-motion"
import { NextPage } from "next"
import Link from "next/link"
import DeepDiveAlt from "../components/DeepDiveAlt"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// import smileyVid from "../public/videos/smileyvid.mp4";

const Triviamoji: NextPage = () => {

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
      <div className="text-white">
        <div>
            <video autoPlay muted loop id="fullPageVideo" style={{ mixBlendMode: "soft-light"}}>
                <source src="/videos/smileyvid.mp4" type="video/webm" />
                {/* <source src="https://eliot.eu-central-1.linodeobjects.com/braided.mp4" type="video/mp4" /> */}
            </video>

            <div className="absolute top-4 left-4 lg:top-10 lg:left-10">
                <Link href="/">
                    <div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 glass text-sm mx-1 p-2 px-5 rounded my-1 cursor-pointer">
                    <span className="mr-3"><FontAwesomeIcon icon={faArrowLeft} /></span>Go back</div>
                </Link>
            </div>
            
            <div className="full-page-video-content w-3/4 md:bg-cover md:bg-no-repeat md:bg-center md:h-screen flex items-center justify-center relative braided">
            <motion.div
                        className=""
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white eliot-shadow">😂</h1></motion.div>
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white mb-3 eliot-shadow">Triviamoji</h1></motion.div>
                    <motion.div variants={animationItem}><h2 className="subtitle text-center text-white mb-10 mx-4 eliot-shadow">A marathon emoji trivia game</h2></motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center mb-10"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 glass md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">🕹️</span>Game</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 glass md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">📱</span>Mobile</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 glass md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">🖥</span>Web</div></motion.div>
                    </motion.div>
                    <div className="text-center">
                        <div className="text-extrabold text-white mb-4">scroll down</div>
                        <div className="text-4xl finger-down">👇</div>
                    </div>
                </motion.div>
            </div>
        </div>

        <div className="container w-full lg:w-3/4 xl:w-3/4 2xl:w-1/2 px-4 md:px-0 mx-auto mt-10 md:mt-20">

            <div className="mb-20 p-14 border border-neutral-800 rounded-md">
                <h2 className="subtitle text-center mb-8">💡 The Pitch</h2>

                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">In a <strong className="text-sky-500">weeklong break</strong> between agency contracts, I wanted to finally execute on a <strong className="text-amber-500">game idea</strong> I’d had for years.</p>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">This entire project was <strong className="text-emerald-500">designed, built and deployed within one week</strong>, of which most was question writing!</p>
            </div>

            <div className="mb-10 md:mb-20">
                <img src="/images/triviamoji/blue.jpg" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🤔 The Problem</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">This is not a new idea.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">You may have seen these types of games in Buzzfeed quizzes, or newspapers, or on viral Facebook posts. </p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">They’re fun, they tickle the brain and provide a fun way to kill five or ten minutes at the bus stop.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">But as much as I looked, I had never seen it really “gamified”.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Often these games existed as static pictures, with no feedback, and only as many questions as could fit on the image file. This meant a hard cap of 10 questions, much fewer on mobile.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I wanted to create something that took that idea to the next level.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Many more questions, with different categories ranging from TV and Movies to Historical Events, Famous People and even Country Flags.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">An almost infinite number of questions for a “Quick Fire” mode, to see how many you could answer in 60 seconds was the MVP, but when I had a little extra time I also coded a “Sudden Death” mode for those who like a little danger with their trivia.</p>
            </div>
            
            <div className="mb-10 md:mb-20">
                <img src="/images/triviamoji/green.jpg" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🎨 The Design</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The design is pulpy, bright and fun with a very strong focus on clarity, ease of wayfaring and simplicity.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I drew heavily from my love of retro comic book aesthetics, through the use of hyper-saturated colours, strong black outlines, combined gradients and “Ben Day Dots”, as well as the iconic Blambot font.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The game screen is kept mainly clear, with a few cute images and emojis to spice things up on the end screen.</p>

                <div className="mb-10">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img src="/images/triviamoji/red.jpg" className="block mx-auto" alt="Game end screen" />
                        </div>
                        <div>
                            <img src="/images/triviamoji/red_menu.jpg" className="block mx-auto" alt="Game end screen with menu" />
                        </div>
                    </div>
                    
                    {/* <caption className="text-center text-gray-500 font-regular mt-5">Clean. Minimalist. No unnecessary ingredients.</caption> */}

                </div>

            </div>

            <div className="mb-10 md:mb-20">
                <video width="100%" autoPlay loop muted>
                    <source src="/images/triviamoji/triviamoji.mp4" type="video/mp4" />
                </video>
                <div className="text-center text-gray-500 font-regular mt-5">The game loop being played</div>
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🔨 The Build</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Although Game Logic is never as simple as you hope its going to be, putting the app together wasn’t too much of a headache.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Built entirely on the front end with Next.js and React, using a local JSON store for questions and answer variant mechanics, this is a super lightweight solution.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">High scores and disabled categories are stored in the browser’s Local Storage, so it automatically remembers if you want to disable Country Flags (also my weak point!)</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I used Framer Motion for some simple state animations, and all CSS was implemented with Tailwind and SASS.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The original v1 build utilised the native input field and mobile keyboard, but I removed it in favour of easier cross-platform compatibility, and created a Wordle-style static keyboard instead.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The finished app was compiled and is running on a Linode VPS.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">You can see the full source code on my <a href="https://github.com/eliotrhys/triviamoji" target="_blank" rel="noreferrer" className="text-blue-500"><strong>GitHub</strong></a>, and you can play the game at <a href="https://www.triviamoji.com" target="_blank" rel="noreferrer" className="text-blue-500"><strong>www.triviamoji.com</strong></a> - have fun!</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8 text-center">🤩</p>

            </div>
        </div>

        <DeepDiveAlt />

      </div>
      )
    }

export default Triviamoji