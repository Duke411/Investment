import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InvestmentPlansSection = () => {
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
          delay: i * 0.2, // Staggered animation for each card
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

  const plans = [
    {
      title: 'Starter Growth',
      range: '$100 - $999',
      details: [
        'Minimum Deposit: $100',
        'Maximum Deposit: $999',
        'Duration: 8 Days',
        'Percentage Profits: 10%',
      ],
    },
    {
      title: 'Advanced Wealth Builder',
      range: '$1,000 - $9,999',
      details: [
        'Minimum Deposit: $1,000',
        'Maximum Deposit: $9,999',
        'Duration: 16 Days',
        'Percentage Profits: 12%',
      ],
    },
    {
      title: 'Elite Wealth',
      range: '$10,000 - $49,999',
      details: [
        'Minimum Deposit: $10,000',
        'Maximum Deposit: $49,999',
        'Duration: 26 Days',
        'Percentage Profits: 15%',
      ],
    },
    {
      title: 'Platinum Pro',
      range: '$50,000 and Above',
      details: [
        'Minimum Deposit: $50,000',
        'Maximum Deposit: -',
        'Duration: 26 Days',
        'Percentage Profits: 20%',
      ],
    },
  ];

  return (
    <section id="plan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Investment Plans
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Choose how you want to invest with us.
          </p>
          <div className="w-24 h-1 bg-blue-600 md:mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={ref}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md overflow-hidden bg-white"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <div className="bg-blue-600 p-4">
                <h3 className="text-base md:text-2xl font-semibold text-white">
                  {plan.title}
                </h3>
              </div>
              <div className="p-6 text-left md:text-center">
                <div className="mb-6">
                  <p className="text-xl md:text-3xl font-bold text-gray-800">
                    {plan.range}
                  </p>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.details.map((detail, idx) => (
                    <li key={idx} className="text-sm md:text-base text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div>
                  <a
                    href="/signup"
                    data-discover="true"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlansSection;