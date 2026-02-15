"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Coffee, Music, Eye, MoveVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const Block3 = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const photos = [
    { id: 1, label: "Интерьер студии" },
    { id: 2, label: "Зона кофе" },
    { id: 3, label: "Массаж Yamaguchi" },
    { id: 4, label: "Процесс (кушетка)" }
  ];

  const nextSlide = useCallback(() => {
    setCurrentImg((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentImg((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  // Авто-слайдер: переключает сам, но нажатие на стрелки тоже работает
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const benefits = [
    {
      icon: <Coffee className="text-accent w-6 h-6" />,
      title: "Напитки после процедуры",
      text: "Угощаем ароматным кофе из натуральных зёрен и согревающим чаем."
    },
    {
      icon: <Music className="text-accent w-6 h-6" />,
      title: "Ваша музыка",
      text: "Возможность включить свою музыку во время процедуры."
    },
    {
      icon: <Eye className="text-accent w-6 h-6" />,
      title: "Массаж глаз Yamaguchi",
      text: "Вместо обычных очков для эпиляции предлагаем массаж глаз во время сеанса."
    },
    {
      icon: <MoveVertical className="text-accent w-6 h-6" />,
      title: "Удобная кушетка",
      text: "Используем кушетку с электроприводом для комфорта Вашего положения."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="max-w-4xl mb-10 lg:mb-20 text-center lg:text-left">
          <h2 className="text-[1.6rem] md:text-5xl font-black uppercase tracking-tighter leading-tight mb-4 lg:mb-6">
            Kristll studio — <br/>
            <span className="text-accent">атмосферное пространство,</span> <br/>
            где хочется задержаться
          </h2>
          <p className="hidden lg:block text-gray-500 text-xl font-medium max-w-2xl italic">
            Комфортный интерьер и безупречный сервис в каждой детали.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* ФОТО: СЛАЙДЕР (Mobile) / КОЛЛАЖ (Desktop) */}
          <div className="w-full lg:w-1/2">
            
            {/* МОБИЛЬНЫЙ СЛАЙДЕР СО СТРЕЛКАМИ */}
            <div className="lg:hidden relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl border-4 border-white bg-gray-100">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${
                    index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-center px-10 text-[10px]">
                    {photo.label}
                  </p>
                </div>
              ))}
              
              {/* Кнопки управления (Стрелки) - z-index 20 чтобы были поверх фото */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md z-20 active:scale-90"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md z-20 active:scale-90"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>

              {/* Индикаторы (Точки) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {photos.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all ${i === currentImg ? 'w-6 bg-accent' : 'w-1.5 bg-white/50'}`}></div>
                ))}
              </div>
            </div>

            {/* ДЕСТОПНЫЙ КОЛЛАЖ */}
            <div className="hidden lg:grid grid-cols-2 gap-4 h-[650px]">
                <div className="bg-gray-100 rounded-[40px] flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-accent transition-colors">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Интерьер</span>
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <div className="bg-gray-100 rounded-[40px] flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 font-bold uppercase text-[10px]">Напитки</span>
                    </div>
                    <div className="bg-accent/10 rounded-[40px] flex items-center justify-center border-2 border-accent/20">
                        <span className="text-accent font-bold uppercase text-[10px]">Yamaguchi</span>
                    </div>
                </div>
            </div>
          </div>

          {/* СПИСОК СЕРВИСА */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-[10px] md:text-xs font-black uppercase mb-8 tracking-[0.2em] text-gray-400 text-center lg:text-left">
                Сервис и удобство
              </h3>
              
              <div className="space-y-6 md:space-y-10">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-gray-900 leading-tight mb-1">
                        {b.title}
                      </h4>
                      <p className="text-[14px] md:text-base text-gray-500 leading-snug">
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ФИНАЛЬНЫЙ ТЕКСТ И КНОПКА РОЗОВАЯ */}
            <div className="mt-12 lg:mt-0 text-center lg:text-left border-t border-gray-200 pt-10">
                <p className="text-gray-800 font-bold text-base md:text-xl leading-relaxed mb-8">
                  Обеспечим индивидуальный комфорт и конфиденциальность. <br className="hidden md:block"/>
                  Мы делаем все возможное, чтобы поход в нашу студию проходил <span className="text-accent italic drop-shadow-sm">как отдых.</span>
                </p>
                
                <button className="w-full md:w-auto bg-accent hover:bg-[#ffbaba] text-black text-sm md:text-lg font-black py-4 md:py-5 px-10 md:px-16 rounded-full transition-all shadow-xl shadow-accent/20 active:scale-95 uppercase tracking-widest">
                    Записаться
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Block3;
