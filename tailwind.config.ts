import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--gradient-primary)",
        'primary-hover': "var(--gradient-primary-hover)",
        secondary: "var(--gradient-secondary)",
        'secondary-hover': "var(--gradient-secondary-hover)",
        accent: "var(--color-accent-1)",
        "accent-dark": "var(--color-accent-1-dark)",
        accent2: "var(--color-accent-2)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "var(--footer-background)",
        // card: "var(--color-card)"
      },
      backgroundColor: {
        primary: "var(--gradient-primary)",
        'primary-hover': "var(--gradient-primary-hover)",
        secondary: "var(--gradient-secondary)",
        'secondary-hover': "var(--gradient-secondary-hover)",
        accent: "var(--color-accent-1)",
        "accent-dark": "var(--color-accent-1-dark)",
        accent2: "var(--color-accent-2)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "var(--footer-background)",
        // card: "var(--color-card)"
      },
      borderColor: {
        primary: "var(--gradient-primary)",
        'primary-hover': "var(--gradient-primary-hover)",
        secondary: "var(--gradient-secondary)",
        'secondary-hover': "var(--gradient-secondary-hover)",
        accent: "var(--color-accent-1)",
        "accent-dark": "var(--color-accent-1-dark)",
        accent2: "var(--color-accent-2)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "var(--footer-background)",
        // card: "var(--color-card)"
      },
      fill: {
        primary: "var(--gradient-primary)",
        secondary: "var(--gradient-secondary)",
        accent: "var(--color-accent-1)",
        "accent-dark": "var(--color-accent-1-dark)",
        accent2: "var(--color-accent-2)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "var(--footer-background)",
        // card: "var(--color-card)"
      },
      fontFamily: {
        fira: ['var(--font-fira-sans)'], // Add Fira Sans to the theme
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0, 0, 0, 0.2)',
        footer: "var(--footer-shadow)"
      }
      // spacing: {
      //   'tpl-container': '16px',
      // },
      // maxWidth: {
      //   'tpl-container': '1200px',
      // },
      // minWidth: {
      //   'tpl-container': '1000px',
      // }
    },
  },
  plugins: [],
};
export default config;
