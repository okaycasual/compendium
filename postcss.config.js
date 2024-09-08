
const tailwind_theme = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		extend: {
		  fontFamily: {
			serif: ['Lora Variable', ...tailwind_theme.fontFamily.sans],
		  },
		},
	},
	plugins: ['tailwindcss', 'autoprefixer'],
};