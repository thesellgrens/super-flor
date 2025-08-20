import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				superman: {
					red: 'hsl(var(--superman-red))',
					'red-light': 'hsl(var(--superman-red-light))',
					'red-dark': 'hsl(var(--superman-red-dark))',
					blue: 'hsl(var(--superman-blue))',
					'blue-light': 'hsl(var(--superman-blue-light))',
					'blue-dark': 'hsl(var(--superman-blue-dark))',
					yellow: 'hsl(var(--superman-yellow))',
					'yellow-light': 'hsl(var(--superman-yellow-light))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)'
			},
			boxShadow: {
				'hero': 'var(--shadow-hero)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'sans': ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'balloon-float-1': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) translateX(10px) rotate(2deg)'
					},
					'66%': {
						transform: 'translateY(-10px) translateX(-5px) rotate(-1deg)'
					}
				},
				'balloon-float-2': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-15px) translateX(-8px) rotate(-2deg)'
					},
					'66%': {
						transform: 'translateY(-25px) translateX(12px) rotate(3deg)'
					}
				},
				'balloon-float-3': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-30px) translateX(5px) rotate(1deg)'
					},
					'66%': {
						transform: 'translateY(-5px) translateX(-10px) rotate(-2deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'balloon-float-1': 'balloon-float-1 6s ease-in-out infinite',
				'balloon-float-2': 'balloon-float-2 8s ease-in-out infinite',
				'balloon-float-3': 'balloon-float-3 7s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;