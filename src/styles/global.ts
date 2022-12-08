import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	:root {
		--background: #2a2a2b;
		--background-header: #1D1D1E;
		--background-light: #424242;

		--nav-side: #311B92;
		--pink-light: #ffffff;

		--text-purple: #651FFF;
		--text-back: #D1C4E9;
		--text-grey: #B3B3B3;
		--text-fundo: rgba(0, 0, 0, 0.20);
		--line-purple: #7221EC;
		--gradient-7: linear-gradient(to bottom right, rgba(156, 39, 176, 0.3), rgba(101, 31, 255, 0.3));
		--gradient-10: linear-gradient(to bottom right, rgba(156, 39, 176, 1), rgba(101, 31, 255, 1));
		--line: linear-gradient(to right, rgba(156, 39, 176, 1), rgba(101, 31, 255, 1));
		
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

  

	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		color: #f1f0f0;
		background: #161515;
	}

	button {
		cursor: pointer;
	}

	.overlayModalContent {

		position: fixed;
		top: 6.9rem;
		bottom: 0;
		right: 3rem;
		left: 0;

		display: flex;
		justify-content: flex-end;
    }

    .modalContent {
		display: flex;
		background: var(--background-header);
		width: 20rem;
		height: 15rem;
		flex-direction: column;
		gap: 1.5rem;
      padding: 1rem 1rem;
      border-bottom-left-radius: 2rem;
		border-bottom-right-radius: 2rem;
		border-top: 8px solid #141414;

		input[type="color"] {
			width: 50px;
			height: 50px;
			border: none;
			background: none;
			margin-right: 1rem;
			
		}

		button {
			width: 5rem;
			height: 3rem;
			background: var(--gradient-10);
			border: 0;
			font-size: 20px;
			font-weight: bold;
			align-self: center;
         box-shadow: 0 0 0 1;
			border-radius: 1rem;
			padding: 0.5rem 1rem;
		}

		div {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 1.5rem;

			button {
				width: 2.5rem;
				height: 2.5rem;
				border: 0;
				border-radius: 0.5rem;
			
				&:hover {
					border: 2px solid #2dff03;
				}
			}

			button.themRed {
				background: #ca1515;
			}
			button.themYellow {
				background: #f3d21a;
			}
			button.themPurple {
				background: #8c2ec2;
			}
			button.themCian {
				background: #35d7e2;
			}
		}
    }

`