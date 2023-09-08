import { motion } from "framer-motion";

const Mockups = () => { 

    // const variants = {
    //     hidden: { opacity: 0 },
    //     showing: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.125
    //         }
    //     }
    // }

    // const animationItem = {
    //     hidden: {
    //         opacity: 0,
    //     },
    //     showing: {
    //         opacity: 1,
    //         transition: {
    //             duration: 0.3
    //         }
    //     }
    // }

    return (

        <ul className="scroll mb-14">
            <li className="list-item">
                <div className="">
                    <div>
                        <img src="/images/projects/btsport.jpg" alt="" className="rounded-md mb-4 h-56 md:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white">BT Sport</div>
                </div>
            </li>
            <li className="list-item">
                <div className="">
                    <div>
                        <img src="/images/projects/badgelife/dashboard.png" alt="" className="rounded-md mb-4 h-56 md:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white">BT Sport</div>
                </div>
            </li>
            <li className="list-item">
                <div className="">
                    <div>
                        <img src="/images/projects/pd_tracker/capture.png" alt="" className="rounded-md mb-4 h-56 md:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white">BT Sport</div>
                </div>
            </li>
            <li className="list-item">
                <div className="">
                    <div>
                        <img src="/images/projects/fullstackai.jpg" alt="" className="rounded-md mb-4 h-56 md:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white">BT Sport</div>
                </div>
            </li>
            <li className="list-item">
                <div className="">
                    <div>
                        <img src="/images/projects/oddcomplex.png" alt="" className="rounded-md mb-4 h-56 md:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white">BT Sport</div>
                </div>
            </li>
            <li className="list-item pr-4">
                <div className="">
                    <div>
                        <img src="/images/projects/triviamoji.png" alt="" className="rounded-md mb-4 h-56 md:h-[38rem] max-w-fit" />
                    </div>
                    <div className="text-white">BT Sport</div>
                </div>
            </li>
        </ul>
    )
}

export default Mockups;