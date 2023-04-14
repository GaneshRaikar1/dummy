import React from 'react';
import AboutArea from '../../components/About/AboutArea';
import BgShape from '../../components/common/BgShape';
import BrandArea from '../../components/Home/BrandArea';
import Testimonial from '../../components/About/Testimonial';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'
import BlogList from '../../components/Blogs/BlogList';
import EventList from '../../components/events/EventList';
import Iframe from 'react-iframe'

const Events = ({ events }) => {
   return (
      <>
         <SEO pageTitle={'Events'} />
         <BgShape />
         {/* <img src='http://www.swakruta.in/img/blog-index.jpg' alt='img' /> */}
         <section className="subscribe__area p-relative pt-100 pb-180" style={{ background: `url(http://www.swakruta.in/img/blog-index.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                        <h1 className="subscribe__title ml-200 " style={{ fontSize: 70, color: '#424242' }}>Events</h1>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className='container pb-80 pt-80'>
            <EventList events={events} />
         </div>
      </>
   );
};

export default Events;

export async function getStaticProps() {
   const filesInEvents = fs.readdirSync('./content/events')
   const events = filesInEvents.map(filename => {
      const file = fs.readFileSync(`./content/events/${filename}`, 'utf8')
      const matterData = matter(file)

      return {
         ...matterData.data,
         slug: filename.slice(0, filename.indexOf('.'))
      }
   })

   return {
      props:
      {
         events
      }
   }
}