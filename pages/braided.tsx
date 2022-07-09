import { motion } from "framer-motion"
import { NextPage } from "next"
import Link from "next/link"

const Braided: NextPage = () => {

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
      <div className="">
        <div>
            <video autoPlay muted loop id="fullPageVideo">
                <source src="https://eliot.eu-central-1.linodeobjects.com/braided.webm" type="video/webm" />
                <source src="https://eliot.eu-central-1.linodeobjects.com/braided.mp4" type="video/mp4" />
            </video>
            
            <div className="full-page-video-content w-3/4 md:bg-cover md:bg-no-repeat md:bg-center md:h-screen flex items-center justify-center relative braided">
            <motion.div
                        className=""
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white eliot-shadow">🚀</h1></motion.div>
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white mb-3 eliot-shadow">Braided Communications</h1></motion.div>
                    <motion.div variants={animationItem}><h2 className="subtitle text-center text-white mb-10 mx-4 eliot-shadow">A psychology-based communications tool for Astronauts en-route to Mars</h2></motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center mb-10"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-blue-100 text-blue-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">📡</span>Space Communications</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-orange-100 text-orange-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">🧠</span>Psychological Design</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-purple-100 text-purple-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">🖥</span>Web</div></motion.div>
                    </motion.div>
                    <div className="text-center">
                        <div className="text-extrabold text-white mb-4">scroll down</div>
                        <div className="text-4xl finger-down">👇</div>
                    </div>
                </motion.div>
            </div>
        </div>

        <div className="container w-full lg:w-3/4 xl:w-3/4 2xl:w-1/2 px-4 md:px-0 mx-auto mt-10 md:mt-20">
            <div className="mb-20">
                <h2 className="subtitle text-center mb-8">💡 The Pitch</h2>

                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">Braided Communications approached us to build a <strong className="text-blue-500">communications tool</strong>, based on <strong className="text-orange-500">psychological principles</strong>, to help astronauts communicate <strong className="text-purple-500">asynchronously</strong> without mental stress</p>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">As <strong>design lead</strong> for this project, I helped bring this vision to life from concept to completion</p>
            </div>

            <div className="mb-10 md:mb-20">
                <img src="/images/braided/laptop.jpeg" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🤔 The Problem</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Getting to Mars is a tricky business.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Not only is it an unbelievable engineering and operational feat, but a mental one too. At the end of the day it's <strong>human beings</strong> up there. There is a huge pressure on the mental and psychological strength of the people who operate in what is undoubtedly one of the most high-stress work environments in the world (or out of this world come to think of it...).</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The issue is this: between 🌍 Earth and 👽 Mars there is at the very least a <strong>22 minute delay</strong> between a communications signal leaving Earth and arriving at Mars, or a spacecraft in Martian orbit.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">This kind of <strong>"asynchronous communication"</strong> can be one of the most potent sources of isolation for astronauts. If you're sending a message into the ether to your friends and family back on Earth, but you're not getting a response back for 22 minutes there are all kinds of strange psychological implications that the human brain is not designed to deal with.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The team at Braided Communications came up with a really cool idea: <strong>Topic Based Conversations With Time Intervals.</strong></p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Essentially, splitting up a conversation into set topics, assigning a set time to each of those topics, and then automatically loading the next topic of a conversation. These conversation topics would spin in a <strong>"Carousel"</strong> of sorts, which would automatically rotate at the end of the allotted time.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Using this unqiue method of communication, you removed the feeling of "dead time" between responses, not necessarily tricking your brain into thinking you're having a synchronous conversation, but allowing your focus to naturally move to the next topic as you are never waiting for the other person to send back their response.</p>


                <p className="text-xl md:text-2xl md:leading-10 mb-8">When they came to us with this concept, I knew we were going to be able to build something really special.</p>
            </div>
            
            <div className="mb-10 md:mb-20">
                <img src="/images/braided/braidedsession.png" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🎨 The Design</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Obviously when you're designing for the <strong>internet in space</strong>, you're going to have some limitations, but also a few psychological implications in the experience design you don't usually have to think about with "Terrestrial" apps.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The Braided team came from an Academic and Scientific background, and had a huge focus on usability and functionality. However this was meant to be a general purpose design for people of all specialties, and fall within the natural language of app design too. There was an existing early prototype of the application, but the design lacked understanding of screen space and language of modern communication apps.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">We needed to turn their vision into something people would instinctually know how to use.</p>

                <div className="mb-10">
                    <img src="/images/braided/braided-login.png" className="block mx-auto" alt="A custom gift-card graphic I made for the interface" />
                    <div className="text-center text-gray-500 font-regular mt-5">Clean. Minimalist. No unnecessary ingredients.</div>
                </div>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">There was a lot of re-learning I had to do as a designer. I thought nothing of adding little images of a user's contacts as profile images, standard practice in the design world for web applications. But the Braided team were very well-steeped in the "psychological profile" of the astronauts. Anything that could trigger feelings of isolation in an astronaut were cut out very early on.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">There is an impersonality to text, akin to writing and receiving a letter. The second you add images you're creating a psychological shift that could be uncomfortable.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The bulk of the app was incredibly minimalist. Large text sizes, clear signposted buttons. Nothing hidden in menus or superflous options for customisation.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">You don't want anything that will distract or frustrate an astronaut. <strong>Their job is quite hard already.</strong></p>

            </div>

            <div className="mb-10 md:mb-20">
                <video width="100%" autoPlay loop muted>
                    <source src="/images/braided/braided.mp4" type="video/mp4" />
                </video>
                <div className="text-center text-gray-500 font-regular mt-5">The working carousel! Nothing included that isn't 100% necessary.</div>
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🔨 The Build</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">In terms of Front-End Development this was one of the tricker projects I have ever built.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Creating a spinning carousel in 3D space had me cracking out the Pythagorean Theorem for the first time since secondary school!</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Our initial plan was to keep it simple for the MVP build. Static pages that faded in and out on each "rotation". But on a day-long technical spike I'd managed to build a functional version of the Carousel, which was our jumping off point.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I built the front-end using pretty basic web technologies: HTML, CSS (Sass), Vanilla Javascript, a little jQuery with a focus on 3D CSS Transforms and keeping it lightweight. No uneccessary ingredients or animations other than the ones which help the user understand the function of the app, for example the rotation of the carousel.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The Back-End Development team built the dynamic components in .NET. I helped code some of the lobby generation code and various account management tasks in C#.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Ultimately we wanted to keep things super simple, functional, and elegant. The team at Braided seemed very happy with the result.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8 text-center">🚀</p>

            </div>

            <div className="mb-10">
                <div className="subtitle text-center">Read the other Deep Dives 🤿</div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-0"
                initial="hidden"
                variants={variants}
                whileInView="showing"
                viewport={{ once: true }}
            >
                <motion.div variants={animationItem}>
                    <Link href="/featherbed">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/featherbed.png" className="block mb-3" alt="" />
                                <div className="overlay">Read more</div>
                            </div>
                            <h4 className="title black">Featherbed Tales</h4>
                            <p className="description">Read your kids a bedtime story - wherever you are</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={animationItem}>
                    <Link href="/langcat">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/langcat.png" className="block mb-3" alt="" />
                                <div className="overlay">Read more</div>
                            </div>
                            <h4 className="title black">The Lang Cat</h4>
                            <p className="description">Comparison tool for financial advisers choosing mortgage providers</p>
                        </div>
                    </Link>
                </motion.div>
            </motion.div>

            <div className="mb-20">
                <Link href="/">
                    <div className="text-center text-lg cursor-pointer hover:scale-110 ease-in-out">👈 see the rest</div>
                </Link>
            </div>
        </div>
      </div>
      )
    }

export default Braided