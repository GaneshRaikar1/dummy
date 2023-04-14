import React from 'react';
import { features } from '../../data/featuresHomePage';
import SingleBlog from './SingleBlog';

const FeaturesArea = () => {
   return (
      <>
         <section className="blog__area pt-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-11 offset-xxl-1">
                     <div className="section__title-wrapper mb-65">
                        <h2 className="section__title">Features</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-11 offset-xxl-1 col-xl-11">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                           {features.map((feature, i) => i % 2 === 0 && <SingleBlog key={i} title={feature} />)}
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                           {features.map((feature, i) => i % 2 === 1 && <SingleBlog key={i} title={feature} />)}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default FeaturesArea;