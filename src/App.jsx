import { useState } from 'react';
import Todo from './components/Todo';
import ToDoForms from './components/ToDoForms';
import Search from './components/Search';
import Filtro from './components/Filtro';

import './App.css';

function App() {
  // Define os TO DO's em uma state(como se fosse uma variável) para guardar os dados inicias.
  // cHAMO A api para pegar os dados do BD
  /* todos - consulta os dados | setTodos - coloca os dados  */

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir na academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar Japônes",
      category: "Estudo",
      isCompleted: false
    }
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Adiconar
  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];
    setTodos(newTodo);
  }

  // Remover
  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter(todo =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  // completar
  const completeTodo = (id) => {
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodo);
  }

  return (<div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filtro filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="todo-list"> {/*Percorre pelos array de objetos e receber cada um dos objetos*/}
      {/*Com o map é possível exibir cada objeto */}
      {todos
        .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
    </div>
    <ToDoForms addTodo={addTodo} />
  </div>
  );
}

export default App