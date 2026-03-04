"use client";

import React from 'react';
import { X, Send } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  onOpenModal: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

export default function Header({ onOpenModal, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const navLinks = [
    { name: 'О студии', href: '#studio' },
    { name: 'Прайс', href: '#prices' },
    { name: 'Эффективность', href: '#results' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Вопросы', href: '#faq' },
    { name: 'Контакты', href: '#footer' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-14 md:h-20 flex items-center justify-between">
          
          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">Kristll</span>
            <span className="text-[7px] md:text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-0.5">Студия эпиляции</span>
          </Link>

          <div className="hidden lg:flex flex-col items-center">
            <p className="text-[9px] font-black uppercase tracking-widest text-accent">Мурино, ул. Шувалова д.12</p>
            <a href="tel:89218758196" className="text-lg font-black tracking-tighter">8-921-875-81-96</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:89218758196" className="lg:hidden text-[12px] font-black border-b border-accent uppercase">Позвонить</a>
            
            <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-1 p-1">
              <div className="w-6 md:w-8 h-0.5 bg-black"></div>
              <div className="w-6 md:w-8 h-0.5 bg-black"></div>
              <div className="w-4 md:w-5 h-0.5 bg-black self-end"></div>
            </button>
          </div>
        </div>
      </header>

      {/* ВЫЕЗЖАЮЩЕЕ МЕНЮ */}
      <div className={`fixed inset-0 z-[1000] transition-all duration-500 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-full max-w-[300px] bg-[#FFCBCB] shadow-2xl transition-transform duration-500 p-8 flex flex-col justify-between ${isMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}>
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-black uppercase">Меню</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/20 rounded-full"><X size={20}/></button>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-tight">{link.name}</a>
              ))}
            </nav>
          </div>
          <div className="space-y-6 pt-6 border-t border-black/10">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-black/40">Мурино, ул. Шувалова д.12</p>
              <a href="tel:89218758196" className="text-lg font-black">8-921-875-81-96</a>
            </div>
            <button onClick={() => { setIsMenuOpen(false); onOpenModal(); }} className="w-full bg-black text-white font-black py-4 rounded-xl uppercase text-xs tracking-widest">Записаться</button>
          </div>
        </div>
      </div>
      
      {/* Отступ под шапку */}
      <div className="h-14 md:h-20"></div>
    </>
  );
}