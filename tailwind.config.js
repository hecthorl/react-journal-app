module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         width: {
            fit: 'fit-content',
            side: '700px',
            notes: '800px',
         },
         height: {
            notes: '700px',
         },
         maxHeight: {
            side: '600px',
         },
      },
   },
   variants: {
      scrollbar: ['rounded'],
   },
   plugins: [require('tailwind-scrollbar')],
};
