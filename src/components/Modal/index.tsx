
import Modal from "react-modal"
import { FormEvent, useContext, useState } from "react"
import { FormContainer } from "./styles"
import { TaskContext } from "../../context/taskContext";


interface IModalCustomPops {
	isOpen: boolean;
	closeModal(): void
}

export const ModalCustom = ({ isOpen, closeModal }:IModalCustomPops) => {
	const { createTask } = useContext(TaskContext)

	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	async function handleCreateTask(event: FormEvent<HTMLFormElement>){
		event.preventDefault();

		await createTask({
			title,
			description
		})
		setTitle("")
		setDescription("")

		closeModal()
	}


	return (
		<Modal
			isOpen={isOpen}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
			onRequestClose={closeModal}
		>
			<button
				type="button"
				className="react-modal-close"
				onClick={ closeModal }
			>
				X
			</button>

			<FormContainer
				onSubmit={handleCreateTask}
			>
				<h2>
					Cadastrar Task
				</h2>
				<input
					type="text"
					placeholder="Titulo"
					name="titulo"
					required
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>
				<textarea
					name="descricao"
					placeholder="Descrição"
					required
					value={description}
					onChange={({ target })=> setDescription(target.value)}
				></textarea>

				<button type="submit">Cadastrar</button>

			</FormContainer>
		</Modal>
	)
}