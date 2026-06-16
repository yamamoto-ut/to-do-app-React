import { useState } from 'react'

import './App.css'

function Todo() {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  {/* 入力されたテキストを取得する */}
  const onChangeInputText = (event) => {
    setInputText(event.target.value);
    {/* event.target.valueはinputタグのvalueを取得する */}
  }

  const onClickAdd = () => {
    {/* inputTextが空の場合はreturnする */}
    if (inputText === "") {
      return;
    }
    {/* ...は配列の要素を一つずつ取り出す すぷれっと構文*/}
    setIncompleteTodos([...incompleteTodos, inputText]);
    setInputText("");
  }

  const onClickDelete = (index) => {
    {/* indexは配列の要素のインデックスを取得する */}
    const newIncompleteTodos = [...incompleteTodos];
    {/* spliceは配列の要素を削除する */}
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);
    
    {/* newInCompleteTodos[index]は削除した要素を取得する */}
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    {/* spliceは配列の要素を削除する */}
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>

      <div className="input-area">
        <input type="text" placeholder="Add a new todo" value={inputText} onChange={onChangeInputText} />
        <button onClick={onClickAdd}>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {/* mapで配列の要素を一つずつ取り出す */}
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            )
          })}

        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </>
  )
}

export default Todo
