import Link from 'next/link'
import React from 'react'

const BlogList = ({ blogs }) => {
    return (
        <div className="row">
            {
                blogs.slice(0, 6).map((blog, index) => {
                    return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="trending__item trending__item-2 d-sm-flex align-items-center transition-3 mb-30 wow fadeInUp" data-wow-delay=".3s">
                            <div className="trending__thumb mr-25">
                                <div className="trending__thumb-inner fix">
                                    <Link href={`/blogs/${blog.slug}`}>
                                        <a >
                                            <img src={blog?.img} alt="" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="trending__content">
                                <div className="trending__tag trending__tag-2">
                                    <a>{blog?.date}</a>
                                </div>
                                <h3 className="trending__title trending__title-2">
                                    {/* <Link href="/blog-details"> <a >{blog?.title}</a></Link> */}
                                    <Link href={`/blogs/${blog.slug}`}>{blog?.title}</Link>
                                </h3>
                                <div className="trending__author">
                                    <p>by Themepure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default BlogList