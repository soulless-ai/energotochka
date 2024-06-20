import React from 'react';
import Image from 'next/image';

export default function AboutProduct({ product, handleOpenMainForm, handleCloseAboutProduct }) {
    return (
        <>
            <div className="about-product-modal">
                <div className="about-product-modal-content">
                    <div><Image src={product.image} alt={`${product.name} image`} width={200} height={200}/></div>
                    <div className="about-product-modal-info">
                        <h3>{product.about}</h3>
                        <h2>{product.name}</h2>
                        <p>{product.text}</p>
                        <button id="about-product-modal-submit"  onClick={handleOpenMainForm}>Проконсультироваться</button>
                        <ul>
                            <li>
                                <h6>мощность зарядки</h6>
                                <span>{product.description}</span>
                            </li>
                            <li>
                                <h6>степень защиты</h6>
                                <span>{product.degree_protection}</span>
                            </li>
                            <li>
                                <h6>фазовость зарядки </h6>
                                <span>{product.charging_phase}</span>
                            </li>
                        </ul>
                    </div>
                    <button className="close-button" onClick={handleCloseAboutProduct}><Image src="/svg/exit.svg" alt="exit" width={18} height={18}/></button>
                </div>
            </div>
        </>
    );
}