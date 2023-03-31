import React, { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { TokenContext } from "../App";
import createTodoRequest from '../api/createTodoRequest';
import '../index.css';

export const CreateTodoForm = () => {

    const [text, setText] = useState('');
    const [token] = useContext(TokenContext);

    const queryClient = useQueryClient();

    const { mutate: createTodo } = useMutation(
        (newTodo) => createTodoRequest(newTodo, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!text) return;
            createTodo({
                text,
            });
            setText('');
        }}
        >
            <input className='add-todo-input'
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
             />
            <button className='button'>Create</button>
        </form>
    )
}