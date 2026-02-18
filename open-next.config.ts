// open-next.config.ts
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    // Используем Cloudflare runtime для SSR/API
    runtime: "cloudflare",
    // Если есть Server Actions или API routes — включить
    override: {
      // Пример: для твоего /api/send-telegram
      // wrapper: "cloudflare", // если нужно кастомный wrapper
    },
  },
  // Если хочешь отключить image optimization (если не используешь next/image)
  imageOptimization: false,
};

export default config;