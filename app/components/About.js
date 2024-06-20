import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section>
            <h1 className="section-title">Информация о нас</h1>
            <div className="about-main-content section-content flex">
                <p>
                    Мы являемся официальным и эксклюзивным дистрибьютером зарядных станций для автомобилей
                    с электробатареями, компании-производителя <span>«BENY»</span>,
                    которые зарекомендовали себя на мировой рынке,
                    как современные, эффективные и удобные электростанции.
                    Наши зарядные станции имеют необходимые сертификаты,
                    в том числе и документы о соответствии российским
                    стандартам качества и эксплуатации, подтвержденные специализированными государственными учреждениями ...
                </p>
                <Image src="/images/about-main.png" alt="EnergoTochka About Main Image" width={500} height={195} />
            </div>
        </section>
    );
}