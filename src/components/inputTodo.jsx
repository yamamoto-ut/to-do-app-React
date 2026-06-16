export const InputTodo = (props) => {

    const { inputText, onChangeInputText, onClickAdd } = props;

    const style = {
        backgroundColor: "#c6e5d9",
        width: "400px",
        height: "30px",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px"
    }

    
    return (

        <>
            <div>
                <h1>Todo List</h1>
            </div>

            <div style={style}>
                <input type="text" placeholder="Add a new todo" value={inputText} onChange={onChangeInputText} />
                <button onClick={onClickAdd}>Add</button>
            </div>
        </>
    );
};