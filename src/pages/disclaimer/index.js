import React from 'react';
import BgShape from '../../components/common/BgShape';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Blog.module.css'

const Disclaimer = ({ markdown }) => {
    return (
        <>
            <SEO pageTitle={'Disclaimer'} />
            <BgShape />
            <div className={styles['container']}>
                <div className={styles['wrapper']}>
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;

export async function getStaticProps() {
    const file = fs.readFileSync('./content/disclaimer/disclaimer.md', 'utf8')
    const matterData = matter(file)
    const markdown = matterData.content

    return {
        props: { markdown }
    }
}