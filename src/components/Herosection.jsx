import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1535320485483-125c6274ed6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setIsAnimating(false);
      }, 500); // Match transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.className =
      "absolute rounded-full bg-white/30 transform scale-0 animate-ripple";

    const existingRipple = button.querySelector(".animate-ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <section className="relative pt-10 pb-5  bg-gray-900 text-white text-center">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          } ${isAnimating ? "scale-105" : "scale-100"}`}
          style={{
            backgroundImage: `url('${image}')`,
            filter: "brightness(0.4)",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-left md:text-center space-y-6">
          <h1 className="text-4xl sm:text-2xl md:text-6xl font-bold leading-tight animate-fade-in-down">
            At The Forefront of Trading And Investment
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-in-up">
            We are a licensed firm specializing in asset management, wealth
            growth, and market strategies. With expertise in agriculture, real
            estate, and stock market trading, we leverage advanced AI-driven
            tools to optimize investments and maximize returns{" "}
          </p>
          <Link to="/login">
            <button
              className="group relative inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-white bg-gray-900 rounded-md transition-all duration-300 ease-out hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-hidden animate-fade-in"
              onClick={handleButtonClick}
            >
              <span className="relative z-10">Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform transition-transform duration-200 ease-out group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Tailwind Animation Classes */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
          animation-delay: 0.5s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.7s;
        }
        .animate-ripple {
          animation: ripple 0.6s linear forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
