import React from 'react';
import BgShape from '../../components/common/BgShape';
import BrandArea from '../../components/Home/BrandArea';
import Testimonial from '../../components/About/Testimonial';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'
import Info from '../../components/swakruta-sewa/Info';

const SwakrutaSewa = ({ frontmatter, markdown }) => {
   return (
      <>
         <SEO pageTitle={'About'} />
         <BgShape />
         <Info frontmatter={frontmatter} markdown={markdown} />
         <Testimonial />
      </>
   );
};

export default SwakrutaSewa;

export async function getStaticProps() {
   const file = fs.readFileSync('./content/sewa/index.md', 'utf8')
   const matterData = matter(file)
   let frontmatter = matterData.data
   const markdown = matterData.content

   return {
      props: { frontmatter, markdown }
   }
}