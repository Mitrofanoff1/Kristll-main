import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Send } from 'lucide-react';

export default function Footer() {
  const vkLink = "https://vk.com/kristll_studio";
  const tgLink = "https://t.me/kristll_studio";
  const yandexMap = "https://yandex.ru/maps/org/kristll_studio/61436315462/?ll=30.428688%2C60.055232&utm_campaign=v1&utm_medium=qr_image&utm_source=qr&z=16";
  const twoGis = "https://2gis.ru/spb/firm/70000001099309382";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. ЮР ДАННЫЕ */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-accent">Kristll Studio</h3>
            <div className="space-y-1 text-[10px] text-gray-500 font-medium">
              <p>ИП Горячева Кристина Николаевна</p>
              <p>ИНН: 780428246400</p>
              <p>ОГРНИП: 325784700084134</p>
            </div>
            <div className="flex gap-4">
              <a href={vkLink} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <span className="font-bold text-[10px] uppercase">VK</span>
              </a>
              <a href={tgLink} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. КОНТАКТЫ */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Контакты</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Мурино, ул. Шувалова д.12 <br/>
                  <span className="text-gray-500">(м. Девяткино)</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:89218758196" className="text-sm text-gray-300 hover:text-accent font-bold">
                  8-921-875-81-96
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Ежедневно, 10:00 – 22:00 <br/>
                  <span className="text-[10px] uppercase text-gray-500">По записи</span>
                </p>
              </div>
            </div>
          </div>

          {/* 3. КАРТЫ */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Маршрут</h4>
            <div className="flex flex-col gap-3">
              <a href={yandexMap} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all">
                <span className="font-bold text-xs uppercase tracking-widest">Яндекс Карты</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </a>
              <a href={twoGis} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all">
                <span className="font-bold text-xs uppercase tracking-widest">2ГИС</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </a>
            </div>
          </div>

          {/* 4. КНОПКА */}
          <div className="flex flex-col justify-end">
             <button className="w-full bg-accent hover:bg-[#ffbaba] text-black font-black py-5 px-6 rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs">
                Записаться
             </button>
          </div>

        </div>

        {/* НИЖНЯЯ ЧАСТЬ */}
        <div className="pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-4">
            *Имеются противопоказания, необходима консультация специалиста
          </p>
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.3em]">
            © 2024 KRISTLL STUDIO. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
