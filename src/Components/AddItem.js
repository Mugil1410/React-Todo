import React from "react";

const AddItem = ({ NewItem, setNewItem, handleSubmit }) => {
  return (
    <div style={{}}>
      <h2>What is today’s plan</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="additem">Add new task</label>
        <input
          type="text"
          autoFocus
          id="additem"
          placeholder="Add Task"
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
