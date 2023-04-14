import fs from 'fs'
import matter from 'gray-matter'
import React from 'react';
// import BlogArea from '../../components/Blog/BlogArea';
import BlogBreadCrumb from '../../components/Blog/BlogBreadCrumb';
import BlogList from '../../components/Blogs/BlogList';
import BgShape from '../../components/common/BgShape';
import SEO from '../../components/seo';

const index = ({ blogs }) => {
   return (
      <><div className="container pb-100">
         <SEO pageTitle={'Blog'} />
         <BgShape />
         <BlogBreadCrumb />
         {/* <BlogArea blogs={blogs} /> */}
         <BlogList blogs={blogs} />
      </div>
      </>
   );
};

export default index;

export async function getStaticProps() {
   const filesInBlogs = fs.readdirSync('./content/blog')
   const blogs = filesInBlogs.map(filename => {
      const file = fs.readFileSync(`./content/blog/${filename}`, 'utf8')
      const matterData = matter(file)

      return {
         ...matterData.data,
         slug: filename.slice(0, filename.indexOf('.'))
      }
   })

   return {
      props:
      {
         blogs
      }
   }
}