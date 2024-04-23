import React from 'react'

const Searchitem = ({Search,setSearch}) => {
  return (
    <div>
    <form className="addForm">
    <input
      type="text"
      placeholder="search task"
      value={Search}
      onChange={(e)=>setSearch(e.target.value)}
    />
  </form>
    </div>
  )
}

export default Searchitem
