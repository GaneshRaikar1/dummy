import styles from '../../styles/Blog.module.css'
import businessListing from '../../data/businessListing'

export default function Member({ data }) {
	return (
		<>
			<img src='http://www.swakruta.in/img/blog-index.jpg' alt='img' />
			<div className={styles['container']}>
				<h2 className='pb-30'>{data.businessName}</h2>
				<h5 >{data.fullName}</h5>
				<p >{data.businessLocation}</p>
				{/* <h3 >Description:</h3> */}
				<p >{data.businessDescription}</p>
				<p >{data.otherInformation}</p>
				{/* //fb,inst */}
				<h3 >Categories:</h3>
				<div className="tags">
					<p >{data.businessKeywords?.split(',').map((keyword, i) => <a key={i}>{keyword}</a>)}</p>
				</div>
			</div>
		</>
	)
}

export async function getStaticProps({ params: { slug } }) {
	const data = businessListing.filter(item => item.slug === slug)[0]

	return {
		props: { data }
	}
}

export async function getStaticPaths() {

	const paths = businessListing.map(item => { return { params: { slug: item.slug } } })

	return {
		paths,
		fallback: false
	}
}