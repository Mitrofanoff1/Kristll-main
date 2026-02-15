"use client";

import React from 'react';
import { Calendar, Sun, Droplets, Sparkles, MessageCircle, Heart } from 'lucide-react';

const Preparation = () => {
  const steps = [
    {
      time: "За 7 дней",
      icon: <Sun className="text-accent w-6 h-6" />,
      text: "Откажитесь от активного загара (пляж/солярий), чтобы избежать пигментации и снизить риск получения раздражений."
    },
    {
      time: "За 3 дня",
      icon: <Droplets className="text-accent w-6 h-6" />,
      text: "Не проводите процедуры, травмирующие кожу (пилинги, скрабирования, агрессивные косметические средства и т.п.). Откажитесь от спиртосодержащих лосьонов."
    },
    {
      time: "За 12–24 часа",
      icon: <Calendar className="text-accent w-6 h-6" />,
      text: "Сбрейте волосы так, чтобы кожа оставалась максимально гладкой. Это позволит лазеру воздействовать напрямую на фолликулы, а не тратить энергию на поверхностные волоски."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
            Подготовка к процедуре
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-bold max-w-2xl mx-auto uppercase tracking-tight">
            Чтобы процедура прошла максимально эффективно и безопасно, важно соблюдать простые правила:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          
          {/* ЛЕВАЯ ЧАСТЬ: СПИСОК ПРАВИЛ */}
          <div className="w-full lg:w-3/5 space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 md:gap-8 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:border-accent transition-colors duration-300">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-accent font-black text-lg md:text-xl uppercase tracking-tighter mb-2 italic-none">
                    {step.time}
                  </h3>
                  <p className="text-gray-600 text-[15px] md:text-lg leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ПРАВАЯ ЧАСТЬ: КАРТОЧКА ЗАБОТЫ (как в референсе) */}
          <div className="w-full lg:w-2/5 flex">
            <div className="relative bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col justify-between overflow-hidden">
              {/* Декоративное сердце на фоне */}
              <Heart className="absolute -bottom-6 -right-6 w-32 h-32 text-accent/5 -rotate-12" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                   <Sparkles className="text-accent w-6 h-6" />
                   <h4 className="text-lg md:text-xl font-black uppercase tracking-tight">Ваш результат</h4>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-bold italic-none mb-6">
                  Соблюдая эти рекомендации, вы получите максимально выраженный и быстрый результат от лазерной эпиляции.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                    <p>Безопасность кожи</p>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                    <p>Отсутствие раздражений</p>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                    <p>100% эффект лазера</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* НИЖНЯЯ ЧАСТЬ: CTA И КНОПКА */}
        <div className="mt-16 md:mt-24 text-center">
            <p className="text-gray-500 font-bold text-[15px] md:text-xl mb-8 max-w-2xl mx-auto leading-tight uppercase tracking-tight">
               Получите подробную консультацию о том, как проходит сеанс лазерной эпиляции
            </p>
            <button className="w-full md:w-auto bg-accent hover:bg-[#ffbaba] text-black text-base md:text-lg font-black py-5 px-12 rounded-full transition-all shadow-xl shadow-accent/20 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3 mx-auto">
                <MessageCircle className="w-5 h-5" />
                Хочу получить консультацию
            </button>
        </div>

      </div>
    </section>
  );
};

export default Preparation;
