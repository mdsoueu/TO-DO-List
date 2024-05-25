import { useState } from 'react'

const ToDoForms = ({ addTodo }) => {
    const [value, setValue] = useState("");// para o título
    const [category, setCategory] = useState("");// para categoria
    // eles vão ser preenchidos pelos input's

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;

        // adiciona novas tarefas
        addTodo(value, category);
        // limpar campos
        setCategory("");
        setValue("");
    };

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} /> {/* quando digita */}
                <select value={category} onChange={(e) => setCategory(e.target.value)}> {/* quando escolhe uma opção */}
                    <option value="">Selecione uma das categorias</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForms