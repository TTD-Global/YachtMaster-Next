/** @type {import('tailwindcss').Config} */	
tailwind.config = {
  theme: {
	typography: {
      p: {
        fontSize: {
          sm: ['16px', { lineHeight: '1.5' }],
          md: ['200px', { lineHeight: '1.5' }],
        }
      }
    },
    extend: {
          colors: {
            main: '#1F2B8F',
			black: '#171717',
			white: '#fff',
			grey: '#787878',
          }
        }
  },
};
