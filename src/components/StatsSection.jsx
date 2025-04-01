import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2, // Staggered animation for each stat
          duration: 0.6,
          ease: 'easeOut',
        },
      }));
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { value: '11,000+', label: 'Total Investors' },
    { value: '365', label: 'Running Days' },
    { value: '$11,456,789', label: 'Total Invested' },
    { value: '$3,567,787', label: 'Total Withdrawn' },
  ];

  return (
    <section
      className="w-full py-12 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-left md:text-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <h3 className="text-3xl font-bold">
                <span>{stat.value}</span>
              </h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;