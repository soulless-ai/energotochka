import React from 'react';
import Image from 'next/image';
import benefitsData from '../../public/benefits.json';

export default function Benefits() {
    return (
        <section>
            <h1 className="section-title">преимущества наших клиентов</h1>
            <div className="benefit-wrapper">
                <div className="benefit-items">
                    {benefitsData.benefits.map(benefit => (
                        <div key={benefit.id} className="benefit-item section-content">
                            <div className="benefit-item-header">
                                <div className="benefit-item-cpu"><Image src="/svg/cpu.svg" alt="Benefits cpu icon" width={25} height={25} /></div>
                                <div className="flex flex-col justify-between h-full">
                                    <h6>{benefit.name}</h6>
                                    <h6 className="benefit-star-label flex gap-2"><Image src="/svg/star.svg" alt="Benefits star icom" width={14} height={14} /> {benefit.stars}</h6>
                                </div>
                            </div>
                            <p>
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}