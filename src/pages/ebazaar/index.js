import React from 'react';
import BgShape from '../../components/common/BgShape';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/Blog.module.css'

const Ebazaar = ({ frontmatter, markdown }) => {
   return (
      <>
         <SEO pageTitle={'E-Bazaar'} />
         <BgShape />
         <img src={frontmatter.img} alt='img' />
         <section className="about__area">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                     <div className="about__wrapper">
                        <div className="about__content">
                           <div className={styles['container']}>
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

export default Ebazaar;

export async function getStaticProps() {
   const file = fs.readFileSync('./content/ebazaar/index.md', 'utf8')
   const matterData = matter(file)
   let frontmatter = matterData.data
   const markdown = matterData.content

   return {
      props: { frontmatter, markdown }
   }
}
