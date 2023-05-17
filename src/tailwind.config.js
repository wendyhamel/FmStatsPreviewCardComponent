tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
			'serif': ['Lexend Deca', 'sans-serif'],
		},
		extend: {
			colors: {
				'Very dark blue': 'hsl(233, 47%, 7%)', // (main background)
				'Dark desaturated blue': 'hsl(244, 38%, 16%)', // (card background)
				'Soft violet ': 'hsl(277, 64%, 61%)', // (accent)
				'White': 'hsl(0, 0%, 100%)', // (main heading, stats)
				'Slightly transparent white': 'hsla(0, 0%, 100%, 0.75)', // (main paragraph)
				'Slightly transparent white ': 'hsla(0, 0%, 100%, 0.6)', // (stat headings)
			},
			'fontSize': {
				'small': '0.9375rem',
				'large': '1.375rem'
			}
		}
	}
}