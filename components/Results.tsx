"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Results() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStart = useRef<number | null>(null);

  const slides = [
    { id: 1, area: "Подмышечные впадины", result: "Результат после 3 сеансов", before: "/result-1-before.webp", after: "/result-1-after.webp" },
    { id: 2, area: "Голени", result: "Результат после 5 сеансов", before: "/result-2-before.webp", after: "/result-2-after.webp" },
    { id: 3, area: "Глубокое бикини", result: "Результат после 4 сеансов", before: "/result-3-before.webp", after: "/result-3-after.webp" },
    { id: 4, area: "Руки полностью", result: "Результат после 2 сеансов", before: "/result-4-before.webp", after: "/result-4-after.webp" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleManualNext = () => { nextSlide(); resetTimer(); };
  const handleManualPrev = () => { prevSlide(); resetTimer(); };

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleManualNext() : handleManualPrev();
    touchStart.current = null;
  };

  return (
    <section id="results" className="py-12 md:py-24 bg-[#FAFAFA] overflow-hidden text-black relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-4 tracking-tighter leading-tight text-black">Результаты наших клиентов</h2>
          <p className="text-gray-500 text-[14px] md:text-lg leading-relaxed font-medium px-4">
            Мы показываем только реальные фото наших клиенток, <span className="text-black font-bold underline decoration-accent decoration-2 underline-offset-4">без фильтров и обработки.</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-[30px] md:rounded-[50px] bg-white shadow-lg border-[3px] md:border-4 border-white"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 p-1.5 md:p-4">
                  <div className="flex flex-row gap-1.5 md:gap-4">
                    <div className="relative flex-1 aspect-[3/4] md:aspect-[4/5] bg-gray-50 rounded-[20px] md:rounded-[40px] overflow-hidden">
                       <img src={slide.before} alt="До" className="w-full h-full object-cover" loading="eager" />
                       <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/30 backdrop-blur-sm text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase">До</div>
                    </div>
                    <div className="relative flex-1 aspect-[3/4] md:aspect-[4/5] bg-accent/5 rounded-[20px] md:rounded-[40px] overflow-hidden border border-accent/10">
                       <img src={slide.after} alt="После" className="w-full h-full object-cover" loading="eager" />
                       <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-accent text-black text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase shadow-md">После</div>
                    </div>
                  </div>
                  <div className="text-center mt-4 md:mt-6 pb-2">
                    <p className="text-gray-900 font-black uppercase text-xs md:text-lg tracking-tight leading-none">{slide.area}</p>
                    <p className="text-accent font-bold text-[10px] md:text-sm mt-1 uppercase tracking-tighter">{slide.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleManualPrev} className="absolute left-[-10px] md:left-[-30px] top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl z-30 border border-gray-100"><ChevronLeft size={24} className="text-black" /></button>
          <button onClick={handleManualNext} className="absolute right-[-10px] md:right-[-30px] top-[45%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl z-30 border border-gray-100"><ChevronRight size={24} className="text-black" /></button>
          
          <div className="flex justify-center gap-2 md:gap-3 mt-6">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => {setCurrentSlide(i); resetTimer();}} 
                className={`h-1 md:h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-8 md:w-10 bg-accent' : 'w-2 md:w-3 bg-gray-200'}`} 
              />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center px-4">
            <p className="text-gray-700 font-bold text-[14px] md:text-[1.3rem] leading-relaxed tracking-tight">Эти снимки — доказательство того, что регулярный курс <span className="text-accent">избавляет от раздражений, вросших волос и бритвенных порезов,</span> оставляя кожу гладкой на долгие годы.</p>
        </div>
      </div>
    </section>
  );
}