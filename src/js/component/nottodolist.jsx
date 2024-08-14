import React, { useState } from "react";
import "/workspaces/fs76-daviniapd-todolist/src/styles/index.css"

const NotToDoList = () => {

    const [listItems, setListItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && newItem.trim() !== '') {
            setListItems(listItems.concat([{ text: newItem, checked: false }]));
            setNewItem('');
        }
    };

    const handleCheckboxChange = (index) => {
        const newListItems = listItems.slice();
        newListItems[index].checked = !newListItems[index].checked;
        setListItems(newListItems);
    };

    return (
        <>
            <div className="card my-4 ms-4" style={{ width: "25rem", height: "32rem", position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h1 className="text-center m-4">Not To Do List</h1>
                <input
                    className="form-control form-control-lg w-75 mx-auto"
                    type="text"
                    placeholder="What would you regret doing?"
                    aria-label="Not to do item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <div className="w-75 mx-auto my-4 bg-opacity-50 p-3" id="posIt" style={{ position: 'relative', height: '100%' }}>
                    <ul className="list-group" style={{ overflowY: 'auto', maxHeight: '220px' }}>
                        {listItems.length === 0 && (
                            <h5 className="text-center text-danger p-5 bg-danger bg-opacity-25 rounded">Your list is empty, I can't believe you have no regrets.</h5>
                        )}
                        {listItems.map((listItem, index) => (

                            <label className="list-group-item d-flex gap-2" key={index}>
                                <input
                                    className="form-check-input flex-shrink-0"
                                    type="checkbox"
                                    checked={listItem.checked}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <span style={{ fontSize: "15px", textDecoration: listItem.checked ? 'line-through' : 'none' }}>
                                    {listItem.text}
                                </span>
                                <button
                                    type="button"
                                    className="fa-solid fa-trash-can ms-auto btn btn-outline-secondary rounded-circle p-2 lh-1"
                                    onClick={() => {
                                        const newListItems = listItems.slice();
                                        newListItems.splice(index, 1);
                                        setListItems(newListItems);
                                    }}
                                />
                            </label>
                        ))}
                    </ul>

                    <footer className=" d-flex flex-wrap justify-content-center py-3 mt-4 border-top" style={{ position: 'absolute', bottom: 0, width:"90%"}}>
                            <span className="mb-3 mb-md-0 text-body-secondary opacity-75">Don't do it total: {listItems.length} </span>
                    </footer>

                </div>

            </div>

        </>
    )
};

export default NotToDoList;