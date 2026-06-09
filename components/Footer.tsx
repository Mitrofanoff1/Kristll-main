import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, ExternalLink, Send } from 'lucide-react';

export default function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const yandexMap = "https://yandex.ru/maps/org/kristll_studio/61436315462/";
  const twoGis = "https://2gis.ru/spb/firm/70000001099309382";

  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-accent">Kristll Studio</h3>
            <div className="space-y-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              <p>ИП Горячева Кристина Николаевна</p>
              <p>ИНН: 780428246400</p>
              <p>ОГРНИП: 325784700084134</p>
            </div>
            <div className="flex gap-4">
              <a href="https://vk.com/kristll_studio" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center font-bold text-xs uppercase hover:bg-accent transition-all">VK</a>
              <a href="https://t.me/kristll_studio" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center font-bold text-xs uppercase hover:bg-accent transition-all"><Send className="w-4 h-4"/></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em]">Контакты</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start"><MapPin className="w-5 h-5 text-accent flex-shrink-0"/><p className="text-sm">Мурино, ул. Шувалова д.12 <br/><span className="text-gray-500 text-xs">(м. Девяткино)</span></p></div>
              <div className="flex gap-3 items-center"><Phone className="w-5 h-5 text-accent"/><a href="tel:89218758196" className="text-sm hover:text-accent font-bold">8-921-875-81-96</a></div>
              <div className="flex gap-3 items-start"><Clock className="w-5 h-5 text-accent"/><p className="text-sm font-bold text-[10px] uppercase tracking-tighter">Ежедневно, 10:00 – 22:00</p></div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em]">Маршрут</h4>
            <div className="flex flex-col gap-3 font-bold text-[10px]">
              <a href={yandexMap} target="_blank" className="flex items-center justify-between bg-white/5 p-4 rounded-2xl group">Яндекс Карты <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent" /></a>
              <a href={twoGis} target="_blank" className="flex items-center justify-between bg-white/5 p-4 rounded-2xl group">2ГИС <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent" /></a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
             <button onClick={onOpenModal} className="w-full bg-accent hover:bg-[#ffbaba] text-black font-black py-5 px-6 rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs">Записаться сейчас</button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1">*ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-2">
              <Link href="/offer" className="text-[9px] text-gray-500 underline uppercase tracking-widest font-bold">ПУБЛИЧНАЯ ОФЕРТА</Link>
              <Link href="/privacy" className="text-[9px] text-gray-500 underline uppercase tracking-widest font-bold">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ И ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</Link>
            </div>
          </div>
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.3em] font-bold">© 2024 KRISTLL STUDIO</p>
        </div>
      </div>
    </footer>
  );
}