// import {  useState, useEffect  } from 'react';
import getTodos from './api/readTodosRequest';
import { useQuery } from 'react-query';
import { TodoItem } from './components/TodoItem';
import readTodosRequest from './api/readTodosRequest';
import { CreateTodoForm } from './components/CreateTodoForm';

//const API_BASE = "http://localhost:3001";

function App() {

    const { isLoading, data: todos } = useQuery(
        'todos',
        readTodosRequest
    );
    // const [popupActive, setPopupActive] = useState(false);
    // const [newTodo, setNewTodo] = useState("");

	return (
		<div className="App">
            <h1>Welcome, User</h1>
            <h4>Your Tasks</h4>

            <div className="todos">
                {isLoading ? (
                    <div>loading...</div>
                ) : (
                    todos.map((todo) => (
                        <div className='todo'>
                        <TodoItem todo={todo} key={todo._id} />
                        </div>
                    ))  
                    )}
            </div> 
                 <CreateTodoForm />
		</div>
	);

    // const GetTodos = () => {
    //     fetch(API_BASE + "/todos")
    //         .then(res => res.json())
    //         .then(data => setTodos(data))
    //         .catch(err => console.error("Error: ", err));
    // }

    // const completeTodo = async id => {
    //     const data = await fetch(API_BASE + "/todo/complete/" + id)
    //         .then(res => res.json());

    //     setTodos(todos => todos.map(todo => {
    //         if (todo._id === data._id) {
    //             todo.complete = data.complete;
    //         }

    //         return todo;
    //     }));
    // }

    // const deleteTodo = async id => {
    //     const data = await fetch(API_BASE + "/todo/delete/" + id, { 
    //         method: "DELETE"
    //     }).then(res => res.json());

    //     setTodos(todos => todos.filter(todo => todo._id !== data._id));
    // }

    // const addTodo = async () => {
    //     const data = await fetch(API_BASE + "/todo/new", {
    //         method: "POST",
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             text: newTodo
    //         })
    //     }).then(res => res.json());

    //     setTodos([...todos, data]);
    //     setPopupActive(false);
    //     setNewTodo("");
    // }

	// return (
	// 	<div className="App">
	// 		<h1>Welcome, User</h1>
    //         <h4>Your Tasks</h4>

    //         <div className="todos">
    //             {todos.map(todo => (
    //                 <div className={
    //                     "todo " + (todo.complete ? "is-complete" : "")
    //                 } key={todo._id}>
    //                     <div className="checkbox"></div>

    //                     <div className="text" onClick={() => completeTodo(todo._id)}>{ todo.text }</div>

    //                     {/* <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div> */}
    //                     <div className="delete-todo" onClick={(e) => {e.stopPropagation(); deleteTodo(todo._id);}}>x</div>
    //                 </div>
    //             ))}
    //         </div>

    //         <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

    //         {popupActive ? (
    //             <div className="popup">
    //                 <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
    //                 <div className="content">
    //                     <h3>Add Task</h3>
    //                     <input 
    //                         type="text" className="add-todo-input" 
    //                         onChange={e => setNewTodo(e.target.value)}
    //                         value={newTodo}>
    //                     </input>
    //                     <div className="button" onClick={addTodo}>Create Task</div>
    //                 </div>
    //             </div>    
    //         ) : ""}
	// 	</div>
	// );
}

export default App;
