import { createMuiTheme } from "@material-ui/core/styles";

/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop
$breakpoint arguement choices:
- phone
- tab-port
- tab-land
- big-desktop
ORDER: Base + typography > general layout + grid > page layout > components
1em = 16px
*/

// Create a theme instance.
let theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					WebkitFontSmoothing: "auto",
					scrollbarWidth: "none",

					// styling the scrollbar
					"&::-webkit-scrollbar": {
						width: "6px !important",
					},

					"&::-webkit-scrollbar-track ": {
						boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)  !important",
					},

					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "#249bee !important",
						outline: "1px solid #249bee",
					},

					fontSize: "62.5%",
					"@media only screen and (min-width:112em)": { fontSize: "67%" },
					"@media only screen and (max-width:75em)": { fontSize: "56.25%" },
					"@media only screen and (max-width:56.25em)": { fontSize: "50%" },
					// '@media only screen and (max-width:37.5em)': { fontSize: '47.5%' },
				},

				body: {
					padding: "0 !important",
					overflowX: "hidden",
				},
			},
		},
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1330,
			xl: 1920,
		},
	},
});

export default theme;
