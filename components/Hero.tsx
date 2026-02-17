import React from 'react';
import Image from 'next/image';
import { Zap, Eye, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 lg:pt-20 lg:pb-32">
      <Sparkles className="absolute top-6 right-6 text-accent/40 w-6 h-6 lg:w-12 lg:h-12 -z-10 animate-pulse" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4 text-black">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full lg:w-3/5 z-10 flex flex-col text-center lg:text-left">
            <div className="inline-block self-center lg:self-start mb-4">
              <span className="bg-accent px-4 py-1.5 rounded-full text-[11px] md:text-sm font-bold shadow-sm uppercase tracking-wide">
                Эпиляция в Мурино всего от 480 руб.
              </span>
            </div>
            <h1 className="text-[1.8rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tighter">
              Избавьтесь от нежелательных волос с помощью <br className="hidden sm:block"/> 
              <span className="text-accent">лазерной эпиляции</span>
            </h1>
            <p className="text-[15px] md:text-xl text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 font-medium leading-snug">
              Видимый результат уже после 1 сеанса. <br className="hidden md:block" />
              Гарантируем безболезненную процедуру — или вернем деньги.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button onClick={onOpenModal} className="w-full sm:w-64 bg-accent hover:bg-[#ffbaba] font-extrabold py-4 rounded-full transition-all shadow-md active:scale-95 uppercase tracking-wider text-base">Получить скидку -20%</button>
              <button className="ms_booking w-full sm:w-64 bg-white border-2 border-gray-100 text-gray-800 font-extrabold py-4 rounded-full transition-all active:scale-95 uppercase tracking-wider text-base">Выбрать услугу</button>
            </div>
            <div className="lg:hidden w-full mb-10 relative">
                <div className="relative w-full aspect-[4/3] max-w-[340px] mx-auto overflow-hidden rounded-[30px] shadow-lg border border-gray-100 bg-gray-50">
                    <Image src="/hero-mobile.webp" alt="Кристина" fill className="object-cover object-top" priority unoptimized />
                </div>
            </div>
            <div className="flex flex-col gap-4 text-left max-w-2xl mx-auto lg:mx-0 border-t border-gray-50 pt-6">
              <div className="flex items-start gap-3 text-gray-600"><div className="bg-accent/20 p-2 rounded-lg mt-0.5"><CheckCircle2 className="text-accent w-4 h-4" /></div><p className="text-[14px] md:text-base leading-tight font-bold">Гладкая кожа без раздражений, порезов и вросших волос</p></div>
              <div className="flex items-start gap-3 text-gray-600"><div className="bg-accent/20 p-2 rounded-lg mt-0.5"><Eye className="text-accent w-4 h-4" /></div><p className="text-[14px] md:text-base leading-tight font-bold">Массаж для глаз от Yamaguchi во время сеанса</p></div>
              <div className="flex items-start gap-3 text-gray-600"><div className="bg-accent/20 p-2 rounded-lg mt-0.5"><Zap className="text-accent w-4 h-4" /></div><p className="text-[14px] md:text-base leading-tight font-bold">Эпиляция диодным лазером с гибридным излучателем Coherent (USA)</p></div>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-2/5 justify-end sticky top-20">
             <div className="relative w-full aspect-[4/5] max-w-[420px] overflow-hidden rounded-[40px] shadow-2xl border border-accent/10 bg-gray-50">
                <Image src="/hero-desktop.webp" alt="Кристина" fill className="object-cover" priority unoptimized />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[30px] shadow-2xl border border-accent/10">
                    <p className="text-xl font-bold text-gray-900 mb-1 leading-none">Кристина Горячева</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">ВЛАДЕЛИЦА KRISTLL STUDIO</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}