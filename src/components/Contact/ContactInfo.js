import React from 'react';
import { contactInfoData } from '../../data/contacts';

const ContactInfo = () => {

   return (
      <>
         <section className="contact__info pt-20 pb-120">
            <div className="contact__info-shape">
               <img src="assets/img/icon/contact/contact-bg.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper text-center mb-55">
                        <h2 className="page__title-2">We would love to <b /> hear from you</h2>
                        <p>Stay in touch with us</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     contactInfoData.map(info => {
                        return <div key={info.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="contact__item text-center white-bg mb-30 transition-3">
                              <div className="contact__icon mb-30 d-flex justify-content-center align-items-center">
                                 <img src={info.icon_img} alt="" />
                              </div>
                              <div className="contact__content">
                                 <h4 className="contact__content-title">{info.title}</h4>
                                 <h4 className="contact__content-title">{info.subtitle}</h4>
                              </div>
                           </div>
                        </div>
                     })
                  }


               </div>
            </div>
         </section>
      </>
   );
};

export default ContactInfo;