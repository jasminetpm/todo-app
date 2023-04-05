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

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    const username = (parseJwt(token)).user;

    return (
    <div>
        <h1>Hello {username}</h1>
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