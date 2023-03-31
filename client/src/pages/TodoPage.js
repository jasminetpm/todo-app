import React, { useContext } from "react";
import { useQuery } from 'react-query';

import { TodoItem } from '../components/TodoItem';
import readTodosRequest from '../api/readTodosRequest';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { TokenContext } from "../App";

export const TodoPage = () => {

    const [token] = useContext(TokenContext);

    const { isLoading, data: todos } = useQuery('todos', () =>
        readTodosRequest(token)
    );

    return (
    <div>
        <h1>Welcome, User</h1>
        <h4>Your Tasks</h4>

        <div className="todos">
            {isLoading ? (
                <div>loading...</div>
            ) : (
                todos.map((todo) => (
                    <TodoItem todo={todo} key={todo._id} />
                ))  
                )}
        </div> 
             <CreateTodoForm />
    </div>
    );
};