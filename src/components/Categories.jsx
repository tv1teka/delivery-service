import React from 'react'


// class Categories extends React.Component {

//     state = {
//         activeItem: 3,
//         test: 123,
//     }

//     onSelectedItem = (index) => {
//         this.setState({
//             activeItem: index
//         })
//     }

//     render() {
//         const {onClickItem, items} = this.props
//         return (
//             <div className="categories">
//             <ul>
//               <li>Все</li>
//               {
//               items.map((name, index) => (
//                 <li className={this.state.activeItem === index ? 'active':''}
//                 onClick = {()=> this.onSelectedItem(index)} 
//                 key = {`${name}__${index}`}>{name}</li>
//               ))}
//             </ul>
//           </div>
//         )
//     }
// }



function Categories({items, onClickItem}) {

   const [activeItem, setActiveItem] = React.useState(null)

    const onSelectedItem = (index) => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active':''}
              onClick = {()=>onSelectedItem(null)}>
              Все
          </li>
          {
            items &&
            items.map((name, index) => (
            <li 
                className={activeItem === index ? 'active':''}
                onClick = {()=> onSelectedItem(index)}
                key = {`${name}__${index}`}>{name}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Categories;