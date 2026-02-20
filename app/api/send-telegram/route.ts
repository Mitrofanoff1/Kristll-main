import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, method, type } = await req.json();

    const TOKEN = "8407225561:AAF2yO12oQnYN78qtZaFuZiRF2UOFeFjCCg"; 
    const CHAT_ID = "7789174574"; 
    
    const emoji = type === 'consult' ? '❓' : '🆕';
    const title = type === 'consult' ? 'ЗАЯВКА НА КОНСУЛЬТАЦИЮ' : 'ЗАЯВКА НА ЗАПИСЬ (СКИДКА)';

    const text = `
${emoji} **${title}**
👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Связь: ${method}
    `;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown"
      })
    });

    if (response.ok) return NextResponse.json({ success: true });
    return NextResponse.json({ success: false }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}