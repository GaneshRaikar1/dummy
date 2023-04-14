import Link from 'next/link';
import React from 'react';

const SingleBlog = ({ title }) => {
    return (
        <>
            <div className="blog__item mb-35">
                <p className="blog__text">
                    <a>{title}</a>
                </p>
            </div>
        </>
    );
};

export default SingleBlog;