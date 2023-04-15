import Link from 'next/link';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useSticky from '../../hooks/useSticky';
import SidebarMenu from '../Sidebar/SidebarMenu';

const Header = () => {
   // handle sidebar show
   const [show, setShow] = useState(false);
   // handle close
   const handleClose = () => setShow(false);
   // handle sidebar show
   const handleShow = () => setShow(true);
   // sticky nav
   const { sticky } = useSticky();
   // user
   const { user, logout } = useAuth();
   return (
      <>
         <header>
            <div className={sticky ? "sticky header__area header__shadow-2 white-bg" : "header__area header__shadow-2 white-bg"} id="header-sticky">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="logo">
                           <Link href="/">
                              <a><img src="http://www.swakruta.in/static/logo-ed1e92c793a6b2c6ecf8961551f38f5d.svg" alt="logo" /></a>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-10 col-xl-10 col-lg-10 d-none d-lg-block">
                        <div className="main-menu d-flex justify-content-end">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link href="/"><a>Home</a></Link></li>
                                 <li><Link href="/about">About</Link></li>
                                 <li><Link href="/swakruta-sewa"><a>Swakruta Sewa</a></Link></li>
                                 <li><Link href="/events"><a>Events</a></Link></li>
                                 <li><Link href="/ebazaar"><a >E-Bazaar</a></Link></li>
                                 <li ><Link href="/blog" ><a >Success Stories</a></Link></li>
                                 <li ><Link href="/members" ><a >Business Listing</a></Link></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-6">
                        <div className="header__action d-flex align-items-center justify-content-end">
                           {/* <div className="header__login d-none d-sm-block">
                              {user?.email ? < a onClick={logout} style={{ cursor: 'pointer' }} className='d-flex align-items-center'> <i className="fal fa-sign-out-alt"></i> Log Out</a> :
                                 <Link href="/login">
                                    < a> <i className="far fa-unlock"></i> Log In</a>
                                 </Link>}
                           </div>
                           <div className="header__cart d-none d-sm-block">
                              <Link href="/cart">
                                 <a className="cart-toggle-btn">
                                    <i className="far fa-shopping-cart"></i>
                                    <span>{quantity}</span>
                                 </a>
                              </Link>
                           </div> */}
                           <div className="sidebar__menu d-lg-none" onClick={handleShow}>
                              <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <SidebarMenu show={show} handleClose={handleClose} />
      </>
   );
};

export default Header;