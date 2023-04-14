import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactArea = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_822kwpr', 'template_ni9ziqo', form.current, 'eK1Xbpahd9ZlBxsRY')
         .then((result) => {
            console.log(result.text);
            console.log('submitted');
         }, (error) => {
            console.log(error.text);
         });
      e.target.reset()
   };
   return (
      <>
         <section className="contact__area pt-105 pb-145">
            <div className="contact__shape">
               <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
               <img className="circle" src="assets/img/icon/sign/circle.png" alt="" />
               <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="" />
               <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
               <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mb-55">
                        <h2 className="page__title-2">Leave Us a Message.</h2>
                        <p> good bevvy butty its all gone to pot that quaint so I said cheers.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-8 col-xl-8">
                     <div className="contact__wrapper  white-bg">
                        <div className="contact__form">
                           <form ref={form} onSubmit={sendEmail}>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Full Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Full name" name="name" />
                                          <i className="fa fa-user"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Email</h5>
                                       <div className="contact__input">
                                          <input required type="email" placeholder="e-mail address" name="email" />
                                          <i className="fa fa-envelope"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Subject</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Subject" name="subject" />
                                          <i className="fa fa-smile"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Phone Number</h5>
                                       <div className="contact__input">
                                          <input required type="number" placeholder="Number" name="number" />
                                          <i className="fa fa-mobile"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Message</h5>
                                       <div className="contact__input textarea">
                                          <textarea required placeholder="" name="message"></textarea>
                                          <i className="fa fa-comment"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;