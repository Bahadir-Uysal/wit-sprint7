import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Uygulamanızın çalıştığı URL
    setupNodeEvents(on, config) {
      // Buraya gerekli event listener'ları ekleyebilirsiniz
    },
  },
});
