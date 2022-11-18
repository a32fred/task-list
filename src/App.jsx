import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className="container">

        <h3>Lista de Tarefas</h3>

        <div className="addCampo">
          <input type="text" name="" id="" />
          <button>add+</button>
        </div>
      <hr size="1" width="80%"/>
        <div className="container-task-area">
          <div className="task-area">
            <label for="task" className="task">Task 1:</label>
            <input type="checkbox" id="task"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
