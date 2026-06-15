import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedDishes from '../components/home/FeaturedDishes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import StatsSection from '../components/home/StatsSection';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  useEffect(() => {
    document.title = 'Bella Cucina — Fine Dining Restaurant';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
