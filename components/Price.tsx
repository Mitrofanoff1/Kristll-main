"use client";

import React, { useState, useRef } from 'react';
import { Percent, MessageCircle } from 'lucide-react';

const Price = () => {
  const [activeTab, setActiveTab] = useState('Комплексы');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    'Комплексы', 'Бикини', 'Тело', 'Лицо', 'Руки', 'Ноги'
  ];

  const priceData: { [key: string]: { name: string, oldPrice: string, newPrice: string, desc?: string }[] } = {
    'Комплексы': [
      { name: "КОМПЛЕКС S", desc: "подмышечные впадины + тотальное бикини + голени", oldPrice: "3800", newPrice: "3040" },
      { name: "КОМПЛЕКС M", desc: "ноги полностью + подмышечные впадины + тотальное бикини", oldPrice: "4500", newPrice: "3600" },
      { name: "КОМПЛЕКС L", desc: "руки до локтя + ноги полностью + подмышечные впадины + тотальное бикини", oldPrice: "5300", newPrice: "4240" },
      { name: "КОМПЛЕКС XL", desc: "6 зон", oldPrice: "6300", newPrice: "5040" },
    ],
    'Бикини': [
      { name: "Классическое бикини", oldPrice: "1400", newPrice: "1120" },
      { name: "Глубокое бикини (без меж.я. зоной)", oldPrice: "1700", newPrice: "1360" },
      { name: "Тотальное бикини (с меж.я. зоной)", oldPrice: "2000", newPrice: "1600" },
    ],
    'Тело': [
      { name: "Подмышечные впадины", oldPrice: "800", newPrice: "640" },
      { name: "Ареолы", oldPrice: "600", newPrice: "480" },
      { name: "Живот", oldPrice: "1500", newPrice: "1200" },
      { name: "Линия живота", oldPrice: "600", newPrice: "480" },
      { name: "Спина (поясница)", oldPrice: "1200", newPrice: "960" },
      { name: "Ягодицы", oldPrice: "1300", newPrice: "1040" },
    ],
    'Лицо': [
      { name: "Верхняя губа", oldPrice: "600", newPrice: "480" },
      { name: "Подбородок", oldPrice: "600", newPrice: "480" },
      { name: "Бакенбарды", oldPrice: "600", newPrice: "420" },
      { name: "Лицо полностью", oldPrice: "1300", newPrice: "1040" },
    ],
    'Руки': [
      { name: "Руки до локтя", oldPrice: "1300", newPrice: "1040" },
      { name: "Руки выше локтя", oldPrice: "1300", newPrice: "1040" },
      { name: "Кисти рук", oldPrice: "700", newPrice: "560" },
      { name: "Руки полностью", oldPrice: "1900", newPrice: "1520" },
    ],
    'Ноги': [
      { name: "Голени (с коленом)", oldPrice: "1800", newPrice: "1440" },
      { name: "Бедра", oldPrice: "1500", newPrice: "1200" },
      { name: "Пальцы на ногах", oldPrice: "600", newPrice: "480" },
      { name: "Ноги полностью", oldPrice: "2400", newPrice: "1920" },
    ]
  };

  const handleTabClick = (cat: string, e: React.MouseEvent) => {
    setActiveTab(cat);
    const target = e.currentTarget as HTMLElement;
    if (scrollRef.current) {
      const scrollLeft = target.offsetLeft - scrollRef.current.offsetWidth / 2 + target.offsetWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white" id="prices">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-3 tracking-tighter leading-tight">Стоимость услуг</h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-medium bg-gray-50 inline-flex mx-auto px-4 py-2 rounded-full border border-gray-100">
             <Percent className="w-4 h-4 text-accent" />
             <p className="text-[11px] md:text-base uppercase tracking-wider font-bold">Скидка 20% на первое посещение</p>
          </div>
        </div>

        {/* ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ КАТЕГОРИЙ */}
        <div className="relative mb-10 md:mb-16">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar border-b border-gray-100 gap-6 md:gap-12 md:justify-center px-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={(e) => handleTabClick(cat, e)}
                className={`pb-4 text-[15px] md:text-lg font-black transition-all whitespace-nowrap relative uppercase tracking-tight ${
                  activeTab === cat ? 'text-accent' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-accent rounded-full animate-in fade-in zoom-in duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* СПИСОК УСЛУГ */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {priceData[activeTab]?.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 border-b border-gray-50 group"
              >
                <div className="flex-1">
                  <h3 className="text-[15px] md:text-xl font-black text-gray-900 leading-tight uppercase">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-[11px] md:text-sm text-gray-400 mt-1 uppercase tracking-tight font-bold italic-none">
                      {item.desc}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-3 md:gap-6">
                  <span className="text-gray-300 line-through text-xs md:text-lg font-bold">
                    {item.oldPrice}р
                  </span>
                  <span className="text-accent text-lg md:text-2xl font-black">
                    {item.newPrice}р
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* КНОПКА ЗАПИСИ + ДОПОЛНИТЕЛЬНЫЙ БЛОК КОНСУЛЬТАЦИИ */}
        <div className="mt-12 md:mt-16 text-center px-4 max-w-2xl mx-auto">
            {/* Основная кнопка */}
            <button className="w-full md:w-auto bg-black text-white hover:bg-zinc-800 text-sm md:text-lg font-black py-4 md:py-5 px-10 md:px-16 rounded-full transition-all shadow-xl active:scale-95 uppercase tracking-widest shadow-black/10 mb-10">
                Записаться со скидкой 20%
            </button>

            {/* Блок "Не нашли зону" */}
            <div className="pt-10 border-t border-gray-100">
               <p className="text-gray-500 font-bold text-sm md:text-base mb-6 leading-relaxed">
                  Не нашли свой комплекс или зону? <br className="hidden md:block"/> 
                  Свяжитесь с нами и мы подберем его вместе
               </p>
               <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-white border-2 border-accent text-black hover:bg-accent/5 text-[11px] md:text-sm font-black py-4 px-8 rounded-full transition-all active:scale-95 uppercase tracking-widest mx-auto">
                  <MessageCircle className="w-4 h-4 text-accent" />
                  Связаться для консультации
               </button>
            </div>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Price;
