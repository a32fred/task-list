import './App.css'
import Card from '../Card'
import { useState } from 'react'
import ShortUniqueId from 'short-unique-id'

function App() {

  const uid = new ShortUniqueId()
  const [textValue, setTextValue] = useState('');
  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    if (textValue === '') return alert("campo vazio")
    const newTodo = {
      id: uid(),
      task: textValue
    }
    setTodos([...todos, newTodo])
    setTextValue('')
  }


  return (
    <div className="App">
      <div className="container">

        <h3>Lista de Tarefas</h3>

        <div className="addCampo">

          <input
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />

          <button
            type="submit"
            onClick={addTodo}>
            add+
          </button>
        </div>

        {todos.map((todo) => (
          <Card task={todo.task} key={todo.id}/>
        ))}

      </div>
    </div>
  )
}

export default App
