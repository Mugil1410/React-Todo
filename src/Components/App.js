import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Searchitem from "./Searchitem";


function App() {
  

  const [items, setitem] = useState([
    {
      "id": 1,
      "checked": false,
      "item": "Buy milk"
    },
  ]);
  const [NewItem, setNewItem] = useState("");
  const [Search, setSearch] = useState("");
  


  const handleCheck= async(id)=>{
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitem(listitems);
    
  }

  const handleDelete=async(id) =>{
    const listitems = items.filter((item) => item.id !== id);
    setitem(listitems);
  }

  const additem = async()=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addlistitem ={ id, checked: false, item:NewItem };
    const ListItem=[...items,addlistitem]
    setitem(ListItem)
    setNewItem("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    additem();
  }

  return (
    <div className="App">
      <Header />
      <AddItem
        NewItem={NewItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem Search={Search} setSearch={setSearch} />
      <main>
         <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(Search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
