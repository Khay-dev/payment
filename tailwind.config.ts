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
				button: {
					blue: {
						100:"#4fa5cb",
						200:"#72B7D5"
					},
					purple:{
						100:"#8344a3",
						200:"#9b69b5"
					} ,
					text: {
						dark: "#161616",
						error: "#DA1E28",
					},
				},
				success: "#87B700",
			},
			backgroundImage: {
				"bg-hero": "url('/assets/images/bg.png')",
			},
		},
	},
	plugins: [],
} satisfies Config;

export default config;
