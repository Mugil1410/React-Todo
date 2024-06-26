
import '../Components/Content.css';
import ItemList from './ItemList';


const Content = ({items, handleEdit,handleCheck,handleDelete}) => {
    
  return (
    <main className="flex-shrink-0">
      <div className="container">
      {(items.length) ? (

        <ItemList  items={items}
        handleEdit={handleEdit}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        
      ):<p style={{textAlign:'center'}}>No task found</p>}
      
      </div>
    </main>
  );
};

export default Content;
