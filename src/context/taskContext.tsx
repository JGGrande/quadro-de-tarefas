import axios from "axios";
import { createContext, ReactNode, useState, useEffect } from "react";

interface ITask{
	title: string;
	description: string;
}

interface ITaskContexProps {
	tasks: Array<ITask>
}

export const TaskContext = createContext({} as ITaskContexProps);

interface ITaskProviderProps {
	children: ReactNode
}



export function TasksProvider({ children }:ITaskProviderProps) {

	const [tasks, setTasks] = useState<ITask[]>([]);

	async function handleGetTaks(){
		const tasksData = await axios.get('/api/tasks');
		console.log(tasksData)
		const tasks:ITask[] = tasksData.data.tasks
		setTasks(tasks)
	}

	useEffect(()=>{
		handleGetTaks()
	},[])

	return(
		<TaskContext.Provider value={{ tasks }} >
			{ children }
		</TaskContext.Provider>
	);
}