import styled from "styled-components";

export const Container = styled.header`
	background-color: var(--ciano);
	padding: 1rem 1rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
			color: black;
			font-family: sans-serif;
	}

	div{
		button{
			border: 0;
			font-size: 16px;
			font-family: sans-serif;
			background-color: transparent;
		}
	}
`