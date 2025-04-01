import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetStartedSection = () => {
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
          delay: i * 0.2,
          duration: 0.6,
          ease: 'easeOut',
        },
      }));
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your free account in just a few minutes.',
    },
    {
      number: '02',
      title: 'Fund Your Account',
      description: 'Deposit funds securely to start trading.',
    },
    {
      number: '03',
      title: 'Start Trading And Withdraw',
      description: 'Begin your journey and make profitable trades, then withdraw.',
    },
    {
      number: '04',
      title: 'Quick Loan',
      description: 'With just a 15% security deposit.',
    },
    {
      number: '05',
      title: 'Referral Bonus',
      description: 'Refer and earn a 10% bonus.',
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-left md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          How to Get Started
        </h2>
        <p className="text-lg text-gray-600 mb-12 relative inline-block">
          In 3 Simple Steps
          <span className="block w-16 md:w-full h-1 bg-blue-600 mt-1"></span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={ref}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg text-left md:text-center"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <span className="text-5xl font-bold text-blue-600">
                {step.number}
              </span>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/signup"
          data-discover="true"
          custom={steps.length}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition">
            Register Now
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default GetStartedSection;