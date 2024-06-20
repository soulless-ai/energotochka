import React from 'react';

export default function Contact() {
    return (
        <section>
            <h1 className="section-title">быстрая связь</h1>
            <div className="section-content flex gap-6">
                <form id="contact-main-form">
                    <input type="text" placeholder="напишите ваше имя" name="name" />
                    <input type="tel" placeholder="напишите номер сотового телефона" name="phone" />
                    <button type="submit">Проконсультироваться со специалисом</button>
                    <p>нажимая кнопку, вы соглашаетесь с условиями обработки данных</p>
                </form>
                <iframe
                    className="contact-main-map"
                    width="800"
                    height="450"
                    src=""
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}
