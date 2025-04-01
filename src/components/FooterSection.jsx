import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FooterSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <div>
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  Finsurance
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  User Agreement & General Terms
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  Tradehub investment Whitepaper
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  Certificate of Incorporation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Wallet Address for Investment</h2>
            <ul className="space-y-2 text-sm">
              <li>BITCOIN WALLET ADDRESS: 182P21tPN9KnjnsUZ4UGcWk76C36fM93c1</li>
              <li>USDT WALLET ADDRESS Tron Network(TRC20): TN2GsVugzcxsTA8cPRbSrfZqzYZ6zMQM7j</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="flex items-center hover:text-blue-400 transition">
                  <i className="fas fa-envelope mr-2"></i>
                  Email: - Tradehubinvestment@gmail.com
                </a>
              </li>
              <li>
                <a href="https://t.me/TradeHubInvesment" className="flex items-center hover:text-blue-400 transition">
                  <i className="fas fa-envelope mr-2"></i>
                  Telegram: - @TradeHubInvesment
                </a>
              </li>
            </ul>
            <h2 className="text-xl font-bold mt-6 mb-4">Address</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>TradeHub USA: 4237 S Marion Pl, Chandler, AZ 85349-4792, United States</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>TradeHub Canada: 215-55A Westwinds Cres NE, Calgary, AB, T3J 5H2, Canada</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>TradeHub Japan: Kobe, Japan</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-left md:text-center">
          <h2 className="text-sm">Copyright © 2020 All rights reserved</h2>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;