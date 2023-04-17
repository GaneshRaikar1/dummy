import fs from 'fs'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import SEO from '../../components/seo'
// import BlogLayout from '../../components/Blog/BlogLayout'
import styles from '../../styles/Blog.module.css'

export default function Events({ frontmatter, markdown }) {
	return (
		<div className={styles['container']}>
			<Link href="/events">
				<a className='m-btn m-btn-2'>Back</a>
			</Link>
			<SEO pageTitle={frontmatter.title} />
			<section className="page__title-area ">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="page__title-content mb-50">
								<h2 className="page__title">{frontmatter.title}</h2>
								<div className="postbox__author-2 mt-20">
									<ul className="d-flex align-items-center">
										<li>
											<div className="postbox__author-thumb-2">
												<img src={frontmatter.img} alt="img" />
											</div>
										</li>
										<li>
											<h6>{frontmatter?.date}</h6>
											<span>Published</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="postbox__wrapper  align-items-center">
				<img src={frontmatter.img} alt="img" />
				<div className={styles['wrapper']}>
					<ReactMarkdown>
						{markdown}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps({ params: { slug } }) {
	const fileContent = matter(fs.readFileSync(`./content/events/${slug}.md`, 'utf8'))
	let frontmatter = fileContent.data
	const markdown = fileContent.content

	return {
		props: { frontmatter, markdown }
	}
}

export async function getStaticPaths() {
	const filesInProjects = fs.readdirSync('./content/events')
	const paths = filesInProjects.map(file => {
		const filename = file.slice(0, file.indexOf('.'))
		return { params: { slug: filename } }
	})

	return {
		paths,
		fallback: false
	}
}