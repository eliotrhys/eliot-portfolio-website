import { motion } from "framer-motion"
import { NextPage } from "next"
import Link from "next/link"

const LangCat: NextPage = () => {

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
                <source src="https://eliot.eu-central-1.linodeobjects.com/langcat.webm" type="video/webm" />
                <source src="https://eliot.eu-central-1.linodeobjects.com/langcat.mp4" type="video/mp4" />
            </video>
            
            <div className="full-page-video-content w-3/4 md:bg-cover md:bg-no-repeat md:bg-center md:h-screen flex items-center justify-center relative braided">
                <motion.div
                        className=""
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white eliot-shadow">🏡</h1></motion.div>
                    <motion.div variants={animationItem}><h1 className="main-title text-center text-white mb-3 eliot-shadow">The Lang Cat</h1></motion.div>
                    <motion.div variants={animationItem}><h2 className="subtitle text-center text-white mb-10 mx-4 eliot-shadow">Comparison tool for financial advisers choosing mortgage providers</h2></motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center mb-10"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-emerald-100 text-emerald-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">🏡</span>Mortgage Advice</div></motion.div>
                        <motion.div variants={animationItem}><div className="ease-in-out duration-300 whitespace-nowrap hover:scale-110 bg-slate-100 text-slate-500 md:text-xl mx-1 p-2 px-5 rounded my-1 cursor-pointer"><span className="mr-3">💰</span>Financial Services</div></motion.div>
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

                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">We were approached by The Lang Cat to build a comparison tool for <strong>financial advisors.</strong> A one-stop-shop for <strong>due diligence</strong> and <strong>mortgage platform comparison.</strong></p>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:leading-loose text-center">I was <strong>design lead</strong> for this project, one of my early major projects, and worked alongside the team to create a <strong>clean user experience</strong> for a complicated product.</p>
            </div>

            <div className="mb-10 md:mb-20">
                <img src="/images/langcat/homepage-langcat.png" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🤔 The Problem</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Financial Advisors have a lot of different responsibilities.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">They have to provide “due diligence” reports that they did the necessary research for each of their clients, to make sure they have the best deal.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">They need tools for that, to compare the features of the mortgage providers and their pricing structure.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">They also have to keep up to date with the latest new in the industry and make sure their practices are the best in class.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">This was done with a bunch of loosely tied together digital and paper processes, which for the modern Mortgage Advisor is less than ideal.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Platform Analyser was to be a “one-stop-shop” for everything The Lang Cat’s business offered in a digital capacity. Online due diligence with records, platform feature comparison, pricing prowess and market leading insights in the Content Hub.</p>
            </div>
            
            <div className="mb-10 md:mb-20">
                <img src="/images/langcat/storyboarding.png" className="block mx-auto" alt="" />
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🎨 The Design</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The first step was to sit and sketch out the User Flow. Every page. Every condition. We wanted a clear blueprint on every click of where we were going and why.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The vast majority of the application is the “due diligence” flow, which provides a step by step breakdown into the processes of getting the right mortgage provider for a client.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">I pushed for signposted steps, with a large progress bar at the top that let you know how far into the process this went. This stayed constant, even as the rest of the UI changed to show direct comparisons, scrollable tables, heatmaps and more.</p>

                <div className="mb-10">
                    <img src="/images/langcat/gridpage.png" className="block mx-auto" alt="The main landing page for the due diligence flow" />
                    <div className="text-center text-gray-500 font-regular mt-5">The main landing page for the due diligence flow</div>
                </div>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Typographically the app needed to be bold and clear, as most of this data was to render to PDF reports at the end that needed to be printed and kept on file in a physical location.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">From a visual design standpoint, financial tools are hard to keep beautiful. At first I tried to add more visual flair in, but the feedback early on was that this was going to be a tool that advisors use most days, and anything that got in the way of quick use would be a hindrance.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">So we focussed our efforts on quick, simple, signposted steps and common, recognisable design patterns.</p>
            </div>

            <div className="mb-10 md:mb-20">
                <video width="100%" autoPlay loop muted>
                    <source src="https://eliot.eu-central-1.linodeobjects.com/langcat-anim.webm" type="video/webm" />
                    <source src="https://eliot.eu-central-1.linodeobjects.com/langcat-anim.mp4" type="video/mp4" />
                </video>
                <div className="text-center text-gray-500 font-regular mt-5">The working carousel! Nothing included that isn't 100% necessary.</div>
            </div>

            <div className="mb-20">
                <h2 className="subtitle mb-8">🔨 The Build</h2>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">The primary tools used in this build were HTML, CSS (Bootstrap, Sass), jQuery, Knockout.js and IronPDF. This project was my first exposure to PDF Generators, and also to CSS Print Stylesheets.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8">Platform Analyser has been a huge success for The Lang Cat business and a huge amount of work is still being done on adding new features and adapting new needs for users as they grow.</p>

                <p className="text-xl md:text-2xl md:leading-10 mb-8 text-center">🏡</p>

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
                    <Link href="/braided">
                        <div className="deep-dive-synopsis mb-10">
                            <div className="relative">
                                <img src="/images/dives/braided.png" className="block mb-3" alt="" />
                                <div className="overlay">Read more</div>
                            </div>
                            <h4 className="title black">Braided Communications</h4>
                            <p className="description">A psychology-based communications tool for Astronauts en-route to Mars</p>
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

export default LangCat