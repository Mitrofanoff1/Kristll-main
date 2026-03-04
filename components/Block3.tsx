"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Coffee, Music, Eye, MoveVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Block3({ onOpenModal }: { onOpenModal: () => void }) {
  const [currentImg, setCurrentImg] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStart = useRef<number | null>(null);
  const lastTouchTime = useRef<number>(0);

  const photos = [
    { id: 1, src: "/studio-1.webp", desktopSrc: "/studio-1-desktop.webp", alt: "Интерьер" },
    { id: 2, src: "/studio-2.webp", alt: "Кофе" },
    { id: 3, src: "/studio-3.webp", alt: "Yamaguchi" },
    { id: 4, src: "/studio-4.webp", alt: "Кушетка" }
  ];

  const nextSlide = useCallback(() => {
    setCurrentImg((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentImg((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  // Функция для сброса и запуска таймера заново
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

  // Логика свайпа
  const touchDelta = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const x = e.touches[0].clientX;
    touchDelta.current = x - touchStart.current;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd;
    if (Math.abs(diff) > 50) {
      // Swipe right (diff > 0) = prev, Swipe left (diff < 0) = next
      diff > 0 ? handleManualPrev() : handleManualNext();
    }
    touchStart.current = null;
    touchDelta.current = 0;
    lastTouchTime.current = Date.now();
  };

  return (
    <section id="studio" className="py-12 md:py-24 bg-[#FAFAFA] overflow-hidden text-black relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10 lg:mb-20 text-center lg:text-left">
          <h2 className="text-[1.6rem] md:text-5xl font-black uppercase tracking-tighter leading-tight mb-4">Kristll studio — <br/><span className="text-accent">пространство,</span> где хочется задержаться</h2>
          <p className="hidden lg:block text-gray-500 text-xl font-medium italic">Комфортный интерьер и безупречный сервис в каждой детали.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
              <div 
              className="lg:hidden relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl border-4 border-white bg-gray-100"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => {
                // ignore tap if it happened right after a touch swipe
                if (Date.now() - lastTouchTime.current < 300) return;
                const target = e.currentTarget as HTMLDivElement;
                const rect = target.getBoundingClientRect();
                const x = (e as React.MouseEvent).clientX - rect.left;
                if (x > rect.width / 2) handleManualNext(); else handleManualPrev();
              }}
              style={{ touchAction: 'pan-y' }}
            >
              {photos.map((photo, index) => (
                <div key={photo.id} className={`absolute inset-0 transition-opacity duration-700 ${index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </div>
              ))}
              <button aria-label="prev" onClick={handleManualPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-md z-50 active:scale-90 text-black touch-manipulation"><ChevronLeft size={20} /></button>
              <button aria-label="next" onClick={handleManualNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-md z-50 active:scale-90 text-black touch-manipulation"><ChevronRight size={20} /></button>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4 h-full min-h-[600px]">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative overflow-hidden rounded-[30px] border border-gray-100 bg-gray-100 shadow-sm aspect-square">
                      <img src={photo.id === 1 && photo.desktopSrc ? photo.desktopSrc : photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between relative z-50">
            <div className="space-y-6 md:space-y-10">
              <h3 className="text-[10px] md:text-xs font-black uppercase mb-8 tracking-[0.2em] text-gray-400 text-center lg:text-left">Сервис и удобство</h3>
              {[
                {icon: <Coffee/>, t: "Напитки после процедуры", d: "Угощаем ароматным кофе и согревающим чаем."},
                {icon: <Music/>, t: "Ваша музыка", d: "Возможность включить свою музыку во время процедуры."},
                {icon: <Eye/>, t: "Массаж глаз Yamaguchi", d: "Предлагаем массаж глаз во время сеанса."},
                {icon: <MoveVertical/>, t: "Удобная кушетка", d: "Кушетка с электроприводом для вашего комфорта."}
              ].map((b, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-accent">{b.icon}</div>
                  <div><h4 className="text-base md:text-lg font-bold leading-tight mb-1 text-gray-900">{b.t}</h4><p className="text-[14px] text-gray-500 leading-snug">{b.d}</p></div>
                </div>
              ))}
            </div>

            <div className="mt-12 lg:mt-0 text-center lg:text-left border-t border-gray-200 pt-10">
                <p className="text-gray-800 font-bold text-base md:text-xl leading-relaxed mb-8">Обеспечим индивидуальный комфорт и конфиденциальность. Мы делаем все возможное, чтобы поход в нашу студию проходил <span className="text-accent italic">как отдых.</span></p>
                <button 
                  onClick={onOpenModal} 
                  className="w-full md:w-auto bg-accent hover:bg-[#ffbaba] text-black font-black py-5 px-16 rounded-full transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm touch-manipulation cursor-pointer"
                >
                  Записаться
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}