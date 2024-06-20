import React, { useState } from 'react';
import blogData from '../../public/blog.json';

export default function Blog({blog, handleOpenBlogModal}) {
    return (
        <section>
            <h1 className="section-title">блог компании о важном</h1>
            <div className="blog-wrapper">
                <div className="blog-items">
                    {blogData.blog.map(blog => (
                        <div key={blog.id} className={`blog-item section-content`}>
                            <h5> {blog.name} <div className="hide">{blog.department}</div></h5>
                            <ul className="blog-text" dangerouslySetInnerHTML={{ __html: blog.text }}></ul>
                            <button onClick={() => handleOpenBlogModal(blog)}>Читать статью</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}