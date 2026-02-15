"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink, Image as ImageIcon } from 'lucide-react';

const Reviews = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const yandexLink = "https://yandex.ru/maps/org/kristll_studio/61436315462/reviews/?ll=30.428688%2C60.055232&tab=reviews&z=16.54";
  const twoGisLink = "#"; // Вставь сюда ссылку на 2ГИС позже

  const screenshots = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    label: `Отзыв ${i + 1}`
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
    <section className="pt-8 pb-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК (Центрирован на мобилках) */}
        <div className="mb-8 md:mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">
            Отзывы
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          
          {/* ПРАВАЯ ЧАСТЬ В МОБИЛКЕ - КАРТОЧКИ (Теперь сверху и в 2 колонки) */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-8">
            
            {/* КАРТОЧКА ЯНДЕКС (Компактная для мобил) */}
            <div className="bg-accent/10 p-4 md:p-8 rounded-[25px] md:rounded-[40px] border border-accent/20 flex flex-col items-center text-center justify-between">
              <div className="mb-2 md:mb-4 bg-white p-2 md:p-4 rounded-xl shadow-sm">
                <span className="text-xl md:text-3xl font-black text-[#f33]">Я</span>
                <span className="text-sm md:text-xl font-bold ml-0.5">ндекс</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 md:w-4 md:h-4 fill-[#ffb400] text-[#ffb400]" />
                ))}
              </div>
              <p className="text-accent font-bold text-[9px] md:text-base mb-3 md:mb-6 leading-none">Рейтинг 5.0</p>
              <a 
                href={yandexLink} 
                target="_blank" 
                className="flex items-center gap-1 text-black font-black uppercase text-[8px] md:text-sm tracking-wider border-b border-black pb-0.5"
              >
                Отзывы
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>

            {/* КАРТОЧКА 2ГИС (Компактная для мобил) */}
            <div className="bg-accent/10 p-4 md:p-8 rounded-[25px] md:rounded-[40px] border border-accent/20 flex flex-col items-center text-center justify-between">
              <div className="mb-2 md:mb-4 bg-white p-2 md:p-4 rounded-xl shadow-sm flex items-center">
                 <div className="w-5 h-5 md:w-8 md:h-8 bg-[#6ab031] rounded-md mr-1 flex items-center justify-center text-white font-bold text-xs">2</div>
                 <span className="text-sm md:text-xl font-bold">ГИС</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 md:w-4 md:h-4 fill-[#6ab031] text-[#6ab031]" />
                ))}
              </div>
              <p className="text-accent font-bold text-[9px] md:text-base mb-3 md:mb-6 leading-none">Рейтинг 5.0</p>
              <a 
                href={twoGisLink} 
                target="_blank" 
                className="flex items-center gap-1 text-black font-black uppercase text-[8px] md:text-sm tracking-wider border-b border-black pb-0.5"
              >
                Отзывы
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>

          </div>

          {/* ЛЕВАЯ ЧАСТЬ В МОБИЛКЕ - СЛАЙДЕР */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] bg-gray-50 border border-gray-100 aspect-[4/5] md:h-[600px] flex items-center justify-center">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                >
                  {screenshots.map((s) => (
                    <div key={s.id} className="w-full h-full flex-shrink-0 flex items-center justify-center p-4">
                       <div className="text-center">
                          <ImageIcon className="w-10 h-10 text-gray-200 mx-auto mb-4" />
                          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{s.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Стрелки */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md z-10 active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md z-10 active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Точки */}
              <div className="flex justify-center gap-1.5 mt-4 md:mt-6">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === currentIdx ? 'w-6 bg-accent' : 'w-1.5 bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
