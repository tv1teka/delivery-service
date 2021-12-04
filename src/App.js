import {Header} from './components'
import {Home, Cart} from './pages'
import {Routes,Route} from 'react-router-dom';
import React from 'react';
import axios from 'axios'

function App(props) {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(()=> {

    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })

    // fetch('http://localhost:3000/db.json')
    // .then((resp)=>resp.json())
    // .then(json=> {
    //   setPizzas(json.pizzas )
    // })
  },[])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={pizzas}/>} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
