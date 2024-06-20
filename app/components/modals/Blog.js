"use client";
import React from 'react';
import Image from 'next/image';

export default function BlogModal({ blog, handleOpenMainForm, handleCloseBlogModal }) {
    return (
        <>
            <div className="blog-modal">
                <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2>{blog.name}</h2>
                    <ul className="blog-text" dangerouslySetInnerHTML={{ __html: blog.text }}></ul>
                    <button className="close-button" onClick={handleCloseBlogModal}><Image src="/svg/exit.svg" alt="exit" width={18} height={18}/></button>
                </div>
            </div>
        </>
    );
}