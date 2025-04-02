const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Assuming default Shadcn setup
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other directories if needed, e.g., "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: { // Added container settings from design_spec
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: { // Added colors from design_spec
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // Using CSS variable
          foreground: "hsl(var(--primary-foreground))",
          // Direct values from design_spec for reference/potential direct use
          // DEFAULT: "#2D6A4F",
          // 50: "#D8F3DC",
          // 100: "#B7E4C7",
          // 200: "#95D5B2",
          // 300: "#74C69D",
          // 400: "#52B788",
          // 500: "#2D6A4F", // Matches DEFAULT
          // 600: "#1B4332",
          // 700: "#081C15",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Using CSS variable
          foreground: "hsl(var(--secondary-foreground))",
          // Direct values
          // DEFAULT: "#1A759F",
          // 50: "#CAF0F8",
          // ... other blue shades
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Using CSS variable
          foreground: "hsl(var(--destructive-foreground))",
          // DEFAULT: "#D62828",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Using CSS variable
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Using CSS variable
          foreground: "hsl(var(--accent-foreground))",
           // Direct values
          // DEFAULT: "#D4A373",
          // 50: "#FEFAE0",
          // ... other earth tones
        },
        popover: { // Common Shadcn additions
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: { // Common Shadcn additions
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Functional Colors (Directly mapped)
        success: {
          DEFAULT: "#38B000",
        },
        warning: {
          DEFAULT: "#FFAA00",
        },
        info: {
          DEFAULT: "#4361EE",
        },
        // Zone-specific colors
        zones: {
          oak: "#588157",
          oakHornbeam: "#3A5A40",
          firSpruce: "#344E41",
          spruce: "#1B4332",
          dwarfPine: "#6B705C",
        },
      },
      borderRadius: { // Added border radius from design_spec
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: { // Added font families from design_spec
        sans: ["Inter", ...fontFamily.sans],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
      keyframes: { // Common Shadcn additions
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: { // Common Shadcn additions
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Common Shadcn addition
}