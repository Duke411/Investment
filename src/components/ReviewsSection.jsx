import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

const ReviewsSection = () => {
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

  const reviews = [
    {
      text: 'Great service, straightforward, and very helpful. Would recommend 100% 👍🏻',
      image: 'https://maventradingfrx.com/wp-content/uploads/2022/04/Courtney_Barnes.250x300.jpg',
      name: 'Ciara Leonard',
    },
    {
      text: 'I would like to thank you Trade Hub for helping me with this investment. The customer service team was helpful throughout the entire process! You’ve made a positive impact on my life and I’m so grateful.',
      image: 'https://maventradingfrx.com/wp-content/uploads/2021/04/pic4.jpg',
      name: 'Tiffany Lockhamy',
    },
    {
      text: 'Very easy process and very quick! I can’t fault it—been great so far!',
      image: 'https://maventradingfrx.com/wp-content/uploads/2021/04/pic1.jpg',
      name: 'Terri Millers',
    },
    {
      text: 'Overall fantastic! Great communication throughout. Easy to invest in and super speedy process. Highly recommended!',
      image: 'https://maventradingfrx.com/wp-content/uploads/2021/04/Robin.jpg',
      name: 'Palindac Joy',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-left md:text-center">
        <motion.div
          className="mb-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Investors Review
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Here’s what some of our investors have to say about us.
          </p>
          <div className="w-24 h-1 bg-blue-600 md:mx-auto"></div>
        </motion.div>

        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-sm md:text-base text-gray-700 mb-4 text-left md:text-center">
                  {review.text}
                </p>
                <div className="flex items-center justify-start md:justify-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={review.image}
                    alt={review.name}
                  />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-800">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSection;