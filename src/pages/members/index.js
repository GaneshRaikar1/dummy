import React, { useState } from 'react';
import BgShape from '../../components/common/BgShape';
import SEO from '../../components/seo';
import businessList from '../../data/businessListing';
import Link from 'next/link';

const Members = () => {
   const [query, setQuery] = useState("")
   const [searchParam] = useState(["fullName", "businessName"]);

   function search(items) {
      return items?.filter(function (item) {
         return searchParam.some((newItem) => {
            return (item[newItem]?.toString().toLowerCase().indexOf(query.toLowerCase()) > -1);
         });
      });
   }

   return (
      <>
         <SEO pageTitle={'Business Listings'} />
         <BgShape />
         <img src='http://www.swakruta.in/img/blog-index.jpg' alt='img' />
         <div className="container">
            {/* <input className='ml-30 mt-50' placeholder='Search' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => setQuery('')}>clear</button> */}

            <div className="sidebar__widget " style={{ width: 300 }}>
               <div className="sidebar__widget-content">
                  <div className="sidebar__search-wrapper ml-30 mt-50">
                     <input type="text" className='' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                     <button type="submit" onClick={() => setQuery('')}><i className="fa fa-times"></i></button>
                  </div>
               </div>
            </div>

            <div className='row pt-50'>
               {search(businessList)?.map((item, i) =>
                  <Link href={`/members/${item.slug}`} key={i}>
                     <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="blog__sidebar-wrapper  ml-30">
                           <div className="blog__sidebar mb-30">
                              <div className="sidebar__widget mb-30">
                                 <div className="sidebar__widget-title">
                                    <h2>{item.businessName}</h2>
                                    <h4>{item.fullName}</h4>
                                 </div>
                                 <div className="sidebar__widget-content">
                                    <div className="rc__post-wrapper">
                                    </div>
                                 </div>
                              </div>
                              <div className="sidebar__widget">
                                 {/* <div className="sidebar__widget-title">
                              <h3>Popular Tags</h3>
                           </div> */}
                                 <div className="sidebar__widget-content">
                                    <div className="tags">
                                       {item.businessKeywords?.split(',').slice(0, 3).map((keyword, i) => <a key={i}>{keyword}</a>)}
                                       {item.businessKeywords?.split(',').length > 3 && <a>...</a>}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>)}
            </div>
         </div>
      </>
   );
};

export default Members;
