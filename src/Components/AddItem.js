import React from "react";

const AddItem = ({ NewItem, setNewItem, handleSubmit }) => {
  return (
    <div>
      <h1>Add Item</h1>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="additem">Add new task</label>
        <input
          type="text"
          autoFocus
          id="additem"
          placeholder="Add Item"
          required
          value={NewItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
