import React, { useState } from 'react';

const SingleAccording = ({ number, condition = false, showClass, question, answer }) => {
    const [b, setb] = useState(false)
    return (
        <>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id={`heading${number}`}>
                    <button onClick={() => setb(pb => !pb)} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${number}`} aria-expanded={b} aria-controls={`collapse${number}`}>
                        {question}
                    </button>
                </h2>
                <div id={`collapse${number}`} className={showClass} aria-labelledby={`heading${number}`} data-bs-parent="#sale-accordion">
                    <div className="accordion-body">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleAccording;