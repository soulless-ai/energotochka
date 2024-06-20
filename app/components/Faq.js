import React, { useState } from 'react';
import faqData from '../../public/faq.json';

export default function Faq() {
    const [expandedFaqId, setExpandedFaqId] = useState(null);

    const toggleFaqDescription = (id) => {
        setExpandedFaqId(id === expandedFaqId ? null : id);
    };

    return (
        <section>
            <h1 className="section-title">F.A.Q</h1>
            <div className="faq-wrapper">
                <div className="faq-items">
                    {faqData.faq.map(faq => (
                        <div key={faq.id} className="faq-item section-content">
                            <div>
                                <h5>{faq.name}</h5>
                                <button className={faq.id === expandedFaqId ? 'active' : ''}
                                    onClick={() => toggleFaqDescription(faq.id)}>
                                        <svg width="17.5" height="7.5" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.75 1.25L10 8.75L1.25 1.25" stroke="#008066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </button>
                            </div>
                            <p className={`faq-description ${faq.id === expandedFaqId ? '' : 'hide'}`} dangerouslySetInnerHTML={{__html: faq.description}}>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}