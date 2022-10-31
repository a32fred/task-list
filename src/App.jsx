import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className="container">

        <h3>Lista de Tarefas</h3>

        <div className="task-area">
          <label for="task" className="task">Task 1</label>
          <input type="checkbox" id="task"/>
        </div>
       
        <button>Add+</button>
      </div>
    </div>
  )
}

export default App
