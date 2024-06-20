"use client";
import React, { useState } from 'react';
import Image from "next/image";

import config from './config';
import catalogData from '../public/catalog.json';

import Header from './components/Header';
import About from './components/About';
import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Footer from './components/Footer';

import CookieConsent from "./components/modals/CookieConsent";
import MainForm from "./components/modals/MainForm";
import AboutProduct from './components/modals/AboutProduct';
import BlogModal from "./components/modals/Blog";

export default function Home() {
  const [showMainForm, setShowMainForm] = useState(false);
  const [showAboutProduct, setShowAboutProduct] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpenMainForm = () => {
    setShowMainForm(true);
  };
  const handleCloseMainForm = () => {
    setShowMainForm(false);
  };
  const handleOpenAboutProduct = (product) => {
    setSelectedProduct(product);
    setShowAboutProduct(true);
  };
  const handleCloseAboutProduct = () => {
    setSelectedProduct(null);
    setShowAboutProduct(false);
  };
  const handleOpenBlogModal = (blog) => {
    setSelectedBlog(blog);
    setShowBlogModal(true);
  };
  const handleCloseBlogModal = () => {
    setSelectedBlog(null);
    setShowBlogModal(false);
  };
  
  const productWM_DCEV = catalogData.products.find(product => product.name === "WM-DCEV");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="main-container flex">
        <div>
          <h1>{config.title}</h1>
          <h3>электрические станции под ключ с сопровождением и ведением</h3>
          <div className="section-content main-container-content">
            <p>
              Помогаем предпринимателям открыть 
              новый рынок с безграничными возможностями
            </p>
            <button id="main-container-button" onClick={handleOpenMainForm}>
              Посмотреть коммерческое предложение
            </button>
          </div>
          <div className="section-content main-container-product flex">
            <img src={productWM_DCEV.image} alt={`${productWM_DCEV.name}" image`} width="100%" height="175%"/>
            <div>
              <h2>{productWM_DCEV.name}</h2>
              <p>
                {productWM_DCEV.about}
              </p>
              <button id="main-container-about" onClick={() => handleOpenAboutProduct(productWM_DCEV)}>
                Подробнее
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src="/images/main.png" alt="EnergoTochka Main Image" width={200} height={300} />
        </div>
      </section>
      <section className="main-billboard">
        <p>поставка и установка станции под ключ - </p>
        <p>поставка и установка станции под ключ - </p>
        <p>поставка и установка станции под ключ - </p>
        <p>поставка и установка станции под ключ - </p>
        <p>поставка и установка станции под ключ - </p>
      </section>
      
      <About />
      <Advantages />
      <Catalog 
        handleOpenAboutProduct={handleOpenAboutProduct} 
        handleCloseAboutProduct={handleCloseAboutProduct}
      />
      <Contact />
      <Faq />
      <Blog 
        handleOpenBlogModal={handleOpenBlogModal} 
        handleCloseBlogModal={handleCloseBlogModal}
      />

      <CookieConsent />
      {showMainForm && 
        <MainForm handleCloseMainForm={handleCloseMainForm} />}
      {showAboutProduct && 
        !showMainForm && 
        <AboutProduct product={selectedProduct} handleCloseAboutProduct={handleCloseAboutProduct} handleOpenMainForm={handleOpenMainForm} />}
      {showBlogModal &&
        <BlogModal blog={selectedBlog} handleCloseBlogModal={handleCloseBlogModal} handleOpenMainForm={handleOpenMainForm} />}
      <Footer />
    </main>
  );
  
}