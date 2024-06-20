import React from 'react';
import config from '../config';

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-footerBackground text-white rounded-tl-footerRadius rounded-tr-footerRadius">
            <div className="flex justify-between w-full">
                <h1>{config.title}</h1>
                <div className="flex footer-icons">
                    <a href="https://vk.com"><Image className="relative" src="/svg/vk.svg" alt="VK logo" width={30} height={30} priority /></a>
                    <a href="https://google.com"><Image className="relative" src="/svg/telegram.svg" alt="Telegram logo" width={30} height={30} priority /></a>
                </div>
            </div>
            <div className="flex justify-between w-full gap-10">
                <ul>
                    <li><a href="#">сертификаты и иные документы</a></li>
                    <li><a href="#">политика использования и обработки данных</a></li>
                    <li><a href="#">политика использования и обработки куки (англ. “cookies”)</a></li>
                </ul>
                <ul>
                    <li><a href="#">{config.address_country}</a></li>
                    <li><a href="#">{config.address_state}</a></li>
                    <li><a href="#">{config.address_city}</a></li>
                    <li><a href="#">огрн: {config.OGRN}</a></li>
                    <li><a href="#">ООО “{config.title_ru}”</a></li>
                </ul>
                <ul>
                    <li id="footerNumber" class="text-right"><a href="#">{config.number}</a></li>
                    <li><a href="#">{config.email}</a></li>
                </ul>
            </div>
            <p className="text-gray-600 font-raleway text-sm font-normal">
                настоящий интернет-сайт, а также вся информация о товарах и об услугах, предоставленная на нём, носит исключительно информационный характер
                и ни при каких условиях не является публичной офертой, определяемой действующим российским законодательством
            </p>
        </footer>
    );
}