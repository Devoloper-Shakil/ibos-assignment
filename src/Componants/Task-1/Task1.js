import React, { useState } from 'react';
import './task1.css'



const Task1 = () => {


    const [user, setUser] = useState();
    const [task, setTask] = useState([])

    const userInfo = (e) => {

        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;

        setUser(newUser)

    }
    const addUser = () => {


        if (user !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: user,

            };

            setTask([...task, taskDetails]);

        }

    }
    const deleteUser = (e, id) => {
        e.preventDefault();
        setTask(task.filter((user) => user.id != id));
    };
    return (
        <div>
            <div className="task-one">
                <h1>Task --1</h1>
                <div className="userForm">

                    <div> <h2>Name</h2>
                        <input onBlur={(e) => userInfo(e)} type="text" placeholder="Name" name="name" required /></div>
                    <div><h2>Email</h2>
                        <input onBlur={(e) => userInfo(e)} type="email" placeholder="Email" name="email" required /></div>


                    <div><input onClick={() => { addUser() }} className="btn" type="submit" value="Add" /></div>
                </div>
            </div>

            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>

                {task !== [] ?
                    (task.map(user =>

                        <tbody>
                            <tr>
                                <td>{user.value.name}</td>
                                <td>{user.value.email}</td>
                                <td> <button style={{background:"green",color:"white"}} onClick={(e) => deleteUser(e, user.id)}>
                                    Delete
                               </button></td>
                            </tr>
                        </tbody>
                    ))
                    : null}

            </table>
        </div>
    );
};

export default Task1;