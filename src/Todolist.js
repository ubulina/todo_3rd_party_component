import React, { useState } from 'react';
import './App.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';



const Todolist = () => {

    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });

    }

    const addTodo = (event) => {

        event.preventDefault();

        setTodos([...todos, todo]);
    }

    const delTodo = (event) => {

        const index = parseInt(event.target.id);

        setTodos(todos.filter((todo, i) => i !== index));
    }

    const columns = [

        {
            Header: 'Date', accessor: 'date' 
        },

        {
            Header: 'Description', accessor: 'desc' 
        },

        {
            Cell: ({index}) => <button id={index} onClick={delTodo}>Delete</button>,
            filterable: false, 
            sortable: false
        }

    ]

    return (
        <div>

            <form onSubmit={addTodo}>

                Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
                Date: <input type="date" name="date" value={todo.date} onChange={inputChanged} />
                <input type="submit" value="Add" />

            </form>
            <ReactTable data={todos} columns={columns} filterable={true} sortable={true}
                
            />

            />

        </div>
    );

};

export default Todolist;