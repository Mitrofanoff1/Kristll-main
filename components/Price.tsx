"use client";

import React, { useState, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { ModalType } from '@/app/page';

export default function Price({ onOpenModal }: { onOpenModal: (type: ModalType) => void }) {
  const [activeTab, setActiveTab] = useState('Комплексы');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ['Комплексы', 'Бикини', 'Тело', 'Лицо', 'Руки', 'Ноги'];

  // categories displayed depending on gender (male doesn't use Бикини)
  const displayedCategories = gender === 'male' ? categories.filter(c => c !== 'Бикини') : categories;

  // Discount percent used for displayed newPrice
  const discount = 30;

  // Female price data (oldPrice in RUB as number). newPrice is computed from discount.
  const femalePriceData: { [key: string]: { name: string, oldPrice: number, desc?: string }[] } = {
    'Комплексы': [
      { name: "КОМПЛЕКС XXS", desc: "подмышечные впадины, тотальное бикини, голени", oldPrice: 2800 },
      { name: "КОМПЛЕКС XS", desc: "ноги полностью, подмышечные впадины", oldPrice: 3600 },
      { name: "КОМПЛЕКС S", desc: "подмышечные впадины, тотальное бикини, голени", oldPrice: 4300 },
      { name: "КОМПЛЕКС M", desc: "ноги полностью, подмышечные впадины, тотальное бикини", oldPrice: 5200 },
      { name: "КОМПЛЕКС L", desc: "руки до локтя, ноги полностью, подмышечные впадины, тотальное бикини", oldPrice: 6300 },
      { name: "КОМПЛЕКС XL", desc: "руки полностью, ноги полностью, подмышечные впадины, тотальное бикини", oldPrice: 6800 },
      { name: "КОМПЛЕКС XXL", desc: "руки полностью, ноги полностью, подмышечные впадины, тотальное бикини + 2 малые зоны на выбор", oldPrice: 7500 },
    ],
    'Бикини': [
      { name: "Классическое бикини", oldPrice: 1500 },
      { name: "Глубокое бикини", oldPrice: 2100 },
      { name: "Тотальное бикини", oldPrice: 2300 },
      { name: "Межъягодичная зона", oldPrice: 700 },
    ],
    'Тело': [
      { name: "Шея", oldPrice: 800 },
      { name: "Подмышечные впадины", oldPrice: 1000 },
      { name: "Ареолы", oldPrice: 700 },
      { name: "Декольте", oldPrice: 1100 },
      { name: "Грудь полностью", oldPrice: 1400 },
      { name: "Верх спины", oldPrice: 1400 },
      { name: "Поясница", oldPrice: 1400 },
      { name: "Спина полностью", oldPrice: 2700 },
      { name: "Линия живота", oldPrice: 700 },
      { name: "Живот полностью", oldPrice: 1600 },
      { name: "Ягодицы", oldPrice: 1400 },
    ],
    'Лицо': [
      { name: "Верхняя губа", oldPrice: 600 },
      { name: "Подбородок", oldPrice: 600 },
      { name: "Бакенбарды", oldPrice: 600 },
      { name: "Лицо полностью", oldPrice: 1300 },
    ],
    'Руки': [
      { name: "Кисти рук", oldPrice: 700 },
      { name: "Пальцы рук", oldPrice: 700 },
      { name: "Руки выше локтя", oldPrice: 1500 },
      { name: "Руки до локтя", oldPrice: 1500 },
      { name: "Руки полностью", oldPrice: 2100 },
    ],
    'Ноги': [
      { name: "Пальцы на ногах", oldPrice: 600 },
      { name: "Бедра", oldPrice: 1500 },
      { name: "Голени", oldPrice: 1800 },
      { name: "Ноги полностью", oldPrice: 2400 },
    ]
  };

  // Male price data (from provided images)
  const malePriceData: { [key: string]: { name: string, oldPrice: number, desc?: string }[] } = {
    'Комплексы': [
      { name: "КОМПЛЕКС БАЗА", desc: "подмышечные впадины, грудь", oldPrice: 2700 },
      { name: "КОМПЛЕКС СТАНДАРТ", desc: "подмышечные впадины, грудь, живот", oldPrice: 4700 },
      { name: "КОМПЛЕКС МАКС", desc: "подмышечные впадины, грудь, спина", oldPrice: 5100 },
      { name: "КОМПЛЕКС ПОЛНЫЙ ТОРС", desc: "подмышечные впадины, грудь, спина, живот", oldPrice: 7100 },
    ],
    'Тело': [
      { name: "Шея", oldPrice: 1500 },
      { name: "Подмышечные впадины", oldPrice: 1300 },
      { name: "Грудь полностью", oldPrice: 1800 },
      { name: "Спина полностью", oldPrice: 2800 },
      { name: "Верх спины", oldPrice: 1700 },
      { name: "Ареолы", oldPrice: 1000 },
      { name: "Поясница", oldPrice: 1900 },
      { name: "Плечевой пояс", oldPrice: 2000 },
      { name: "Живот полностью", oldPrice: 2400 },
      { name: "Низ живота (линия)", oldPrice: 1000 },
    ],
    'Лицо': [
      { name: "Верхняя губа", oldPrice: 900 },
      { name: "Подбородок", oldPrice: 900 },
      { name: "Щеки", oldPrice: 900 },
      { name: "Бакенбарды", oldPrice: 900 },
      { name: "Лицо полностью", oldPrice: 2200 },
    ],
    'Руки': [
      { name: "Кисти + пальцы рук", oldPrice: 1500 },
      { name: "Руки до локтя", oldPrice: 1800 },
      { name: "Руки выше локтя", oldPrice: 1800 },
      { name: "Руки полностью", oldPrice: 2700 },
    ],
    'Ноги': [
      { name: "Голени", oldPrice: 2500 },
      { name: "Бедра полностью", oldPrice: 2500 },
      { name: "Подъем и пальцы ног", oldPrice: 1700 },
      { name: "Ноги полностью", oldPrice: 3500 },
    ],
    'Бикини': [
      // empty for male (keep consistent categories)
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button onClick={() => setGender('female')} className={`w-full sm:w-auto px-4 py-2 rounded-full font-black uppercase ${gender === 'female' ? 'bg-accent text-white' : 'bg-white border'}`}>Женская эпиляция</button>
            <button onClick={() => setGender('male')} className={`w-full sm:w-auto px-4 py-2 rounded-full font-black uppercase ${gender === 'male' ? 'bg-accent text-white' : 'bg-white border'}`}>Мужская эпиляция</button>
          </div>

          <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar border-b border-gray-100 gap-6 md:gap-12 md:justify-center px-2">
            {displayedCategories.map((cat) => (
              <button 
                key={cat} 
                onClick={(e) => handleTabClick(cat, e)} 
                className={`pb-4 text-[15px] md:text-lg font-black transition-all whitespace-nowrap relative uppercase ${activeTab === cat ? 'text-accent' : 'text-gray-400'}`}>
                {cat}
                {activeTab === cat && <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full animate-in fade-in zoom-in"></div>}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {(gender === 'female' ? femalePriceData : malePriceData)[activeTab]?.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 border-b border-gray-50">
                <div className="flex-1 text-left">
                  <h3 className="text-[15px] md:text-xl font-black uppercase leading-tight">{item.name}</h3>
                  {item.desc && <p className="text-[11px] md:text-sm text-gray-400 mt-1 uppercase tracking-tight font-bold">{item.desc}</p>}
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  <span className="text-gray-300 line-through text-xs md:text-lg font-bold">{item.oldPrice}р</span>
                  <span className="text-accent text-lg md:text-2xl font-black">{Math.round(item.oldPrice * (100 - discount) / 100)}р</span>
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