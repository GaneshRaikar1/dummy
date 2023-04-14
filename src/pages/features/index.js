import React from 'react';
import BgShape from '../../components/common/BgShape';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Blog.module.css'
import FeaturesArea from '../../components/features/FeaturesArea';

const Features = ({ features }) => {
   return (
      <>
         <SEO pageTitle={'About'} />
         <BgShape />
         <div className={styles['container']}>
            <div className={styles['wrapper']}>
               {features.map((feature, i) =>
                  <div key={i}>
                     {i % 2 === 0 ?
                        <div className="row pb-70">
                           <h2 className='pl-50'>{feature.frontmatter.title}</h2>
                           <div className="col-xxl-5 col-xl-5 ">
                              {/* <h2 className='pl-30'>{feature.frontmatter.title}</h2> */}
                              <img src={feature.frontmatter.img} alt="img" />
                           </div>
                           <div className="col-xxl-7 col-xl-7">
                              <ReactMarkdown>{feature.markdown}</ReactMarkdown>
                           </div>
                        </div>
                        :
                        <div className="row pb-70">
                           <h2 className='pl-50'>{feature.frontmatter.title}</h2>
                           <div className="col-xxl-7 col-xl-7">
                              <ReactMarkdown>{feature.markdown}</ReactMarkdown>
                           </div>
                           <div className="col-xxl-5 col-xl-5 ">
                              <img src={feature.frontmatter.img} alt="img" />
                           </div>
                        </div>
                     }
                  </div>
               )}
            </div>
            <FeaturesArea />
         </div>
      </>
   );
};

export default Features;

export async function getStaticProps() {
   const filesInFeatures = fs.readdirSync('./content/features')
   const features = filesInFeatures.map(filename => {
      const file = fs.readFileSync(`./content/features/${filename}`, 'utf8')
      const matterData = matter(file)
      let frontmatter = matterData.data
      const markdown = matterData.content
      return {
         frontmatter, markdown
      }
   })

   return {
      props:
      {
         features
      }
   }
}