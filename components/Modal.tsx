"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'discount' | 'consult';
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '+7', method: 'WhatsApp' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setFormData({ name: '', phone: '+7', method: 'WhatsApp' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatValue = (val: string) => {
    const digits = val.replace(/\D/g, '');
    if (digits.length <= 1) return '+7';
    const main = digits.startsWith('7') ? digits.slice(1, 11) : digits.slice(0, 10);
    let res = '+7';
    if (main.length > 0) res += '-(' + main.substring(0, 3);
    if (main.length >= 3) res += ')';
    if (main.length > 3) res += '-' + main.substring(3, 6);
    if (main.length > 6) res += '-' + main.substring(6, 8);
    if (main.length > 8) res += '-' + main.substring(8, 10);
    return res;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatValue(e.target.value) });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      const lastChar = value[value.length - 1];
      if (lastChar === ')' || lastChar === '-') {
        e.preventDefault();
        const newValue = value.substring(0, value.length - 2);
        setFormData({ ...formData, phone: formatValue(newValue) });
      }
      if (value.length <= 2) e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length < 18) {
      alert("Пожалуйста, введите полный номер телефона");
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/send-telegram', {
        method: 'POST',
        body: JSON.stringify({ ...formData, type }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        setStatus('success');
      } else {
        // handle non-OK responses gracefully
        setStatus('idle');
        const text = await res.text().catch(() => 'Ошибка сервера');
        alert('Ошибка при отправке заявки: ' + text);
      }
    } catch (err) {
      setStatus('idle');
      alert('Ошибка сети при отправке. Попробуйте ещё раз.');
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 text-black" style={{ pointerEvents: 'auto' }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 z-40" onClick={onClose} style={{ pointerEvents: 'auto' }}></div>
      <div className="relative z-50 bg-white w-full max-w-[480px] rounded-[40px] p-8 md:p-12 shadow-2xl animate-in zoom-in duration-300" style={{ pointerEvents: 'auto' }}>
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-300 hover:text-black transition-colors"><X className="w-6 h-6" /></button>

        {status === 'success' ? (
          <div className="text-center py-10 flex flex-col items-center gap-4">
            <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
            <h2 className="text-2xl font-black uppercase">Спасибо!</h2>
            <p className="text-gray-500 font-medium text-center">Заявка принята. <br/> Скоро мы свяжемся с вами!</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl font-black text-center uppercase leading-tight mb-3 tracking-tighter">
              {type === 'consult' ? 'ВАМ НУЖНА КОНСУЛЬТАЦИЯ?' : 'Дарим скидку -20% на первую процедуру!'}
            </h2>
            <p className="text-center text-[12px] text-gray-400 mb-8 font-bold uppercase tracking-tight leading-tight px-4">
              {type === 'consult' 
                ? 'Оставьте заявку, и НАШ АДМИНИСТРАТОР с радостью вас проконсультирует и ответит на все вопросы!' 
                : 'Заполните форму и наш администратор свяжется с вами в рабочее время'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input required type="text" placeholder="Ваше имя" className="w-full px-6 py-4 rounded-full border-2 border-accent/20 focus:border-accent outline-none font-bold" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input required type="tel" placeholder="+7-(999)-000-00-00" value={formData.phone} className="w-full px-6 py-4 rounded-full border-2 border-accent/20 focus:border-accent outline-none font-bold" onChange={handlePhoneChange} onKeyDown={handleKeyDown} />
              
              <div className="space-y-3 px-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Как с вами связаться?</p>
                <div className="flex flex-col gap-2">
                  {['Telegram', 'WhatsApp', 'Телефон'].map((m) => (
                    <label key={m} className="flex items-center gap-3 cursor-pointer py-2">
                      <input type="radio" name="method" value={m} checked={formData.method === m} onChange={() => setFormData({...formData, method: m})} className="w-4 h-4 flex-shrink-0 accent-accent" />
                      <span className="font-bold text-gray-600">{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-3 px-4 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-accent" defaultChecked />
                <p className="text-[10px] text-gray-400 leading-tight">Согласие с <Link href="/privacy" onClick={onClose} className="text-accent underline font-bold">политикой конфиденциальности и обработкой персональных данных</Link></p>
              </label>

              <button disabled={status === 'loading'} className="w-full bg-accent hover:bg-[#ffbaba] text-black font-black py-5 rounded-full shadow-xl active:scale-95 uppercase tracking-widest text-sm transition-all">
                {status === 'loading' ? 'Отправка...' : (type === 'consult' ? 'Оставить заявку' : 'Получить скидку')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}