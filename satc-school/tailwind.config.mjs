const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-pink-600',
    'text-blue-700',
    'text-green-700',
    'text-purple-700',
    'text-pink-700',
    'text-blue-400',
    'text-green-400',
    'text-purple-400',
    'text-pink-400',
    'border-blue-300',
    'border-green-300',
    'border-purple-300',
    'border-pink-300',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};

export default config;
