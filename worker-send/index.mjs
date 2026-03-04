export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      if (request.method !== 'POST') {
        return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
      }

      const data = await request.json();
      const { name, phone, method, type } = data;

      // Read token and chat_id from environment variables
      const TELEGRAM_TOKEN = env.TELEGRAM_TOKEN || "";
      const CHAT_ID = env.CHAT_ID || "";

      if (!TELEGRAM_TOKEN || !CHAT_ID) {
        return new Response(JSON.stringify({ success: false, message: 'Missing environment variables' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }

      const emoji = type === 'consult' ? '❓' : '🆕';
      const title = type === 'consult' ? 'ЗАЯВКА НА КОНСУЛЬТАЦИЮ' : 'ЗАЯВКА НА ЗАПИСЬ (СКИДКА)';

      const text = `${emoji} *${title}*\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Связь: ${method}`;

      const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' })
      });

      if (!tgRes.ok) {
        const textErr = await tgRes.text().catch(() => 'tg error');
        return new Response(JSON.stringify({ success: false, message: 'Telegram API error', detail: textErr }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }

      return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, message: err.message || String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }
};
