import Link from 'next/link'
import React from 'react'

const Greetings = () => {
    return (
        // <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
        <div className="trending__item d-sm-flex white-bg mt-50 mb-30 wow fadeInUp container" data-wow-delay=".3s">
            {/* <div className="trending__thumb mr-25"> */}
            <div className="trending__thumb-inner fix col-xl-6">
                <img src='/assets/img/blog/blog-1.jpg' alt="" />
            </div>
            <div className="trending__content ml-25 col-xl-6">
                <h2 className="pb-5">
                    Swakruta is an Non-Governmental Organization
                </h2>
                <div>
                    <p style={{ fontSize: 16 }}>We are based in Bangalore, India, working towards empowering women through promoting and supporting Women entrepreneurship.</p>
                    <p style={{ fontSize: 16 }}>Swakruta assists aspiring women entrepreneurs to launch their business successfully</p>
                    <p style={{ fontSize: 16 }}>More than a social networking platform for women entrepreneurs, it is a place where women can learn
                        & share about business to achieve personal growth in their life.</p>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Greetings