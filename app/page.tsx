"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Block3 from "@/components/Block3";
import Price from "@/components/Price";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import LaserInfo from "@/components/LaserInfo";
import Preparation from "@/components/Preparation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal"; 
import FloatingContact from "@/components/FloatingContact";

export type ModalType = 'discount' | 'consult';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('discount');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = (type: ModalType = 'discount') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ТУТ ИЗМЕНИЛИ: теперь 'discount' */}
      <Header 
        onOpenModal={() => openModal('discount')} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <Hero onOpenModal={() => openModal('discount')} />
      <Block3 onOpenModal={() => openModal('discount')} />
      <Price onOpenModal={openModal} />
      <Results />
      <Reviews />
      <LaserInfo />
      <Preparation onOpenModal={() => openModal('consult')} />
      <FAQ onOpenModal={() => openModal('consult')} />
      <Footer onOpenModal={() => openModal('discount')} />

      {!isMenuOpen && <FloatingContact />}

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType}
      />
    </main>
  );
}