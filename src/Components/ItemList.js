import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";

const ItemList = ({items,handleEdit,handleCheck,handleDelete}) => {
  return (
    <ul>
          {items.map((item)=>{
            return (<li className="item" key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={()=>{handleCheck(item.id)}}/>
                <label style={(item.checked)?{textDecoration:'line-through'}:null}>{item.item}</label>
                <Link to={`/edit/${item.id}`}><FaEdit /></Link>
                <button className="btn btn-danger sm" onClick={()=>{handleDelete(item.id)}}>X</button>
                </li>)
          })}
      </ul>
  )
}

export default ItemList
