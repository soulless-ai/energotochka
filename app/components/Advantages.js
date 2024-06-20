import React from 'react';
import Image from 'next/image';

export default function Advantages() {
    return (
        <section>
            <h1 className="section-title">преимущества наших станций</h1>
            <div className="advantages-main-content flex">
                <ul className="advantages-wrapper">
                    <li class="section-content">
                        <h1>Инновационность</h1>
                        <div>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />подключение через «Bluetooth»</span>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />регулирование заряда тока</span>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />управление через приложение</span>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />записывание истории заряда</span>
                        </div>
                    </li>
                    <li class="section-content">
                        <h1>Совместимость</h1>
                        <div>
                            <span>Все зарядные станции, поставляемые нами совместимы с различными моделями автомобилей, например такие как «Zeekr», «Volkswagen», «Tesla», «NIO», «Nissan», «Lixiang», «Mercedes», «BYD», «BMW» и прочее</span>
                        </div>
                    </li>
                    <li class="section-content">
                        <h1>Безопасность</h1>
                        <div>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />защита от перенапряжения</span>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />защита от перегревания</span>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />защита от недонапряжения</span>
                            <span><Image src="/svg/checker.svg" alt="Checker icon" width={25} height={25} />защита от молнии и непогоды</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}