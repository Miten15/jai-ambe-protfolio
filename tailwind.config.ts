import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        troy: ["Troy Sans", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 1.3rem + 1vw, 2rem)",
        "fluid-3xl": "clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)",
        "fluid-4xl": "clamp(2.25rem, 1.9rem + 1.75vw, 3rem)",
        "fluid-5xl": "clamp(3rem, 2.5rem + 2.5vw, 4rem)",
        "fluid-6xl": "clamp(3.75rem, 3rem + 3.75vw, 5rem)",
        "fluid-7xl": "clamp(4.5rem, 3.5rem + 5vw, 6rem)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        periwinkle: {
          DEFAULT: "#C6D3FB",
          100: "#061954",
          200: "#0c33a8",
          300: "#1e52ef",
          400: "#7293f5",
          500: "#c6d3fb",
          600: "#d1dcfc",
          700: "#dde5fd",
          800: "#e8edfd",
          900: "#f4f6fe",
        },
        periwinkle2: {
          DEFAULT: "#ACB5F7",
          100: "#08104c",
          200: "#0f1f98",
          300: "#172fe4",
          400: "#5f70ef",
          500: "#acb5f7",
          600: "#bcc3f8",
          700: "#cdd2fa",
          800: "#dee1fc",
          900: "#eef0fd",
        },
        alice_blue: {
          DEFAULT: "#DDEBFE",
          100: "#03285c",
          200: "#0650b8",
          300: "#247df8",
          400: "#80b3fb",
          500: "#ddebfe",
          600: "#e3eefe",
          700: "#eaf3fe",
          800: "#f1f7ff",
          900: "#f8fbff",
        },
        lavender: {
          DEFAULT: "#D9E7FD",
          100: "#052559",
          200: "#094ab2",
          300: "#2675f4",
          400: "#7faef8",
          500: "#d9e7fd",
          600: "#e0ebfd",
          700: "#e8f0fe",
          800: "#eff5fe",
          900: "#f7faff",
        },
        periwinkle3: {
          DEFAULT: "#B9C8FE",
          100: "#011456",
          200: "#0328ad",
          300: "#0c40fb",
          400: "#6284fd",
          500: "#b9c8fe",
          600: "#c7d3fe",
          700: "#d5defe",
          800: "#e3e9ff",
          900: "#f1f4ff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "text-shimmer": {
          "0%": {
            "background-position": "-200% 0",
          },
          "100%": {
            "background-position": "200% 0",
          },
        },
        "loader-spin": {
          "0%": {
            transform: "rotate(-360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "loader-inner-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "loader-glow": {
          "0%": {
            "box-shadow": "0px 0px 20px rgba(172, 181, 247, 0.8)",
            "border-color": "rgb(172, 181, 247)",
          },
          "50%": {
            "box-shadow": "0px 0px 40px rgba(185, 200, 254, 0.9)",
            "border-color": "rgb(185, 200, 254)",
          },
          "100%": {
            "box-shadow": "0px 0px 20px rgba(172, 181, 247, 0.8)",
            "border-color": "rgb(172, 181, 247)",
          },
        },
        "loader-fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "text-shimmer": "text-shimmer 2s ease-in-out infinite",
        "loader-spin": "loader-spin 30s linear infinite",
        "loader-inner-spin": "loader-inner-spin 10s linear infinite",
        "loader-glow": "loader-glow 3s ease-in-out infinite",
        "loader-fade-in": "loader-fade-in 2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
