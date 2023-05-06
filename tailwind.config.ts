import type { Config } from "tailwindcss";

export default {
   content: ["./app/**/*.{ts,tsx}"],
   theme: {
      extend: {
         container: {
            center: true,
          },
      },
   },
   plugins: [],
} satisfies Config;
