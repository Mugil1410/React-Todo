import Header from "./Header";
import Searchitem from "./Searchitem";
import Content from "./Content";
import AddItem from "./AddItem";
import EditTask from "./EditTask";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate,Route, Routes } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const [items, setitem] = useState([]);
  const [NewItem, setNewItem] = useState("");
  const [editTask, setEditTask] = useState("");
  const [Search, setSearch] = useState("");

  const additem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addlistitem = { id, checked: false, item: NewItem };
    const ListItem = [...items, addlistitem];
    setitem(ListItem);
    setNewItem("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    additem();
  }

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
    setitem(listitems);
  };

  const handleEdit = (id) => {
    try {
      const updateItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, item: editTask };
        }
        return item;
      });
      setitem(updateItems);
      setEditTask("");
      navigate("/");
    } catch (error) {
      console.log(`error ${error.message}`);
    }

  };
  
  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setitem(listitems);
  };

  return (
    <div className="App">
    <Header />
      <main>
        <Routes>
          <Route path="/" element={
              <>
                <AddItem
                  NewItem={NewItem}
                  setNewItem={setNewItem}
                  handleSubmit={handleSubmit}
                />
                <Searchitem Search={Search} setSearch={setSearch} />
                <Content
                  items={items.filter((item) =>
                    item.item.toLowerCase().includes(Search.toLowerCase()) )}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                />
              </>
            }
          />
          <Route path="edit/:id" element={
              <EditTask
              items={items}
              editTask={editTask}
              setEditTask={setEditTask} 
              handleEdit={handleEdit} 
              />
            }
          />
        </Routes>
      </main>
      <Footer 
      length={items.length}
      Completed={items.filter((item) => item.checked ===true).length}
      Incompleted={items.filter((item) => item.checked ===false).length}
       />
    </div>
  );
}

export default App;
