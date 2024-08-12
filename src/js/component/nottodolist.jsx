import React, { useState} from "react";

const NotToDoList = () => {

    const [listItems, setListItems] = useState (["Your list is empty, I can't believe you have no regrets."]);

    
    return (
        <>

        <h1 className="text-center m-5">Not To Do List</h1>
        <input className="form-control form-control-lg w-50 mx-auto" type="text" placeholder="What would you regret doing?" aria-label="Not to do item" />
        <ul className="w-50 mx-auto my-5">
            {listItems.map ( (listItem, index) => <h4 key={index}>{listItem}</h4>)}
        </ul>

        </>
    )
};

export default NotToDoList;