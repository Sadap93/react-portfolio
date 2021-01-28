import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';


const AboutSection = () => {

    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    };
    const container = {
        hidden: { x: 100 },
        show: {
            x: 0, transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.5,
                when: "beforeChildren",
            }
        },
    }

    return (
        <About>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                        >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                    <p>Contact us for any photograpy or videography ideas that you have. We have professional with amazing skills.</p>
                    <button>Contact Us</button>
                </motion.div>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
};



export default AboutSection;