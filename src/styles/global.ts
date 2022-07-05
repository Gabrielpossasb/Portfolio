import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #303030;
		--background-header: #1D1D1E;
		--background-light: #424242;

		--nav-side: #311B92;
		--pink-light: #E1BEE7;

		--text-purple: #651FFF;
		--text-back: #D1C4E9;
		--text-grey: #B3B3B3;
		
		
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93,75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
  }

  body {
		background: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	button {
		cursor: pointer;
	}

`