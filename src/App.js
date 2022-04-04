import { useState } from 'react';
import './App.css';

import * as C from './App.styled';

function App() {
  const [item, setItem] = useState('');

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      const toDoArea = document.querySelector('.todo-area');
      const div = document.createElement('div');
      div.classList.add('task-item');
      div.innerHTML = item;
      div.addEventListener('click', handleSelectItem);
      div.addEventListener('dblclick', handleDoneTask);
      toDoArea.appendChild(div);
      setItem('');
    }
  };

  const handleSelectItem = (e) => {
    const target = e.target;
    if(target.classList.contains('selected')){
      target.classList.remove('selected');
    } else {
      target.classList.add('selected');
    }
  };

  const handleDoneTask = (e) => {
    const target = e.target;
    if(target.classList.contains('task-done')){
      target.classList.remove('task-done');
    } else {
      target.classList.add('task-done');
    }
  };

  const handleClearDone = () => {
    const items = document.querySelectorAll('.task-done');
    items.forEach(item => item.remove());
  };

  const handleClearSelected = () => {
    const items = document.querySelectorAll('.selected');
    items.forEach(item => item.remove());
  };

  const handleClear = () => {
    const items = document.querySelectorAll('.task-item');
    items.forEach(item => item.remove());
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>Lista de tarefas</C.Title>
      </C.Header>

      <C.TaskArea>
        <span>➕</span>
        <input type='text' 
          onChange={(e) => setItem(e.target.value)}
          onKeyPress={handleEnter}
          value={item}
          placeholder='Digite sua tarefa e pressione ENTER para adicionar'
        />     
      </C.TaskArea>

      <C.TodoArea className='todo-area'></C.TodoArea>

      <C.ControlArea>
        <button className='btn btn-success'>Salvar itens</button>
        <button className='btn btn-info' onClick={handleClearDone}>Apagar concluídos</button>
        <button className='btn btn-danger' onClick={handleClearSelected}>Apagar selecionado(s)</button>
        <button className='btn btn-secondary' onClick={handleClear}>Limpar tudo</button>
      </C.ControlArea>
    </C.Container>
  );
}

export default App;
