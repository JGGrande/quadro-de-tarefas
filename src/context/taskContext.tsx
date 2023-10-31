import axios from "axios";
import { createContext, ReactNode, useState, useEffect } from "react";

interface ITask{
	title: string;
	description: string;
}

interface ITaskContexProps {
	tasks: Array<ITask>
	createTask(task: ITask): Promise<ITask>
}

export const TaskContext = createContext({} as ITaskContexProps);

interface ITaskProviderProps {
	children: ReactNode
}


export function TasksProvider({ children }:ITaskProviderProps) {

	const [tasks, setTasks] = useState<ITask[]>([]);

	async function handleGetTasks(){
		const tasksData = await axios.get('/api/tasks');
		const tasks:ITask[] = tasksData.data.tasks
		setTasks(tasks)
	}

	async function handleCreateTask(data: ITask): Promise<ITask> {
		const apiResponse =  await axios.post('/api/tasks', data);
		handleGetTasks()
		return apiResponse.data.tasks
	}

	useEffect(()=>{
		handleGetTasks()
	},[])

	return(
		<TaskContext.Provider value={{ tasks, createTask: handleCreateTask }} >
			{ children }
		</TaskContext.Provider>
	);
}