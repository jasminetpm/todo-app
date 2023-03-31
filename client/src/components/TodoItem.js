import React, { useContext, useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import updateTodoRequest from '../api/updateTodoRequest';
import deleteTodoRequest from '../api/deleteTodoRequest';
import { TokenContext } from '../App';

export const TodoItem = ({ todo }) => {
    const [token] = useContext(TokenContext);

    const queryClient = useQueryClient();

    const { mutate: updateTodo } = useMutation(
        (updatedTodo) => updateTodoRequest(updatedTodo, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    const { mutate: deleteTodo } = useMutation(
        (updatedTodo) => deleteTodoRequest(updatedTodo, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    return (
        <div className='todo'>
            <input 
                className='checkbox'
                checked={todo.complete} 
                type="checkbox" 
                onChange={() => updateTodo({
                    ...todo,
                    complete: !todo.complete
                })} 
            />

            <div className='text'>
                {todo.text}
            </div>
             <button className='delete-todo' onClick={() => deleteTodo(todo)}>X</button>
        </div>
    );

};