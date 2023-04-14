import Link from 'next/link';
import React from 'react';

const Footer = () => {
   return (

      <footer>
         <div className="footer__area footer-bg">
            <div className="footer__top pt-40">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                           <div className="footer__widget-head mb-35">
                              <h4 className="footer__widget-title">Follow our Socials</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__social mb-30">
                                 <ul>
                                    <li><a className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a className="tw"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Product</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><Link href="/swakruta-sewa">Swakruta Sewa</Link></li>
                                    <li><Link href="/ebazaar">E-Bazaar</Link></li>
                                    <li><Link href="/members">Business Listing</Link></li>
                                    <li><Link href="/register-form">Business Registration</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".9s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">About Us</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/blog">Success Stories</Link></li>
                                    <li><Link href="/events">Events</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay="1.2s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Address</h4>
                           </div>
                           <div className="footer__link">
                              <p style={{ color: '#99989e' }}>We are a Digital UX / UI Design Studio. We work alongside our clients to innovate offerings,
                                 tap on business potential, and benefit on enhanced productivity.</p>
                              <p style={{ color: '#99989e' }}>+ 91 804-121-7152</p>
                              <p style={{ color: '#99989e' }}>info@claritiz.com</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <div className="container">
                  <div className="footer__bottom-inner">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__copyright wow fadeInUp" data-wow-delay=".5s">
                              <p>Copyright © 2023 All Rights Reserved, Design by <Link href="/">Swakruta</Link></p>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__bottom-link wow fadeInUp text-md-end" data-wow-delay=".8s">
                              <ul>
                                 <li><Link href="/legal">Legal</Link></li>
                                 <li><Link href="/disclaimer">Disclaimer </Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

   );
};

export default Footer;