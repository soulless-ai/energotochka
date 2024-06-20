import React, { useState } from 'react';
import Image from 'next/image';
import catalogData from '../../public/catalog.json';

export default function Catalog({ product, handleOpenAboutProduct }) {
    const [filterClass, setFilterClass] = useState('slow-ac');
    const [filterStationType, setFilterStationType] = useState('');

    const handleFilterByClass = (className) => {
        setFilterClass(className);
        console.log(className)
        if (filterStationType) setFilterStationType('');
    };

    const handleFilterByStationType = (type) => {
        setFilterStationType(type);
        if (filterClass) setFilterClass('');
    };

    const filteredProducts = catalogData.products.filter(product => {
        if (filterStationType && !filterClass) {
            return product.class.includes(filterStationType);
        } else if (!filterStationType && filterClass) {
            const classes = product.class.split(' ');
            return classes.includes(filterClass);
        } else {
            return true;
        }
    });

    return (
        <section>
            <h1 className="section-title">Каталог со станциями</h1>
            <ul className="catalog-filters">
                <li className={filterClass === 'slow-ac' ? "catalog-filter-active" : ""} onClick={() => handleFilterByClass('slow-ac')}>Медленные переменного тока</li>
                <li className={filterClass === 'fast-dc' ? "catalog-filter-active" : ""} onClick={() => handleFilterByClass('fast-dc')}>Быстрые переменного тока</li>
                <li className={filterClass === 'additionally-с' ? "catalog-filter-active" : ""} onClick={() => handleFilterByClass('additionally-с')}>Дополнительное</li>
            </ul>
            <ul className="catalog-filters catalog-filters-stations">
                <li className={filterStationType === 'floor-stations' ? "catalog-filter-active" : ""} onClick={() => handleFilterByStationType('floor-stations')}>Напольные станции</li>
                <li className={filterStationType === 'wall-stations' ? "catalog-filter-active" : ""} onClick={() => handleFilterByStationType('wall-stations')}>Настенные станции</li>
                <li className={filterStationType === 'portable-stations' ? "catalog-filter-active" : ""} onClick={() => handleFilterByStationType('portable-stations')}>Портативные станции</li>
                <li className={filterStationType === 'overhead-stations' ? "catalog-filter-active" : ""} onClick={() => handleFilterByStationType('overhead-stations')}>Навесные станции</li>
            </ul>
            <div className="catalog-wrapper">
                <div className="catalog-items">
                    {filteredProducts.map(product => (
                        <div key={product.id} className={`catalog-item section-content ${product.class}`}>
                            <div>
                                <Image src={product.image} alt={product.name} width={200} height={200} />
                            </div>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <button onClick={() => handleOpenAboutProduct(product)}>Подробнее</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}