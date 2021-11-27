import React from 'react'

function Categories({items, onClickItem}) {
    return (
        <div className="categories">
        <ul>
          <li className="active">Все</li>
          {
          items.map((name, index) => (
            <li onClick = {()=> onClickItem(name)} key = {`${name}__${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    )
}

export default Categories;