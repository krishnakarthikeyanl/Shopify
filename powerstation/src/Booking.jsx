import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Booking = () => {
  const [charge, setCharge] = useState(20);
  const [items, setItems] = useState([
    { id: 1, label: "Protein", checked: true },
    { id: 2, label: "Egg", checked: true },
    { id: 3, label: "Shake", checked: true },
  ]);
  const [newItem, setNewItem] = useState("");
  const [edit, setEdit] = useState(null);

  function handleCharge() {
    setCharge((prevCharge) => (prevCharge === 20 ? prevCharge + 11 : prevCharge + 10));
    console.log(charge);
  }
  function handleAddItem() {
    if (newItem!== "") {
      const newItemObj = {
        id: items.length + 1,
        label: newItem,
        checked: false,
      };
      setItems([...items, newItemObj]);
      setNewItem("");
    }
  }
  function handleUpdate(itemId) {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, label: newItem || item.label } : item
    );
    setItems(updatedItems);
    setEdit(null);
    setNewItem("");
  }
  function handleDelete(itemId) {
    const filteredItems = items.filter((item) => item.id !== itemId);
    console.log(filteredItems)
    setItems(filteredItems);
  }
  return (
    <div style={{display: "grid", placeItems: "center", height: "50vh"
       }}>
      <button onClick={handleCharge}>Click to Charge</button>
      <h5>Current charge is: {charge}</h5>

      <input
        type="text"
        value={newItem}
        placeholder="Add New Item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
      {items.map((item) => (
    <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <span>{item.label}</span>
    <FaEdit
      role="button"
      tabIndex={0}
      onClick={() => setEdit(item.id)}
    />
    <FaTrashCan
      role="button"
      tabIndex={0}
      onClick={() => handleDelete(item.id)}
    />
  </div>
))}

      </ul>

      {edit && (
        <div>
          <input
            type="text"
            value={newItem}
            placeholder="Edit Item"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={() => handleUpdate(edit)}>Update</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
