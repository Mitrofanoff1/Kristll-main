// open-next.config.ts
export default {
  default: {
    override: {
      wrapper: "cloudflare-node",       // Node.js runtime для SSR и API routes
      converter: "edge",                // Конвертер для edge-фич
      proxyExternalRequest: "fetch",    // Прокси внешних запросов
      incrementalCache: "dummy",        // Кэш (dummy — заглушка для простоты)
      tagCache: "dummy",
      queue: "dummy"                    // Очередь (dummy если не используешь revalidate)
    }
  },
  // Для middleware (если есть)
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy"
    }
  },
  // Отключаем оптимизацию изображений, если не используешь next/image
  imageOptimization: false
};