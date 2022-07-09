import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import ProjectDetails from './ProjectDetails';

const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
};

const ProjectCarousel = () => {

    const portfolioItems = [
        { id: 1, title: "YouK", description: "An online marketplace for goods made in the UK", url: "/images/projects/youk.png" },
        { id: 2, title: "Emoji Royale", description: "A competitive emoji guessing game", url: "/images/projects/emojiroyale.png" },
        { id: 3, title: "The Lang Cat", description: "Platform analyser for mortgage advisors", url: "/images/projects/emojiroyale.png" },
        { id: 4, title: "Featherbed Tales", description: "Online self-recording service for children's stories", url: "/images/featherbed/featherbedtemp.jpg" },
        { id: 5, title: "100 Men", description: "List of 100 Men who achieved great things but are relatively unknown to the public", url: "/images/projects/100men.png" },
        { id: 6, title: "arbnco", description: "Dashboard for carbon emissions and air quality", url: "/images/projects/arbnco.png" },
        { id: 7, title: "Lifereel", description: "Record documentaries about your family members", url: "/images/projects/lifereel.png" },
        { id: 8, title: "BadgeLife", description: "Earn Badges by having life experiences", url: "/images/projects/badgelife.png" },
        { id: 9, title: "Thing-A-Day", description: "A non-depressing email with silly stuff", url: "/images/projects/youk.png" },
    ];

    // const next = () => {
    //     this.slider.slickNext();
    // }

    // const previous = () => {
    //     this.slider.slickPrev();
    // }

    return (
        <div className="mb-10 md:mb-20">
            <h2 className="subtitle text-center mb-5">Recent designs</h2>

            <div className="text-2xl text-center">
                <button className="button bg-red-400 p-3">Previous</button>
                <button className="button bg-blue-400 p-3 ml-3">Next</button>
            </div>

            <Slider {...settings} className="overflow-hidden">
            {
                portfolioItems.map((item) => (
                    <div className="slider-item p-4" key={item.id} style={{}}>
                        <img src={item.url} className="h-full mx-auto" alt="" />
                        <div className="p-4">
                            <div className="title font-bold mb-1">{item.title}</div>
                            <div className="text-lg mb-3">{item.description}</div>
                        </div>
                    </div>
                ))
            }
            </Slider>

            {/* <div>
                <button className="button" onClick={this.previous}>
                    Previous
                </button>
                <button className="button" onClick={this.next}>
                    Next
                </button>
            </div> */}

            {/* <ProjectDetails /> */}
              
      </div>
    )
}

export default ProjectCarousel