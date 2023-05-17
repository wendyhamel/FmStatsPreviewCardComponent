tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
			'serif': ['Lexend Deca', 'sans-serif'],
		},
		extend: {
			colors: {
				'blue-dark': 'hsl(233, 47%, 7%)', // (main background)
				'blue-des': 'hsl(244, 38%, 16%)', // (card background)
				'violet': 'hsl(277, 64%, 61%)', // (accent)
				'white': 'hsl(0, 0%, 100%)', // (main heading, stats)
				'white-op-75': 'hsla(0, 0%, 100%, 0.75)', // (main paragraph)
				'white-op-60': 'hsla(0, 0%, 100%, 0.6)', // (stat headings)
			},
			'spacing': {
				'22': '5.5rem'
			},
			'fontSize': {
				'small': '0.9375rem',
				'large': '1.75rem'
			}
		}
	}
}