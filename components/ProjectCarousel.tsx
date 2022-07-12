import React from 'react';
import { motion } from 'framer-motion';

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

    return (
        <div className="mb-10 md:mb-20">
            <div className="mb-10">
                <h2 className="subtitle text-center">Some recent mockups</h2>
                <div className="text-lg text-slate-500 text-center mb-3">Adobe XD, Desktop, 1920 x 1080</div>
                <div className="text-center">
                    <div className="bg-yellow-100 text-yellow-600 inline-block mb-1 px-3 py-2 text-center text-bold mx-auto justify-center">👷🏻‍♂️ Section under construction 🚧</div>
                </div>
            </div>
            

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
                            <motion.div variants={animationItem} key={item.id}>
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


            {/* <div style={{}}>
                <img src="/images/projects/100men.png" alt="" />
            </div> */}
              
      </div>
    )
}

export default ProjectCarousel