"use client";

import React, { useState } from 'react';
import { X, Phone, Globe, MessageSquare } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      id: 'yc',
      icon: <Globe size={24} />,
      label: 'ОНЛАЙН ЗАПИСЬ',
      color: 'bg-black',
      href: 'https://n1385499.yclients.com',
      className: 'ms_booking'
    },
    {
      id: 'phone',
      icon: <Phone size={24} />,
      label: 'ПОЗВОНИТЬ',
      color: 'bg-[#333333]',
      href: 'tel:+79218758196'
    },
    {
      id: 'wa',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97A10 10 0 1012 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-7 0c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      label: 'WHATSAPP',
      color: 'bg-[#25D366]',
      href: 'https://wa.me/79218758196'
    },
    {
      id: 'vk',
      img: "/icon-vk.webp", // ТВОЯ КАРТИНКА
      label: 'ВКОНТАКТЕ',
      color: 'bg-[#0077FF]',
      href: 'https://vk.com/kristll_studio'
    },
    {
      id: 'tg',
      img: "/icon-tg.webp", // ТВОЯ КАРТИНКА
      label: 'TELEGRAM',
      color: 'bg-[#24A1DE]',
      href: 'https://t.me/kristll_studio'
    },
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 md:gap-5 transition-all ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      
      {/* Список кнопок */}
      <div className={`flex flex-col items-end gap-3 md:gap-4 transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-12 scale-50 pointer-events-none'}`}>
        {contacts.map((contact, index) => (
          <div 
            key={contact.id} 
            className="flex items-center gap-3 group"
            style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
          >
            {/* Лейблы кнопок */}
            <span className="bg-white text-black text-[10px] font-black py-2 px-4 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest">
              {contact.label}
            </span>
            
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contact.color} ${contact.className || ''} w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-90 transition-all overflow-hidden`}
            >
              {contact.img ? (
                /* Если есть картинка - выводим её с отступом для ровности */
                <div className="w-full h-full p-2.5 md:p-3">
                  <img src={contact.img} alt={contact.label} className="w-full h-full object-contain" />
                </div>
              ) : (
                /* Если нет картинки - выводим системную иконку */
                <div className="flex items-center justify-center">
                  {contact.icon}
                </div>
              )}
            </a>
          </div>
        ))}
      </div>

      {/* Основная кнопка (Триггер) */}
      <div className="relative flex items-center">
        
        {/* Темная прозрачная плашка (ТОЛЬКО ДЛЯ ПК) */}
        {!isOpen && (
          <div className="hidden md:block absolute right-full mr-5 whitespace-nowrap bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-black py-3 px-6 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 tracking-widest uppercase border border-white/10 pointer-events-none">
            Напишите нам!
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-zinc-900/80 rotate-45 border-r border-t border-white/10"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 hover:scale-105 active:scale-90 border-4 border-white pointer-events-auto ${isOpen ? 'bg-white text-black rotate-180' : 'bg-accent text-white'}`}
        >
          {isOpen ? (
            <X className="w-8 h-8 md:w-9 md:h-9 stroke-[3]" />
          ) : (
            <MessageSquare className="w-8 h-8 md:w-9 md:h-9 fill-current" />
          )}
          
          {/* Редкая пульсация вокруг (раз в 4 секунды) */}
          {!isOpen && (
            <div className="absolute inset-[-4px] rounded-full bg-accent animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30 -z-10"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;