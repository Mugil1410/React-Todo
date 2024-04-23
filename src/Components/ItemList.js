import React from 'react'

const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
          {items.map((item)=>{
            return (<li className="item" key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={()=>{handleCheck(item.id)}}/>
                <label style={(item.checked)?{textDecoration:'line-through'}:null}>{item.item}</label>
                <button className="btn btn-danger sm" onClick={()=>{handleDelete(item.id)}}>X</button>
                </li>)
          })}
      </ul>
  )
}

export default ItemList
