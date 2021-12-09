import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDelet, onDone, onImportant}) => {

    const elements = todos.map((item) => {
        const {  id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onDelet={() => { onDelet(id)}}
                              onDone={( ) => {
                                  onDone( id)
                              }}
                              onImportant={( ) => {
                                  onImportant(id)
                              }}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
