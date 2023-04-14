import React from 'react';
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Blog.module.css'

const Info = ({ frontmatter, markdown }) => {
   return (
      <>
         <img src={frontmatter.img} alt="img" />
         <section className="about__area ">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                     <div className="about__wrapper">
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

export default Info;