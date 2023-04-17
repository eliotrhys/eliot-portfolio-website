// @ts-nocheck

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const variants = {
    hidden: { opacity: 0 },
    showing: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
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
            duration: 0.6
        }
    }
}

const ProjectCarousel = () => {

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSelectedItem, setMobileSelectedItem] = useState(null);
    const [mobileSelectedIndex, setMobileSelectedIndex] = useState(0);

    const handleItemClick = (item: any, index: number) => {
        setSelectedItem(item);
        setSelectedIndex(index);
        setOpen(true);
    };

    const handleMobileItemClick = (item: any, index: number) => {
        setMobileSelectedItem(item);
        setMobileSelectedIndex(index);
        setMobileOpen(true);
    };

    const handleLightboxArrowClick = (direction) => {
        const newIndex = direction === "next" ? selectedIndex + 1 : selectedIndex - 1;
        if (newIndex >= 0 && newIndex < portfolioItems.length) {
          setSelectedItem(portfolioItems[newIndex]);
          setSelectedIndex(newIndex);
        }
    };

    const handleMobileLightboxArrowClick = (direction) => {
        const newIndex = direction === "next" ? mobileSelectedIndex + 1 : mobileSelectedIndex - 1;
        if (newIndex >= 0 && newIndex < mobilePortfolioItems.length) {
          setSelectedMobileItem(mobilePortfolioItems[newIndex]);
          setSelectedMobileIndex(newIndex);
        }
    };

    const portfolioItems = [
        { id: 1, title: "An Optimistic Future", vibe: "Futuristic", description: "Landing page mockup for a personal writing project", url: "/images/projects/optimistic.jpg" },
        { id: 2, title: "Emoji Royale", vibe: "Pulpy", description: "Competitive emoji guessing game", url: "/images/projects/emojiroyale.png" },
        { id: 10, title: "BT Sport (Unofficial)", vibe: "Professional", description: "Fun remix I did of BT Sports after a frustrating real life use case", url: "/images/projects/btsport.jpg" },
        { id: 3, title: "100 Men All Men Should Know", vibe: "Sophisticated", description: "List of 100 Men who achieved great things but are relatively unknown to the public", url: "/images/projects/100men.png" },
        { id: 4, title: "Featherbed Tales", vibe: "Fun", description: "Online self-recording service for children's stories", url: "/images/featherbed/featherbedtemp.jpg" },
        { id: 11, title: "Logistics.io", vibe: "Professional", description: "Whitelabelled logistics solution design", url: "/images/projects/logisticsio.jpg" },
        { id: 12, title: "Screenwriting", vibe: "Quirky", description: "Concept for a component-based scriptwriting tool", url: "/images/projects/screenwriting.jpg" },
        { id: 5, title: "YouK", vibe: "Clean", description: "An online marketplace for goods made in the UK", url: "/images/projects/youk.jpg" },
        { id: 6, title: "arbnco", vibe: "Data Visualisation", description: "Dashboard for carbon emissions and air quality", url: "/images/projects/arbnco.png" },
        { id: 7, title: "Lifereel", vibe: "Crunchy", description: "Record documentaries about your family members", url: "/images/projects/lifereel.png" },
        { id: 8, title: "An Optimistic Future", vibe: "Opulent", description: "The writing/blog view for a personal writing project", url: "/images/projects/blogview.jpg" },
        { id: 9, title: "Thing-A-Day", vibe: "Pulpy", description: "Template for a 'non-depressing' daily email with silly stuff", url: "/images/projects/thingaday.png" },
    ];

    const mobilePortfolioItems = [
        { id: 1, title: "BadgeLife", vibe: "Exploratory", description: "Onboarding splash screen", url: "/images/projects/badgelife/welcome.png" },
        { id: 2, title: "BadgeLife", vibe: "Exploratory", description: "Dashboard with badges", url: "/images/projects/badgelife/dashboard.png" },
        { id: 3, title: "BadgeLife", vibe: "Exploratory", description: "Profile with badges", url: "/images/projects/badgelife/profile.png" },
        { id: 4, title: "PD Tracker", vibe: "Crunchy", description: "Parkinson's Tracker App splash screen", url: "/images/projects/pd_tracker/splash.png" },
        { id: 5, title: "PD Tracker", vibe: "Crunchy", description: "Parkinson's Tracker App capture screen", url: "/images/projects/pd_tracker/capture.png" },
        { id: 6, title: "PD Tracker", vibe: "Crunchy", description: "Parkinson's Tracker App emoji-based checkup", url: "/images/projects/pd_tracker/checkup.png" },
        { id: 7, title: "The Odd Complex", vibe: "Cool", description: "Dashboard for a media production company", url: "/images/projects/oddcomplex.png" },
        { id: 8, title: "Daily Digits", vibe: "Data Visualisation", description: "Number-based news insights", url: "/images/projects/daily.png" }
    ];

    return (
        <div className="mb-10 md:mb-20">

            <div className="container mx-auto">

                <h2 className="subtitle text-center mb-10">Most recent coding projects</h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-0"
                    initial="hidden"
                    variants={variants}
                    whileInView="showing"
                    viewport={{ once: true }}
                >

                    <a target="_blank" rel="noreferrer" href="https://www.triviamoji.com" className="mb-10 p-4">
                        <h2 className="subtitle small text-center">Triviamoji</h2>
                        <div className="text-lg text-slate-500 text-center mb-3">HTML, CSS, Javascript, React, Next.js, Framer Motion</div>

                        <div className="mb-5">
                            <div className="relative">
                                <div className="bg-black w-full h-full opacity-0 hover:opacity-90 absolute rounded-md top-0 z-20 duration-300 flex items-center justify-center">
                                    <div className="text-white text-xl font-bold">Go to <span className="text-yellow-400">triviamoji.com</span></div>
                                </div>
                                <img src="/images/projects/triviamoji_og.jpg" className="rounded-md mx-auto" alt="" />
                            </div>
                        </div>
                        <div className="w-full mx-auto px-4">
                            <h2 className="text-center text-lg md:text-xl md:leading-10">I've just released the Beta version of my new web trivia game <span className="text-bold text-blue-500 hover:cursor-pointer">Triviamoji</span>, built in a few days using React, Next.js and Framer Motion. Full breakdown coming soon!</h2>
                        </div>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.promptblocks.xyz" className="mb-10 p-4">
                        <h2 className="subtitle small text-center">Promptblocks</h2>
                        <div className="text-lg text-slate-500 text-center mb-3">HTML, CSS, Javascript, React, Next.js, IndexedDB</div>
                        
                        <div className="mb-5">
                            <div className="relative">
                                <div className="bg-black w-full h-full opacity-0 hover:opacity-90 absolute rounded-md top-0 z-20 duration-300 flex items-center justify-center">
                                    <div className="text-white text-xl font-bold">Go to <span className="text-yellow-400">promptblocks.xyz</span></div>
                                </div>
                                <img src="/images/projects/promptblocks.jpg" className="rounded-md mx-auto" alt="" />
                            </div>
                        </div>
                        <div className="w-full mx-auto px-4">
                            <div className="flex justify-center">
                                <div className="bg-yellow-100 text-yellow-600 inline-block mb-1 px-3 py-2 text-center text-bold mx-auto justify-center">👷🏻‍♂️ This project is under construction 🚧</div>
                            </div>
                            <h2 className="text-center text-lg md:text-xl md:leading-10">I'm currently working on an app for use with AI art generators Stable Diffusion and Midjourney. This is a local database for images, and a prompt builder for quick remixing of ideas!</h2>
                        </div>
                    </a>

                </motion.div>
            </div>

            

            <div className="mb-10">
                <h2 className="subtitle text-center">Some recent UI mockups</h2>
                <div className="text-lg text-slate-500 text-center mb-3">Adobe XD, Desktop & Mobile</div>
                <div className="text-center">
                    <div className="bg-yellow-100 text-yellow-600 inline-block mb-1 px-3 py-2 text-center text-bold mx-auto justify-center">👷🏻‍♂️ This section under construction 🚧</div>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                currentIndex={selectedIndex}
                slides={portfolioItems.map((item) => ({ src: item.url }))}
                onArrowClick={handleLightboxArrowClick}
            />

            <Lightbox
                open={mobileOpen}
                close={() => setMobileOpen(false)}
                currentIndex={mobileSelectedIndex}
                slides={mobilePortfolioItems.map((item) => ({ src: item.url }))}
                onArrowClick={handleMobileLightboxArrowClick}
            />

            <div className="container mx-auto">

                <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-0"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    {
                        portfolioItems.map((item, index) => (
                            <motion.div variants={animationItem} key={item.id} onClick={() => handleItemClick(item, index)}>
                                <div className="portfolio-grid-item">
                                    <div className="p-4">
                                        <img src={item.url} className="mx-auto rounded-md drop-shadow-lg" alt="" />
                                        <div className="p-4">
                                            <div className="bg-blue-100 text-blue-600 inline-flex mb-1 px-3">{item.vibe}</div>
                                            <div className="title font-bold mb-1">{item.title}</div>
                                            <div className="description text-slate-500 mb-3">{item.description}</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </motion.div>
                        ))
                    }
                </motion.div>

            </div>

            <div className="container mx-auto">

                <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-0"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    {
                        mobilePortfolioItems.map((item, index) => (
                            <motion.div variants={animationItem} key={item.id} onClick={() => handleMobileItemClick(item, index)}>
                                <div className="portfolio-grid-item">
                                    <div className="p-4">
                                        <img src={item.url} className="mx-auto rounded-md drop-shadow-lg" alt="" />
                                        <div className="p-4">
                                            <div className="bg-blue-100 text-blue-600 inline-flex mb-1 px-3">{item.vibe}</div>
                                            <div className="title font-bold mb-1">{item.title}</div>
                                            <div className="description text-slate-500 mb-3">{item.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
              
      </div>
    )
}

export default ProjectCarousel