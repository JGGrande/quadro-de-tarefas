import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Model, createServer } from 'miragejs';

createServer({
	models: {
		tasks: Model
	},
	routes() {
		this.get('/api/tasks', ()=> {
			return this.schema.all("tasks")
		}),
		this.post('/api/tasks', (schema, request) =>{
			return schema.db.tasks.insert(JSON.parse(request.requestBody))
		})
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
