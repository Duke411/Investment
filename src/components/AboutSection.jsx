import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      imageControls.start({ opacity: 1, y: 0 });
      textControls.start({ opacity: 1, y: 0 });
    }
  }, [inView, imageControls, textControls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about" className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8" ref={ref}>
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            animate={imageControls}
            variants={variants}
          >
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="About Us - TradeHub Investment Growth"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            initial="hidden"
            animate={textControls}
            variants={variants}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-950 leading-relaxed">
              Since its inception in 2014, TradeHub has focused on disrupting the
              financial investment sector, particularly in agriculture,
              cryptocurrency, real estate, and stock market trading and securities,
              by providing tailored investment solutions for clients seeking
              retirement planning, education savings, or wealth growth.
            </p>
            <p className="text-lg text-gray-950 mt-4">
              TradeHub's commitment to transparency, integrity, and accountability,
              combined with a customer-centric approach, positions it at the
              forefront of the financial industry.
            </p>
            <a href="/learnmore" data-discover="true">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition">
                Learn More
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;