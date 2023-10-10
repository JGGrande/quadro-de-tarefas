import { Container } from "./style"

interface IHeaderProps{
	openModal(): void
}


export const Header = ({ openModal }: IHeaderProps) => {
	return(
		<>
			<Container>
				<h1>Quadro de tarefas</h1>
				<div>
					<button
						type="button"
						onClick={ openModal }
					>
						Nova tarefa
					</button>
				</div>
			</Container>
		</>
	)
}