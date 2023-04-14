import styles from '../../../styles/Blog.module.css'
import stalls from '../../../data/ebaazar'
import Stall from '../../../components/stalls/Stall'

export default function EBazaar({ data }) {
	return (
		<>
			<img src='http://www.swakruta.in/img/banner7.jpg' alt='img' />
			<div className={styles['container']}>
				<h2 className='pb-50'>{data[0].name}</h2>
				<div className='row'>
					{data[0].items.map((item, i) => <Stall key={i} item={item} />)}
				</div>
			</div>
		</>
	)
}

export async function getStaticProps({ params: { slug } }) {
	const data = stalls.filter(item => item.slug === slug)
	return {
		props: { data }
	}
}

export async function getStaticPaths() {
	const paths = stalls.map(item => { return { params: { slug: item.slug } } })
	return {
		paths,
		fallback: false
	}
}