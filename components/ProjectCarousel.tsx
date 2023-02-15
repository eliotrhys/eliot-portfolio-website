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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSelectedItem, setMobileSelectedItem] = useState(null);


    const handleItemClick = (item: any) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleMobileItemClick = (item: any) => {
        setMobileSelectedItem(item);
        setMobileOpen(true);
    };

    const portfolioItems = [
        { id: 1, title: "An Optimistic Future", vibe: "Futuristic", description: "Landing page mockup for a personal writing project", url: "/images/projects/optimistic.png" },
        { id: 2, title: "Emoji Royale", vibe: "Pulpy", description: "Competitive emoji guessing game", url: "/images/projects/emojiroyale.png" },
        { id: 3, title: "100 Men All Men Should Know", vibe: "Sophisticated", description: "List of 100 Men who achieved great things but are relatively unknown to the public", url: "/images/projects/100men.png" },
        { id: 4, title: "Featherbed Tales", vibe: "Fun", description: "Online self-recording service for children's stories", url: "/images/featherbed/featherbedtemp.jpg" },
        { id: 5, title: "YouK", vibe: "Clean", description: "An online marketplace for goods made in the UK", url: "/images/projects/youk.png" },
        { id: 6, title: "arbnco", vibe: "Data Visualisation", description: "Dashboard for carbon emissions and air quality", url: "/images/projects/arbnco.png" },
        { id: 7, title: "Lifereel", vibe: "Crunchy", description: "Record documentaries about your family members", url: "/images/projects/lifereel.png" },
        { id: 8, title: "An Optimistic Future", vibe: "Opulent", description: "The writing/blog view for a personal writing project", url: "/images/projects/blogview.png" },
        { id: 9, title: "Thing-A-Day", vibe: "Pulpy", description: "Template for a 'non-depressing' daily email with silly stuff", url: "/images/projects/thingaday.png" },
    ];

    const mobilePortfolioItems = [
        { id: 1, title: "BadgeLife", vibe: "Exploratory", description: "Dashboard with badges", url: "/images/projects/badgelife/dashboard.png" },
        { id: 2, title: "BadgeLife", vibe: "Exploratory", description: "Profile with badges", url: "/images/projects/badgelife/profile.png" },
        { id: 3, title: "BadgeLife", vibe: "Exploratory", description: "Onboarding splash screen", url: "/images/projects/badgelife/welcome.png" },
        { id: 4, title: "PD Tracker", vibe: "Crunchy", description: "Parkinson's Tracker App splash screen", url: "/images/projects/pd_tracker/splash.png" },
        { id: 5, title: "PD Tracker", vibe: "Crunchy", description: "Parkinson's Tracker App capture screen", url: "/images/projects/pd_tracker/capture.png" },
        { id: 6, title: "PD Tracker", vibe: "Crunchy", description: "Parkinson's Tracker App emoji-based checkup", url: "/images/projects/pd_tracker/checkup.png" },
        { id: 7, title: "The Odd Complex", vibe: "Cool", description: "Dashboard for a media production company", url: "/images/projects/oddcomplex.png" },
        { id: 8, title: "Daily Digits", vibe: "Data Visualisation", description: "Number-based news insights", url: "/images/projects/daily.png" }
    ];

    return (
        <div className="mb-10 md:mb-20">
            <div className="mb-10">
                <h2 className="subtitle text-center">Some recent mockups</h2>
                <div className="text-lg text-slate-500 text-center mb-3">Adobe XD, Desktop & Mobile</div>
                <div className="text-center">
                    <div className="bg-yellow-100 text-yellow-600 inline-block mb-1 px-3 py-2 text-center text-bold mx-auto justify-center">👷🏻‍♂️ This section under construction 🚧</div>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: selectedItem?.url }]}
            />

            <Lightbox
                open={mobileOpen}
                close={() => setMobileOpen(false)}
                slides={[{ src: mobileSelectedItem?.url }]}
            />

            <div className="container mx-auto">

                <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-0"
                        initial="hidden"
                        variants={variants}
                        whileInView="showing"
                        viewport={{ once: true }}
                    >
                    {
                        portfolioItems.map((item) => (
                            <motion.div variants={animationItem} key={item.id} onClick={() => handleItemClick(item)}>
                                <div className="portfolio-grid-item">
                                    <div className="p-4">
                                        <img src={item.url} className="mx-auto rounded-md drop-shadow-lg rounded-md" alt="" />
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
                        mobilePortfolioItems.map((item) => (
                            <motion.div variants={animationItem} key={item.id} onClick={() => handleMobileItemClick(item)}>
                                <div className="portfolio-grid-item">
                                    <div className="p-4">
                                        <img src={item.url} className="mx-auto rounded-md drop-shadow-lg rounded-md" alt="" />
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