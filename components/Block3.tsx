"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Coffee, Music, Eye, MoveVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Block3({ onOpenModal }: { onOpenModal: () => void }) {
  const [currentImg, setCurrentImg] = useState(0);

  const photos = [
    { id: 1, src: "/studio-1.webp", desktopSrc: "/studio-1-desktop.webp", alt: "Интерьер" },
    { id: 2, src: "/studio-2.webp", alt: "Кофе" },
    { id: 3, src: "/studio-3.webp", alt: "Yamaguchi" },
    { id: 4, src: "/studio-4.webp", alt: "Кушетка" }
  ];

  const nextSlide = useCallback(() => setCurrentImg((prev) => (prev === photos.length - 1 ? 0 : prev + 1)), [photos.length]);
  const prevSlide = useCallback(() => setCurrentImg((prev) => (prev === 0 ? photos.length - 1 : prev - 1)), [photos.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="studio" className="py-12 md:py-24 bg-[#FAFAFA] overflow-hidden text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10 lg:mb-20 text-center lg:text-left">
          <h2 className="text-[1.6rem] md:text-5xl font-black uppercase tracking-tighter leading-tight mb-4 lg:mb-6">Kristll studio — <br/><span className="text-accent">пространство,</span> где хочется задержаться</h2>
          <p className="hidden lg:block text-gray-500 text-xl font-medium italic">Комфортный интерьер и безупречный сервис в каждой детали.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="lg:hidden relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl border-4 border-white bg-gray-100">
              {photos.map((photo, index) => (
                <div key={photo.id} className={`absolute inset-0 transition-opacity duration-700 ${index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </div>
              ))}
              <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md z-20 text-black"><ChevronLeft className="w-6 h-6" /></button>
              <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md z-20 text-black"><ChevronRight className="w-6 h-6" /></button>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4 h-full min-h-[600px]">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative overflow-hidden rounded-[30px] border border-gray-100 bg-gray-100 shadow-sm aspect-square">
                      <img src={photo.id === 1 && photo.desktopSrc ? photo.desktopSrc : photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-6 md:space-y-10">
              {[{icon: <Coffee/>, t: "Напитки после процедуры", d: "Угощаем ароматным кофе и согревающим чаем."}, {icon: <Music/>, t: "Ваша музыка", d: "Возможность включить свою музыку во время процедуры."}, {icon: <Eye/>, t: "Массаж глаз Yamaguchi", d: "Предлагаем массаж глаз во время сеанса."}, {icon: <MoveVertical/>, t: "Удобная кушетка", d: "Кушетка с электроприводом для вашего комфорта."}].map((b, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-accent">{b.icon}</div>
                  <div><h4 className="text-base md:text-lg font-bold leading-tight mb-1 text-gray-900">{b.t}</h4><p className="text-[14px] text-gray-500 leading-snug">{b.d}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-12 lg:mt-0 text-center lg:text-left border-t border-gray-200 pt-10">
                <p className="text-gray-800 font-bold text-base md:text-xl leading-relaxed mb-8">Обеспечим индивидуальный комфорт и конфиденциальность. Мы делаем все возможное, чтобы поход в нашу студию проходил <span className="text-accent italic">как отдых.</span></p>
                <button onClick={onOpenModal} className="w-full md:w-auto bg-accent hover:bg-[#ffbaba] font-black py-4 md:py-5 px-10 md:px-16 rounded-full transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm">Записаться</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}