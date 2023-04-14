import React from 'react';
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Blog.module.css'

const AboutArea = ({ frontmatter, markdown }) => {
   return (
      <>
         <img src={frontmatter.img} alt="img" />
         <section className="about__area">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                     <div className="about__wrapper">
                        {/* <h3 className="about__title">We are enabling <br /> Everyone to create for the website.</h3> */}
                        {/* <div className="about__thumb w-img wow fadeInUp" data-wow-delay=".3s">
                           <img src={frontmatter.img} alt="img" />
                        </div> */}
                        <div className="about__count pt-50 wow fadeInUp" data-wow-delay=".5s">
                           <div className="row">
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                 <div className="about__count-item text-center launche mb-30">
                                    <p>LAUNCHED IN</p>
                                    <h4><span className="counter">2009</span></h4>
                                 </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                 <div className="about__count-item text-center community mb-30">
                                    <p>COMMUNITY OF</p>
                                    <h4><span className="counter">13,000</span>+</h4>
                                 </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                 <div className="about__count-item text-center mission mb-30">
                                    <p>MISSION PROGRESS</p>
                                    <h4><span className="counter">4.9</span>%</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="about__content">
                           <div className={styles['container']} style={{ paddingTop: 0, paddingBottom: 0 }}>
                              <div className={styles['wrapper']}>
                                 <ReactMarkdown>
                                    {markdown}
                                 </ReactMarkdown>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutArea;