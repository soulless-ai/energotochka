"use client";
import React, { useState } from 'react';

export default function CookieConsent() {
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
        // Здесь можно сохранить состояние согласия пользователя в localStorage или cookie
    };

    return (
        <>
            {showModal && (
                <div className="cookie-modal">
                    <div className="cookie-modal-content">
                        <p>
                            Если вы продолжаете использовать наш интернет-сайт, 
                            то вы соглашаетесь на обработку файлов куки (англ. «cookie»), тем самым, 
                            помогаете нам вести наш интернет-сайт комфортнее и полезнее для каждого человека
                        </p>
                        <button onClick={handleCloseModal}>Подтвердить и скрыть</button>
                    </div>
                </div>
            )}
        </>
    );
}