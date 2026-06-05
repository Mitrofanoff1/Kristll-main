"use client";

import React, { useState, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { ModalType } from '@/app/page';

export default function Price({ onOpenModal }: { onOpenModal: (type: ModalType) => void }) {
  const [activeTab, setActiveTab] = useState('Комплексы');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ['Комплексы', 'Бикини', 'Тело', 'Лицо', 'Руки', 'Ноги'];

  const priceData: { [key: string]: { name: string, oldPrice: string, newPrice: string, desc?: string }[] } = {
    'Комплексы': [
      { name: "КОМПЛЕКС XXS", desc: "минимальный комплекс", oldPrice: "2800", newPrice: "2240" },
      { name: "КОМПЛЕКС XS", desc: "мини-комплекс", oldPrice: "3600", newPrice: "2880" },
      { name: "КОМПЛЕКС S", desc: "стандартный комплекс", oldPrice: "4300", newPrice: "3440" },
      { name: "КОМПЛЕКС M", desc: "расширенный комплекс", oldPrice: "5200", newPrice: "4160" },
      { name: "КОМПЛЕКС L", desc: "большой комплекс", oldPrice: "6300", newPrice: "5040" },
      { name: "КОМПЛЕКС XL", desc: "максимальный комплекс", oldPrice: "6800", newPrice: "5440" },
      { name: "КОМПЛЕКС XXL", desc: "экстра-комплекс", oldPrice: "7500", newPrice: "6000" },
    ],
    'Бикини': [
      { name: "Классическое бикини", oldPrice: "1500", newPrice: "1200" },
      { name: "Глубокое бикини", oldPrice: "2100", newPrice: "1680" },
      { name: "Тотальное бикини", oldPrice: "2300", newPrice: "1840" },
      { name: "Межъягодичная зона", oldPrice: "700", newPrice: "560" },
    ],
    'Тело': [
      { name: "Шея", oldPrice: "800", newPrice: "640" },
      { name: "Подмышечные впадины", oldPrice: "1000", newPrice: "800" },
      { name: "Ареолы", oldPrice: "700", newPrice: "560" },
      { name: "Декольте", oldPrice: "1100", newPrice: "880" },
      { name: "Грудь полностью", oldPrice: "1400", newPrice: "1120" },
      { name: "Верх спины", oldPrice: "1400", newPrice: "1120" },
      { name: "Поясница", oldPrice: "1400", newPrice: "1120" },
      { name: "Спина полностью", oldPrice: "2700", newPrice: "2160" },
      { name: "Линия живота", oldPrice: "700", newPrice: "560" },
      { name: "Живот полностью", oldPrice: "1600", newPrice: "1280" },
      { name: "Ягодицы", oldPrice: "1400", newPrice: "1120" },
    ],
    'Лицо': [
      { name: "Верхняя губа", oldPrice: "600", newPrice: "480" },
      { name: "Подбородок", oldPrice: "600", newPrice: "480" },
      { name: "Бакенбарды", oldPrice: "600", newPrice: "480" },
      { name: "Лицо полностью", oldPrice: "1300", newPrice: "1040" },
    ],
    'Руки': [
      { name: "Кисти рук", oldPrice: "700", newPrice: "560" },
      { name: "Пальцы рук", oldPrice: "700", newPrice: "560" },
      { name: "Руки выше локтя", oldPrice: "1500", newPrice: "1200" },
      { name: "Руки до локтя", oldPrice: "1500", newPrice: "1200" },
      { name: "Руки полностью", oldPrice: "2100", newPrice: "1680" },
    ],
    'Ноги': [
      { name: "Пальцы на ногах", oldPrice: "600", newPrice: "480" },
      { name: "Бедра", oldPrice: "1500", newPrice: "1200" },
      { name: "Голени", oldPrice: "1800", newPrice: "1440" },
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
    <section className="py-12 md:py-24 bg-white overflow-hidden text-black" id="prices">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter leading-tight text-black">Стоимость услуг</h2>
          <p className="text-[13px] md:text-xl font-black uppercase tracking-tight leading-snug">
            НА ПЕРВОЕ ПОСЕЩЕНИЕ ДЕЙСТВУЕТ <span className="text-accent">СКИДКА 30%</span> <br /> 
            + ДАРИМ <span className="text-accent">УХОДОВЫЙ НАБОР</span> ПОСЛЕ ЭПИЛЯЦИИ
          </p>
        </div>

        <div className="relative mb-10 md:mb-16">
          <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar border-b border-gray-100 gap-6 md:gap-12 md:justify-center px-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={(e) => handleTabClick(cat, e)} 
                className={`pb-4 text-[15px] md:text-lg font-black transition-all whitespace-nowrap relative uppercase ${activeTab === cat ? 'text-accent' : 'text-gray-400'}`}
              >
                {cat}
                {activeTab === cat && <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full animate-in fade-in zoom-in"></div>}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {priceData[activeTab]?.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 border-b border-gray-50">
                <div className="flex-1 text-left">
                  <h3 className="text-[15px] md:text-xl font-black uppercase leading-tight">{item.name}</h3>
                  {item.desc && <p className="text-[11px] md:text-sm text-gray-400 mt-1 uppercase tracking-tight font-bold">{item.desc}</p>}
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  <span className="text-gray-300 line-through text-xs md:text-lg font-bold">{item.oldPrice}р</span>
                  <span className="text-accent text-lg md:text-2xl font-black">{item.newPrice}р</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center px-4 max-w-2xl mx-auto">
            <button onClick={() => onOpenModal('discount')} className="w-full md:w-auto bg-black text-white hover:bg-zinc-800 text-sm md:text-lg font-black py-4 md:py-5 px-10 md:px-16 rounded-full transition-all shadow-xl active:scale-95 uppercase tracking-widest shadow-black/10 mb-12 touch-manipulation cursor-pointer relative z-[101]" style={{ WebkitTapHighlightColor: 'transparent', pointerEvents: 'auto' }}>
                Записаться со скидкой 30%
            </button>
            <div className="pt-10 border-t border-gray-100 text-center">
               <p className="text-gray-900 font-black text-base md:text-xl mb-2 uppercase tracking-tighter">Не нашли свой комплекс или зону?</p>
               <p className="text-gray-500 font-bold text-sm md:text-base mb-8 leading-tight">Свяжитесь с нами и мы подберем его вместе!</p>
               <button onClick={() => onOpenModal('consult')} className="w-full md:w-auto flex items-center justify-center gap-3 bg-white border-2 border-accent text-black hover:bg-accent/5 text-[11px] md:text-sm font-black py-4 px-10 rounded-full transition-all active:scale-95 uppercase tracking-widest mx-auto">
                  <MessageCircle className="w-4 h-4 text-accent" /> Оставить заявку
               </button>
            </div>
        </div>
      </div>
    </section>
  );
}