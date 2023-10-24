import { Container } from "./style"

interface IHeaderProps{
	openModal(): void
}


export const Header = ({ openModal }: IHeaderProps) => {
	return(
		<>
			<Container>
				<h1>Quadro de Tasks</h1>
				<div>
					<button
						type="button"
						onClick={ openModal }
					>
						Nova Task
					</button>
				</div>
			</Container>
		</>
	)
}