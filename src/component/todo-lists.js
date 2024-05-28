import React, { useState } from 'react';
import delete_icon from './../Assets/delete_png.png'

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "Pizza", amount: 80, category: "Food", completed: false },
        { id: 2, name: "Grape Juice", amount: 30, category: "Food", completed: false },
        { id: 3, name: "Cinema", amount: 210, category: "Entertainment", completed: false },
        { id: 4, name: "Java Programming book", amount: 242, category: "Academic", completed: false },
        { id: 5, name: "Mango Juice", amount: 35, category: "Food", completed: false },
        { id: 6, name: "Dress", amount: 2000, category: "Cloth", completed: false },
        { id: 7, name: "Tour", amount: 2555, category: "Entertainment", completed: false },
        { id: 8, name: "Meals", amount: 300, category: "Food", completed: false },
        { id: 9, name: "Mobile", amount: 3500, category: "Gadgets", completed: false },
        { id: 10, name: "Exam Fees", amount: 1245, category: "Academic", completed: false }
    ]);

    const [inputValue_s_no, setInputValue_s_no] = useState('');
    const [inputValue_name, setInputValue_name] = useState('');
    const [inputValue_amount, setInputValue_amount] = useState('');
    const [inputValue_category, setInputValue_category] = useState('');

    const handleInputChangeSno = (e) => {
        setInputValue_s_no(e.target.value);
    };

    const handleInputChangeName = (e) => {
        setInputValue_name(e.target.value);
    };

    const handleInputChangeAmount = (e) => {
        setInputValue_amount(e.target.value);
    };

    const handleInputChangesCategory = (e) => {
        setInputValue_category(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue_s_no.trim() !== '' && inputValue_name.trim() !== '' && inputValue_amount.trim() !== '' && inputValue_category.trim() !== '') {
            setTodos([...todos, { id: inputValue_s_no, name: inputValue_name, amount: inputValue_amount, category: inputValue_category, completed: false }]);
            setInputValue_s_no('');
            setInputValue_name('');
            setInputValue_amount('');
            setInputValue_category('');
        } else {
            alert("Please fill the All fields!");
            return;
        }
    };

    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleDeleteTodo = (index) => {
        if (window.confirm("Are you sure want to Delete?")) {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
        }


    };
    
    
    return (
        <div>
            <h1>To-Do List</h1>
            <table className="container table table-hover">
                <thead>
                    <tr>
                        <th> </th>
                        <th className='sno_width'>S.No</th>
                        <th className='name_width'>Name</th>
                        <th className='name_width'>Category</th>
                        <th className='amount_width'>Amount</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <th></th>
                        {/* *************  S.No section ************* */}
                        <th>
                            <input className='form-control' name='sno'
                                type="text"
                                value={inputValue_s_no}
                                onChange={handleInputChangeSno}
                                placeholder="S.No"
                            />
                        </th>

                        {/* *************  Name section ************* */}
                        <th>
                            <input className='form-control' name='name'
                                type="text"
                                value={inputValue_name}
                                onChange={handleInputChangeName}
                                placeholder="Enter Name"
                            />
                        </th>

                        {/* *************  category section ************* */}
                        <th>
                            <input className='form-control' name='category'
                                type="text"
                                value={inputValue_category}
                                onChange={handleInputChangesCategory}
                                placeholder="Enter Category"
                            />
                        </th>

                        {/* *************  Amount section ************* */}
                        <th>
                            <input className='form-control' name='amount'
                                type="text"
                                value={inputValue_amount}
                                onChange={handleInputChangeAmount}
                                placeholder="Amount"
                            />
                        </th>

                        {/* *************  Add section ************* */}
                        <th>
                            <button className='btn btn-sm btn-primary' onClick={handleAddTodo}>Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(index)}
                                />
                            </td>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>{todo.category}</td>
                            <td>{todo.amount}</td>
                            <td>
                                <img className='cursor-pointer' src={delete_icon} alt='Delete Icon' width="25px"
                                    onClick={() => handleDeleteTodo(index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;