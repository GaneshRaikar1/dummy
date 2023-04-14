import Link from 'next/link';
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';


const SidebarMenu = ({ show, handleClose }) => {
   return (
      <>
         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <Link href="/home">
                        <a>
                           <img src="assets/img/logo/logo-white.png" alt="logo" />
                        </a>
                     </Link>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>

                  <div className="">
                     <div className="">

                        <div className="sidebar__content">

                           <div className="mobile-menu">
                              <nav id="mobile-menu">
                                 <ul>
                                    {/* <Collapsible trigger={<Link href="/home">Home</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                    </Collapsible>

                                    <Collapsible trigger={<Link href="/features">Features</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                    </Collapsible> */}

                                    <div className='single_link iconAdd '>
                                       <li><Link href="/home"><a>Home</a></Link></li>
                                    </div>
                                    <div className='single_link iconAdd '>
                                       <li><Link href="/features"><a>Features</a></Link></li>
                                    </div>
                                    <div className='single_link iconAdd '>
                                       <li><Link href="/trading-bots"><a>Trading Bots</a></Link></li>
                                    </div>

                                    <div className='single_link iconAdd'>
                                       <li><Link href="/services"><a>Services</a></Link></li>
                                    </div>

                                    <div className='single_link iconAdd'>
                                       <li><Link href="/pricing"><a >Pricing</a></Link></li>
                                    </div>

                                    <div className='single_link iconAdd'>
                                       <li><Link href="/blog"><a>Blogs</a></Link></li>
                                    </div>

                                    {/* <Collapsible trigger={<Link href="/blogs">Blogs</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                    </Collapsible> */}


                                    <Collapsible trigger={<Link href="/product">More</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/contact"><a >Contact</a></Link></li>
                                          <li><Link href="/about"><a >About Us</a></Link></li>
                                          <li><Link href="/legal"><a >Legal</a></Link></li>
                                       </ul>
                                    </Collapsible>


                                 </ul>
                              </nav>
                           </div>

                           {/* <div className="sidebar__action d-flex align-items-center">
                              <div className="sidebar__login mt-15">
                                 {user?.email ? < a onClick={logout} style={{ cursor: 'pointer' }} className='d-flex align-items-center'> <i className="fal fa-sign-out-alt"></i> Log Out</a> :
                                    <Link href="/login">
                                       < a> <i className="far fa-unlock"></i> Log In</a>
                                    </Link>}
                              </div>
                              <div className="sidebar__cart mt-20">
                                 <Link href="/cart">
                                    <a className="cart-toggle-btn">
                                       <i className="far fa-shopping-cart"></i>
                                       <span>{totalCartQuantity}</span>
                                    </a>
                                 </Link>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default SidebarMenu;