import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Herosection'
import AboutSection from '../components/AboutSection'
import GetStartedSection from '../components/GetStartedSection'
import InvestmentPlansSection from '../components/InvestmentPlansSection'
import StatsSection from '../components/StatsSection'
import SafetySection from '../components/SafeySection'
import FeaturesSection from '../FeaturesSection'
import ReviewsSection from '../components/ReviewsSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/FooterSection'

const HomePage = () => {
  return (
    <React.Fragment >
        <Navbar />
        <HeroSection/>
        <AboutSection/>
        <GetStartedSection/>
        <InvestmentPlansSection/>
        <StatsSection/>
        <SafetySection/>
        <FeaturesSection/>
        <ReviewsSection/>
        <FAQSection/>
        <FooterSection/>
    </React.Fragment>
  )
}

export default HomePage