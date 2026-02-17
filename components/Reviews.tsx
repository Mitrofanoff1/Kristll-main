"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

export default function Reviews({ onOpenModal }: { onOpenModal?: (type?: any) => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const yandexLink = "https://yandex.ru/maps/org/kristll_studio/61436315462/reviews/?ll=30.428688%2C60.055232&tab=reviews&z=16.54";
  const twoGisLink = "https://2gis.ru/spb/firm/70000001099309382/tab/reviews"; 

  const screenshots = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    src: `/review-${i + 1}.webp`,
    alt: `Отзыв ${i + 1}`
  }));

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }, [screenshots.length]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, [screenshots.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="reviews" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-black">Отзывы</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          <div className="w-full lg:w-1/3 order-1 lg:order-2 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {/* ЯНДЕКС */}
            <div className="bg-accent/5 p-4 md:p-6 rounded-[30px] border border-accent/10 flex flex-col items-center text-center shadow-sm">
              <div className="mb-3 bg-white p-3 md:p-4 rounded-2xl shadow-sm"><span className="text-2xl md:text-4xl font-black text-[#f33]">Я</span><span className="text-lg md:text-2xl font-bold ml-1 text-black">ндекс</span></div>
              <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#ffb400] text-[#ffb400]" />)}</div>
              <p className="text-accent font-black text-[10px] md:text-xs uppercase tracking-widest mb-3 leading-none">Рейтинг 5.0</p>
              <a href={yandexLink} target="_blank" className="flex items-center gap-2 text-black font-black uppercase text-[8px] md:text-[10px] border-b-2 border-black pb-1 hover:text-accent transition-all">Посмотреть <ExternalLink className="w-3 h-3" /></a>
            </div>
            {/* 2ГИС */}
            <div className="bg-accent/5 p-4 md:p-6 rounded-[30px] border border-accent/10 flex flex-col items-center text-center shadow-sm">
              <div className="mb-3 bg-white p-3 md:p-4 rounded-2xl shadow-sm flex items-center"><div className="w-6 h-6 md:w-8 md:h-8 bg-[#6ab031] rounded-lg mr-1.5 flex items-center justify-center text-white font-bold text-sm">2</div><span className="text-sm md:text-lg font-bold text-black uppercase">ГИС</span></div>
              <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#6ab031] text-[#6ab031]" />)}</div>
              <p className="text-accent font-black text-[10px] md:text-xs uppercase tracking-widest mb-3 leading-none">Рейтинг 5.0</p>
              <a href={twoGisLink} target="_blank" className="flex items-center gap-2 text-black font-black uppercase text-[8px] md:text-[10px] border-b-2 border-black pb-1 hover:text-accent transition-all">Посмотреть <ExternalLink className="w-3 h-3" /></a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[40px] md:rounded-[50px] bg-white border-2 border-gray-100 shadow-2xl aspect-[3/4] md:aspect-auto md:h-[550px] flex items-center justify-center">
                <div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
                  {screenshots.map((s) => (
                    <div key={s.id} className="w-full h-full flex-shrink-0 relative bg-white flex items-center justify-center overflow-hidden">
                       <img 
                        src={s.src} 
                        alt={s.alt} 
                        className="w-full h-full object-contain p-2 md:p-8" 
                        loading="eager"
                       />
                    </div>
                  ))}
                </div>
                <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-20 active:scale-90"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" /></button>
                <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-20 active:scale-90"><ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" /></button>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {screenshots.map((_, i) => <button key={i} onClick={() => setCurrentIdx(i)} className={`h-1 rounded-full transition-all ${i === currentIdx ? 'w-10 bg-accent' : 'w-2 bg-gray-200'}`} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}