import React, { useState } from 'react';
import './Task2.css'

const Task2 = () => {

    const [chackbox, setChackbox] = useState([]);
    console.log(chackbox)
    const [modules, setModule] = useState([
        {
            moduleName: "Configuration",
            activityName: "Item Category",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Item",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Configuration",
            activityName: "Tream",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: "Telivesions",
            activityName: "News",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        }
        
        

    ])

    const isCreate = (e) => {
        const newUser = [...chackbox]
        newUser[e.target.name] = e.target.value;
        setChackbox(newUser)
    }

    return (
        <div>
            <h1 className="taskTrue">Task--2</h1>
            <table id="module">
                <thead class="user-control">
                    <th>moduleName</th>
                    <th>activityName</th>
                    <th>Create</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Approve</th>

                </thead>
                {
                    modules.map(model =>
                        <tbody>
                            <tr>
                                <td>{model.moduleName}</td>
                                <td>{model.activityName}</td>
                                <td> <input type="checkbox" id="vehicle1" onClick={isCreate} name="creacte" value={true}></input></td>
                                <td><input type="checkbox" id="vehicle1" onClick={isCreate} name="isView" value={true}></input> </td>
                                <td><input type="checkbox" id="vehicle1" onClick={isCreate} name="isEdit" value={true}></input> </td>
                                <td><input type="checkbox" id="vehicle1" onClick={isCreate} name="isDelete" value={true}></input> </td>
                                <td><input type="checkbox" id="vehicle1" onClick={isCreate} name="isApprove" value={true}></input> </td>
                            </tr>
                        </tbody>

                    )
                }

            </table>
        </div>
    );
}
export default Task2;