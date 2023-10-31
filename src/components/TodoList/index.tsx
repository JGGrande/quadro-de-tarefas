import { TaskContext } from "../../context/taskContext";
import { Container } from "./style"
import { useContext } from "react"

export const TodoList = () => {
	const { tasks } = useContext(TaskContext);

	return(
		<>
			<Container>
				<ul>
					<h3>
						Quadro 1
					</h3>
					{
						tasks.map((task, index) => {

							return(

									<li
										key={index}
									>
										<div>
											<h4>
												{task.title}
											</h4>
											<p>{task.description}</p>
										</div>
									</li>

							)
						})
					}

				</ul>
			</Container>
		</>
	)
}