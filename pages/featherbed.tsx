import { motion } from "framer-motion"
import { NextPage } from "next"
import Link from "next/link"

const Featherbed: NextPage = () => {

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
                <source src="https://eliot.eu-central-1.linodeobjects.com/featherbed.webm" type="video/webm" />
                <source src="https://eliot.eu-central-1.linodeobjects.com/featherbed.mp4" type="video/mp4" />
            </video>
            
            <div className="full-page-video-content w-3/4 md:bg-cover md:bg-no-repeat md:bg-center md:h-screen flex items-center justify-center relative braided">
                <motion.div
                        className=""
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white eliot-shadow">📖</h1></motion.div>
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white mb-3 eliot-shadow">Featherbed Tales</h1></motion.div>
                    <motion.div variants={animationItem}><h2 className="subtitle text-center text-white mb-10 mx-4 eliot-shadow">Read your kids a bedtime story - wherever you are</h2></motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center mb-10"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-green-100 text-green-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">📖</span>Online Reading</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-cyan-100 text-cyan-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">👶🏻</span>Children's Stories</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-purple-100 text-purple-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">🖥</span>Web</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-lime-100 text-lime-500 md:text-xl p-2 px-5 mx-1 rounded my-1 cursor-pointer"><span className="mr-3">📱</span>Mobile</div></motion.div>
                    </motion.div>
                    <motion.div className="text-center">
                        <div className="text-extrabold text-white mb-4">scroll down</div>
                        <div className="text-4xl finger-down">👇</div>
                    </motion.div>
                </motion.div>
            </div>
        </div>

        <div className="container w-full lg:w-3/4 xl:w-3/4 2xl:w-1/2 px-4 md:px-0 mx-auto mt-10 md:mt-20">
            <div className="mb-20">
                <h2 className="subtitle text-center mb-8">💡 The Pitch</h2>

                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">Featherbed Tales approached us to build an online platform for <strong className="text-green-500">recording custom voiceovers</strong> for <strong className="text-purple-500">children’s books</strong>, based on the charming works of Caroline England.</p>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">As <strong className="text-purple-500">design lead</strong> for this project, I was responsible for the <strong className="text-red-500">complete UX flow</strong>, developing a quirky and personable <strong className="text-green-500">visual design style</strong>, and implementing <strong className="text-cyan-500">interactive Javascript code</strong> for usability for all ages.</p>
            </div>

            <div className="mb-10 md:mb-20">
                <img src="/images/featherbed/book-page-iphone.png" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🤔 The Problem</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Once upon a time we all lived in the same small village as our parents, and grandparents and great-grandparents, and great-great-parents…</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">But the world has opened up in a huge way. It’s not unusual for us to live, and work, all over the place - often hundreds of miles from our extended families.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">That can mean it’s hard for families who are apart to create lasting connections with young children, be it their own kids, grandchildren, or nieces and nephews.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Caroline, the founder of Featherbed Tales, came up with the idea of a platform for self-recorded bedtime stories, based off her work as a children’s author. Pick a book from the site on your phone or laptop, and record - simple!</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">This way family members can read to their kids from anywhere in the world. Parents who work away from home, maybe stationed overseas in the military, incarcerated or otherwise indisposed.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">From the initial meeting we knew we were the right fit and could make something cool. This is what Caroline said about the initial meeting:</p>

                <div className="relative">
                    <div className="text-5xl lg:text-9xl absolute top-3 left-3 lg:-top-10 lg:-left-10 text-purple-600" style={{fontFamily: "Times New Roman"}}>“</div>
                    <p className="text-xl md:text-2xl md:leading-10 mb-8 bg-purple-100 p-10 text-purple-600">The workshop for me was absolutely amazing. We sat down, the four of us, for a few hours and talked through the various paths and ideas for the project. Everything was always transparent, consistent, and I could see immediately that their approach was exactly how I like to work.</p>
                </div>
                

                <p className="text-xl md:text-2xl md:leading-10 mb-8">We got straight to work.</p>
            </div>

            <div className="mb-10 md:mb-20">
                <div className="embed-container"><iframe src='https://www.youtube.com/embed/w3BPHnomL78' frameBorder='0' allowFullScreen></iframe></div>
                <div className="text-center text-gray-500 font-regular mt-5">A how-to video I made for an early version of the platform. Please excuse my voice acting... 🤦🏻‍♂️</div>
            </div>
            
            <div className="mb-10 md:mb-20">
                <img src="/images/featherbed/featherbed_desktop.png" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🎨 The Design</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The great thing about blank canvas projects is that as a lead designer you can choose which direction to go. Caroline’s stories are sweet, playful and fun - all elements I wanted to capture in the spirit of the design.</p>

                <div className="mb-10">
                    <img src="/images/featherbed/2giftcard.png" className="block mx-auto" alt="A custom gift-card graphic I made for the interface" />
                    <div className="text-center text-gray-500 font-regular mt-5">A custom gift-card graphic I made for the interface - capturing the spirit of the books wherever you can</div>
                </div>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">There were a few UX considerations from the get-go. This app would likely be used by an older demographic - grandparents. I wanted to build for simplicity and clarity for the less technologically savvy.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Nothing should be on the page that doesn’t 100% need to be on the page.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I wanted to channel the idea of a simple game like interface. Big buttons. Big text. Arrows to point you to the next step of the process. Signposting. The final result usually had big high-contrast text for ease of readability, and big chunky buttons for actions.</p>

                <div className="mb-10">
                    <img src="/images/featherbed/detailspagemockup.png" className="block mx-auto" alt="A custom gift-card graphic I made for the interface" />
                    <div className="text-center text-gray-500 font-regular mt-5">Big CTA buttons, lots of whitespace, clear signposting</div>
                </div>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The visual style borrowed largely from Caroline’s books. Splashy watercolours, characters poking their little heads out at various locations, bold childlike-scrawl for font families.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I even had the idea of little “helper bugs” that would pop up throughout the recording process to help people understand next steps.</p>

                <div className="grid grid-cols-2">
                    <div>
                        <img src="/images/featherbed/butterfly-flower.jpeg" className="block mx-auto" alt="" />
                    </div>
                    <div>
                        <img src="/images/featherbed/large-snail.jpeg" className="block mx-auto" alt="" />
                    </div>
                </div>

                <p className="text-xl md:text-2xl md:leading-10 mb-8 text-center font-bold">All the little details matter.</p>

            </div>

            <div className="mb-10 md:mb-20">
                <video width="100%" autoPlay loop muted>
                    <source src="/images/featherbed/story.webm" type="video/mp4" />
                </video>
                <div className="text-center text-gray-500 font-regular mt-5">Pages do be flippin.</div>
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🔨 The Build</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Building the Front-End was reasonably straightforward, with a couple of unique challenges for immersion and the recording process.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Technology-wise the site was built in HTML, CSS (Sass), jQuery, the Turn.js library for creating the pages, and the browser’s Web Audio API.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The most technologically complex pages were the reading and recording pages. The reading page was design to be intuitive at fullscreen so that devices of all sizes could display the artwork at full fidelity while still being easy to flip through.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The UX for the recording pages was imperative to get right. We had tips and tricks for getting the best sound out of onboard microphones, and we implemented a countdown clock for the right time to start recording the lines.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Since building the Minimum Viable Product, Featherbed Tales has gone from strength to strength, adding in functionality for Greetings Cards, Nursery Rhymes and Short Poems, and has a readership program throughout children’s libraries all across the UK.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8 text-center">📖</p>

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
                    <Link href="/braided">
                        <div className="deep-dive-synopsis mb-10">
                            <img src="/images/dives/braided.png" className="block mb-3" alt="" />
                            <h4 className="title black">Braided Communications</h4>
                            <p className="description">A psychology-based communications tool for Astronauts en-route to Mars</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={animationItem}>
                    <Link href="/langcat">
                        <div className="deep-dive-synopsis mb-10">
                            <img src="/images/dives/langcat.png" className="block mb-3" alt="" />
                            <h4 className="title black">The Lang Cat</h4>
                            <p className="description">Comparison tool for financial advisers choosing mortgage providers</p>
                        </div>
                    </Link>
                </motion.div>
            </motion.div>

            <div className="mb-20">
                <Link href="/">
                    <div className="text-center text-lg cursor-pointer">👈 see the rest</div>
                </Link>
            </div>
        </div>
      </div>
      )
    }

export default Featherbed