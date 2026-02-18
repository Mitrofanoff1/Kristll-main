"use client";

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { ModalType } from '@/app/page';

export default function FAQ({ onOpenModal }: { onOpenModal: (type: ModalType) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { q: "Можно ли делать лазерную эпиляцию во время беременности?", a: "Во время беременности процедура не проводится. Рекомендуется дождаться рождения ребёнка и восстановительного периода." },
    { q: "Сколько нужно процедур для эффекта?", a: "В среднем для стойкого результата требуется от 6 до 10 процедур. Первые изменения заметны уже после 1–2 процедур." },
    { q: "Лазерная эпиляция – это больно?", a: "Нет, сильной боли нет. Ощущения описывают как лёгкое покалывание или тепло. Мы используем систему охлаждения до -20°C." },
    { q: "Лазерная эпиляция вызывает рак?", a: "Это миф. Лазерная эпиляция не имеет ничего общего с облучением. Безопасность подтверждена многочисленными исследованиями." }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white overflow-hidden text-black relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-black">Ответы на вопросы</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div key={index} className={`border-b border-gray-100 transition-colors ${openIndex === index ? 'bg-accent/5' : ''}`}>
              {/* Кнопка на всю ширину с touch-manipulation */}
              <button 
                onClick={() => toggleFAQ(index)} 
                type="button"
                className="w-full py-6 md:py-8 flex items-center justify-between gap-4 text-left group touch-manipulation relative z-20"
              >
                <span className={`text-[15px] md:text-xl font-black uppercase tracking-tight transition-colors ${openIndex === index ? 'text-accent' : 'text-gray-900'}`}>{item.q}</span>
                <div className="flex-shrink-0">{openIndex === index ? <Minus size={24} className="text-accent" /> : <Plus size={24} className="text-gray-300" />}</div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[800px] pb-8' : 'max-h-0'}`}>
                <div className="text-gray-600 text-[15px] md:text-lg leading-relaxed whitespace-pre-line font-medium pr-10">{item.a}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative z-20">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6">Остались вопросы?</p>
            <button onClick={() => onOpenModal('consult')} className="bg-accent hover:bg-[#ffbaba] text-black text-sm font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest flex items-center justify-center gap-3 mx-auto shadow-lg active:scale-95 touch-manipulation">
                <MessageCircle size={20} /> Задать свой вопрос
            </button>
        </div>
      </div>
    </section>
  );
}