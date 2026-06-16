export const InputTodo = (props) => {

const {inputText, onChangeInputText, onClickAdd} = props;

    return (

        <>
            <div>
                <h1>Todo List</h1>
            </div>

            <div className="input-area">
                <input type="text" placeholder="Add a new todo" value={inputText} onChange={onChangeInputText} />
                <button onClick={onClickAdd}>Add</button>
            </div>
        </>
    );
};