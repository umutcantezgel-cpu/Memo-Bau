import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgressIndicator: React.FC = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-accent-base transform origin-left z-[9999]"
            style={{ scaleX: scrollYProgress }}
            transition={{ ease: "easeOut", duration: 0.1 }}
        />
    );
};
