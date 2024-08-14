import React, { useState } from "react";
import "/workspaces/fs76-daviniapd-todolist/src/styles/index.css";



const NotToDoList = () => {

    const [listItems, setListItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    function handleKeyPress(e) {
        if (e.keyCode === 13 && newItem.trim() !== '') {
            setListItems([...listItems, { text: newItem, checked: false }]);
            setNewItem('');
        }
    };

    function handleCheckboxChange(index) {
        const newListItems = listItems.slice();
        newListItems[index].checked = !newListItems[index].checked;
        setListItems(newListItems);
    };

    function send (e) {
        e.preventDefault();
        console.log ("Reminder ‘not to do’ added correctly");

    }

    return (
        <>
            <div className="card ms-4 pt-2" style={{ width: "25rem", height: "34rem", position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <h1 className="text-center mt-5 mb-3">Not To Do List</h1>
                <form onSubmit={send}>
                    <input
                        className="form-control form-control-lg w-75 mx-auto"
                        type="text"
                        placeholder="What would you regret doing?"
                        aria-label="Not to do item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <div className="mx-auto my-3 bg-opacity-50 px-3 pt-3 pb-1" id="posIt" style={{ position: 'relative', height: '100%' }}>
                        <ul className="list-group" style={{ overflow: 'auto', maxHeight: '230px' }}>
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
                                        aria-hidden="true"
                                        onClick={() => {
                                            setListItems(listItems.filter(item => item !== listItem));
                                        }}
                                    />
                                </label>
                            ))}
                        </ul>

                        <footer className=" d-flex flex-wrap justify-content-center pb-1 border-top" style={{ position: 'absolute', bottom: 0, width: "90%" }}>
                            <span className="mb-3 mb-md-0 text-body-secondary opacity-75">Don't do it total: {listItems.length} </span>
                        </footer>

                    </div>
                </form>
            </div>

        </>
    )
};

export default NotToDoList;