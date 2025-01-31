import Modal from "react-modal";
import { Header } from "./components/Header"
import { TodoList } from "./components/TodoList"
import { StyleGlobal } from "./styles/styles"
import { ModalCustom } from "./components/Modal";
import { useState } from "react";
import { TasksProvider } from "./context/taskContext";

Modal.setAppElement('#root');

function App() {

	const [modalIsVisible, setModalVisible] = useState<boolean>(true);

	function handleOpenModal(){
		setModalVisible(true);
	}
	function handleCloseModal(){
		setModalVisible(false);
	}

  return (
    <>
		<TasksProvider>
				<StyleGlobal />
				<Header openModal={handleOpenModal} />
				<TodoList />

				<ModalCustom isOpen={modalIsVisible} closeModal={handleCloseModal} />
			</TasksProvider>
		</>
  )
}

export default App
