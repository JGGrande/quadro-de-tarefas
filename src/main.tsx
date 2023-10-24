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
		})
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
