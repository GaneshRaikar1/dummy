import React from 'react';
import HeroArea from '../../components/Home/HeroArea';
import Testimonial from '../../components/Home/Testimonial';
import SEO from '../../components/seo';
import Greetings from '../../components/homeTwo/Greetings';

const HomeTwo = () => {
   return (
      <>
         <SEO pageTitle={'Home'} />
         <HeroArea />
         <Greetings />
         <Testimonial />
      </>
   );
};

export default HomeTwo;