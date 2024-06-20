import React, { useState } from 'react';
import Image from 'next/image';
import config from '../../config';

export default function MainForm({ handleCloseMainForm }) {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка данных:', formData);
        setFormSubmitted(true);
    };

    return (
        <>
            <div className="main-form-modal">
                <div className="main-form-modal-content" onClick={(e) => e.stopPropagation()}>
                    <h1>{config.title}</h1>
                    <h2>электрические станции под ключ</h2>
                    {!formSubmitted && (
                        <>
                            <h3>
                                Пожалуйста, заполните ниже строки,<br/>
                                чтобы мы смогли отправить презентацию,<br/>
                                а также ответить на все ваши вопросы
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <input type="text" id="name" name="name" placeholder="напишите ваше имя" value={formData.name} onChange={handleChange} />
                                <input type="text" id="phone" name="phone" placeholder="напишите номер сотового телефона" value={formData.phone} onChange={handleChange} />
                                <button type="submit">Подтвердить</button>
                            </form>
                            <p>
                                нажимая по кнопке, вы соглашаетесь <br/>
                                с условиями использования и обработки данных
                            </p>
                        </>
                    )}
                    {formSubmitted && (
                        <>
                            <Image className="main-form-success-ico" src="/svg/checker.svg" alt="success" width={25} height={25}/>
                            <h3>
                                Благодарим вас за оказанное доверие<br/><br/>
                                Мы с вами свяжемся в ближайшие минуты
                                и ответим на все ваши вопросы.
                            </h3>
                            <p>настоящее окно автоматически<br/> закроется через 10 секунд</p>
                            <ul>
                                <li><a href="https://vk.com"><Image className="relative" src="/svg/vk-green.svg" alt="VK logo" width={30} height={30} priority /></a></li>
                                <li><a href="https://google.com"><Image className="relative" src="/svg/telegram-green.svg" alt="Telegram logo" width={30} height={30} priority /></a></li>
                            </ul>
                            {/* При необходимости добавьте здесь другие элементы, например, изображения */}
                        </>
                    )}
                    <button className="close-button" onClick={handleCloseMainForm}><Image src="/svg/exit.svg" alt="exit" width={18} height={18}/></button>
                </div>
            </div>
        </>
    );
}
