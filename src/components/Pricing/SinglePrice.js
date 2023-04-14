import Link from 'next/link';
import React from 'react';

const SinglePrice = ({ title, price, features, activeClass = '' }) => {
    return (
        <>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`pricing__item ${activeClass && activeClass} text-center transition-3 mb-30`}>
                    <div className="pricing__header mb-25">
                        <h3>{title}</h3>
                    </div>
                    <div className="pricing__tag d-flex align-items-start justify-content-center mb-30">
                        <span>Rs</span>
                        <h4>{price}</h4>
                    </div>
                    <div className="pricing__buy mb-20">
                        <Link href="/pricing">
                            <a className="m-btn m-btn-border m-btn-border-5 w-100"> <span></span> Buy Now</a>
                        </Link>
                    </div>
                    <div className="pricing__features text-start">
                        <ul>
                            {features?.map((feature, i) => <li key={i}>{feature}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePrice;