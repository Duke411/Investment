import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const faqs = [
    {
      question: 'How do I become a part of this?',
      answer: 'To join TradeHub, simply sign up on our website, complete the verification process, and fund your account to start investing.',
    },
    {
      question: 'How can I fund my account?',
      answer: 'You can fund your account using various methods such as bank transfers, credit/debit cards, or cryptocurrency, depending on availability in your region.',
    },
    {
      question: 'How long does it take for my funds to be credited into my account?',
      answer: 'Funds are typically credited within 1-3 business days, depending on the payment method used.',
    },
    {
      question: 'Are my funds secure?',
      answer: 'Yes, we use advanced encryption and security protocols to ensure your funds and personal data are protected.',
    },
    {
      question: 'How do I withdraw money from my trade account if I need it?',
      answer: 'Log into your account, navigate to the withdrawal section, select your preferred method, and follow the instructions. Withdrawals are processed promptly.',
    },
    {
      question: 'Is there a minimum withdrawal amount?',
      answer: 'Yes, the minimum withdrawal amount varies by method but typically starts at $50.',
    },
    {
      question: 'Who is a trade account manager?',
      answer: 'A trade account manager is a professional assigned to assist you with managing your investments and providing personalized support.',
    },
    {
      question: 'What makes you different from many others?',
      answer: 'TradeHub stands out with its user-friendly platform, competitive returns, and dedicated customer support tailored to your investment needs.',
    },
    {
      question: 'What are the advantages of becoming your client?',
      answer: 'Clients benefit from expert insights, diverse investment options, and a secure, transparent trading environment.',
    },
    {
      question: 'What approach to asset allocation do you use?',
      answer: 'We employ a diversified asset allocation strategy based on your risk tolerance and financial goals, optimized by our expert team.',
    },
    {
      question: 'What if I decide to cancel my relationship with you?',
      answer: 'You can close your account at any time by contacting support. Any remaining funds will be returned to you after settling pending transactions.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-left md:text-center mb-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Here we have provided some relevant information regarding the functionality of TradeHub. If you have any other questions, please get in touch using our contact details.
          </p>
          <div className="w-24 h-1 bg-blue-600 md:mx-auto"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded">
              <button
                className="w-full flex items-center justify-between p-4 text-left text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <span className="ml-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  className="p-4 text-gray-700 text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;