"use client";

import React from 'react';
import { Calendar, Sun, Droplets, Sparkles, MessageCircle, Heart } from 'lucide-react';

// Добавляем описание того, что мы принимаем функцию открытия окна
export default function Preparation({ onOpenModal }: { onOpenModal: (type: 'consult') => void }) {
  const steps = [
    {
      time: "За 7 дней",
      icon: <Sun className="w-6 h-6"/>,
      text: "Откажитесь от активного загара, чтобы избежать пигментации и снизить риск раздражений."
    },
    {
      time: "За 3 дня",
      icon: <Droplets className="w-6 h-6"/>,
      text: "Не проводите процедуры, травмирующие кожу (пилинги, скрабы). Откажитесь от спиртосодержащих средств."
    },
    {
      time: "За 12–24 часа",
      icon: <Calendar className="w-6 h-6"/>,
      text: "Сбрейте волосы так, чтобы кожа оставалась максимально гладкой. Это повысит эффект лазера."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA] overflow-hidden text-black" id="preparation">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6 text-black">
            Подготовка к процедуре
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-bold uppercase tracking-tight">
            Соблюдайте простые правила для вашей безопасности:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          
          <div className="w-full lg:w-3/5 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-accent font-black text-lg md:text-xl uppercase mb-2">
                    {step.time}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-2/5 flex">
            <div className="relative bg-white p-8 rounded-[40px] shadow-xl border border-gray-50 flex flex-col justify-between overflow-hidden">
              <Heart className="absolute -bottom-6 -right-6 w-32 h-32 text-accent/5 -rotate-12" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                   <Sparkles className="text-accent w-6 h-6"/>
                   <h4 className="text-lg md:text-xl font-black uppercase tracking-tight">Ваш результат</h4>
                </div>
                <p className="text-gray-600 font-bold mb-6 leading-relaxed">
                  Соблюдение этих рекомендаций гарантирует максимально быстрый и качественный результат от лазерной эпиляции.
                </p>
                
                <div className="space-y-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <p>Безопасность кожи</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <p>Отсутствие раздражений</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ВОТ ЭТА КНОПКА ВЕРНУЛАСЬ (по твоему желанию) */}
        <div className="mt-16 text-center border-t border-gray-200 pt-16">
            <p className="text-gray-900 font-black text-[15px] md:text-2xl mb-2 uppercase tracking-tighter">Вам нужна консультация?</p>
            <p className="text-gray-500 font-bold text-sm md:text-base mb-8">
                Наш администратор с радостью вас проконсультирует и ответит на все вопросы!
            </p>
            <button 
              onClick={() => onOpenModal('consult')} 
              className="w-full md:w-auto bg-accent hover:bg-[#ffbaba] text-black text-base font-black py-5 px-12 rounded-full transition-all shadow-xl uppercase tracking-widest text-sm flex items-center justify-center gap-3 mx-auto"
            >
                <MessageCircle className="w-5 h-5" /> Хочу получить консультацию
            </button>
        </div>

      </div>
    </section>
  );
}