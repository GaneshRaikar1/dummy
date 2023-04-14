import React from 'react';
import AboutArea from '../../components/About/AboutArea';
import BgShape from '../../components/common/BgShape';
import BrandArea from '../../components/Home/BrandArea';
import Testimonial from '../../components/About/Testimonial';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'

const About = ({ frontmatter, markdown }) => {
   return (
      <>
         <SEO pageTitle={'About'} />
         <BgShape />
         <AboutArea frontmatter={frontmatter} markdown={markdown} />
         <Testimonial />
      </>
   );
};

export default About;

export async function getStaticProps() {
   const file = fs.readFileSync('./content/about/index.md', 'utf8')
   const matterData = matter(file)
   // const fileContent = matter(fs.readFileSync(`./content/about/${slug}.md`, 'utf8'))
   let frontmatter = matterData.data
   const markdown = matterData.content

   return {
      props: { frontmatter, markdown }
   }
}