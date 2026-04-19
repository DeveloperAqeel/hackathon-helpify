/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F2EB', // Warm beige background
        card: '#FFFFFF', // Clean white for cards
        primary: '#1A2A26', // Deep forest green for dark blocks
        accent: '#118C7E', // Teal for primary buttons and badges
        'accent-hover': '#0E7A6E',
        textMain: '#1A2A26', // Dark text
        textMuted: '#6B7280', // Gray text
        success: '#E8F5E9', // Light green background for solved badge
        'success-text': '#2E7D32',
        warning: '#FFF3E0', // Light orange background for medium urgency
        'warning-text': '#E65100',
        danger: '#FFEBEE', // Light red for high urgency
        'danger-text': '#C62828',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

