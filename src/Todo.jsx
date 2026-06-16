import { useState } from 'react';
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from './components/incompleteTodos';
import './App.css';
import { CompleteTodos } from './components/completeTodos';

function Todo() {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  {/* 入力されたテキストを取得する */ }
  const onChangeInputText = (event) => {
    setInputText(event.target.value);
    {/* event.target.valueはinputタグのvalueを取得する */ }
  }

  const onClickAdd = () => {
    {/* inputTextが空の場合はreturnする */ }
    if (inputText === "") {
      return;
    }
    {/* ...は配列の要素を一つずつ取り出す すぷれっと構文*/ }
    setIncompleteTodos([...incompleteTodos, inputText]);
    setInputText("");
  }

  const onClickDelete = (index) => {
    {/* indexは配列の要素のインデックスを取得する */ }
    const newIncompleteTodos = [...incompleteTodos];
    {/* spliceは配列の要素を削除する */ }
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);

    {/* newInCompleteTodos[index]は削除した要素を取得する */ }
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    {/* spliceは配列の要素を削除する */ }
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* propsで渡す inputTodo*/}
      <InputTodo
        inputText={inputText}
        onChangeInputText={onChangeInputText}
        onClickAdd={onClickAdd}
      />

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos
        completeTodos = {completeTodos}
        onClickBack = {onClickBack}
        />

    </>
  )
}

export default Todo
