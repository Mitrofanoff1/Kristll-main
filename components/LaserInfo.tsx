import React from 'react';
import { ShieldCheck, Snowflake, Star, Zap } from 'lucide-react';

const LaserInfo = () => {
  const features = [
    {
      title: "Эффективность и безопасность:",
      text: "Благодаря трем видам волн, лазер максимально эффективно воздействует на волосяные фолликулы, не повреждая кожу.",
      icon: <ShieldCheck className="text-accent w-6 h-6" />
    },
    {
      title: "Абсолютно без боли:",
      text: "Манипула с контактным охлаждением и температурой до –20°C. Даже в самых чувствительных зонах вы будете чувствовать лишь лёгкое тепло и прохладные прикосновения, а не боль.",
      icon: <Snowflake className="text-accent w-6 h-6" />
    },
    {
      title: "Качество и комфорт:",
      text: "Уже после первого сеанса оцените полученный результат. Для закрепления эффекта рекомендуется курс из 8-12 процедур.",
      icon: <Star className="text-accent w-6 h-6" />
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          
          {/* КОНТЕНТНАЯ ЧАСТЬ */}
          <div className="w-full lg:w-3/5 z-10 flex flex-col">
            
            {/* 1. Заголовок */}
            <h2 className="text-[1.4rem] md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-6 md:mb-8 text-[#1a1a1a] text-center lg:text-left">
              Используем сертифицированный диодный лазер <br className="hidden md:block"/>
              <span className="text-accent text-[1.2rem] md:text-5xl">Pioneer Ozero Khanka 800W</span>
            </h2>

            {/* 2. ФОТО АППАРАТА ДЛЯ МОБИЛЬНЫХ (Сразу после заголовка, уменьшено до 220px) */}
            <div className="lg:hidden w-full mb-8">
              <div className="relative aspect-[4/5] max-w-[220px] mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-[30px] flex items-center justify-center overflow-hidden">
                <div className="text-center p-4">
                  <Zap className="w-6 h-6 text-gray-200 mx-auto mb-2" />
                  <p className="text-gray-400 font-bold text-[8px] uppercase tracking-widest">Pioneer Laser</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full border border-accent/10 shadow-sm">
                  <p className="text-[7px] font-black uppercase tracking-widest text-accent">USA Tech</p>
                </div>
              </div>
            </div>

            {/* 3. Описание технологий */}
            <div className="mb-8 lg:mb-12 text-center lg:text-left">
              <p className="text-gray-600 text-[15px] md:text-lg leading-relaxed font-medium mb-4">
                Главная особенность <span className="font-bold text-black">Pioneer Ozero Khanka</span> — гибридный излучатель компании <span className="text-accent font-black uppercase tracking-widest text-[11px] md:text-sm">Coherent (USA)</span>, работающий сразу на трех видах волн: <span className="bg-accent/10 px-2 py-0.5 rounded text-accent font-bold">755 / 808 / 1064нм</span>.
              </p>
              
              {/* Этот блок скрыт на мобильных по твоему запросу */}
              <p className="hidden lg:block text-gray-500 text-sm md:text-base leading-relaxed border-l-4 border-accent/20 pl-6 italic-none">
                Благодаря этому, он эффективно удаляет любые виды волос на коже всех типов. Аппарат соответствует всем международным стандартам качества и безопасности.
              </p>
            </div>

            {/* 4. СПИСОК ПЛАШЕК (Преимущества) */}
            <div className="space-y-6 md:space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[14px] md:text-lg text-gray-700 leading-tight md:leading-relaxed text-left">
                      <span className="font-black text-black uppercase tracking-tight mr-2">{item.title}</span>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (ТОЛЬКО ДЛЯ ДЕСКТОПА) */}
          <div className="hidden lg:flex lg:w-2/5 flex-col gap-8">
            {/* Основное фото аппарата */}
            <div className="relative aspect-[4/5] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden shadow-sm">
               <div className="text-center p-6">
                  <Zap className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                  <p className="text-gray-400 font-medium text-sm">Фото лазера Pioneer</p>
               </div>
               <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-accent/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">USA Technology</p>
               </div>
            </div>

            {/* Фото манипулы (на мобильных этого блока не будет) */}
            <div className="relative w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-[30px] flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 font-medium text-xs text-center px-4">Фото манипулы (охлаждение)</p>
                <div className="absolute bottom-4 left-4 bg-accent px-3 py-1 rounded-full">
                    <p className="text-[9px] font-bold text-black uppercase tracking-tighter">Охлаждение до -20°C</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LaserInfo;
