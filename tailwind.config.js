const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2D6A4F",
          foreground: "hsl(var(--primary-foreground))",
          50: "#D8F3DC",
          100: "#95D5B2",
          200: "#52B788",
          300: "#2D6A4F",
          400: "#1B4332",
        },
        secondary: {
          DEFAULT: "#1A759F",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#90E0EF",
          100: "#00B4D8",
          200: "#0077B6",
        },
        accent: {
          DEFAULT: "#D4A373",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        success: { DEFAULT: "#38B000" },
        warning: { DEFAULT: "#FFAA00" },
        info: { DEFAULT: "#4361EE" },
        zones: {
          oak: "#588157",
          oakHornbeam: "#3A5A40",
          firSpruce: "#344E41",
          spruce: "#1B4332",
          dwarfPine: "#6B705C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}