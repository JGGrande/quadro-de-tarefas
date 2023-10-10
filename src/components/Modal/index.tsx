
import Modal from "react-modal"
import { FormContainer } from "./styles"

interface IModalCustomPops {
	isOpen: boolean;
	closeModal(): void
}

export const ModalCustom = ({ isOpen, closeModal }:IModalCustomPops) => {

	return (
		<Modal
			isOpen={isOpen}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"

		>
			<button
				type="button"
				className="react-modal-close"
				onClick={ closeModal }
			>
				X
			</button>

			<FormContainer>
				<h2>
					Cadastrar tarefa
				</h2>
				<input
					type="text"
					placeholder="Titulo"
					name="titulo"
				/>
				<textarea name="descricao" placeholder="Descrição"></textarea>

				<button type="submit">Cadastrar</button>

			</FormContainer>
		</Modal>
	)
}