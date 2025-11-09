import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Home/Homepage'
import NonAuthBar from './Components/NonAuthNav/NonAuthBar'
import Shop from './Pages/Shop/Shop'
import Brands from './Pages/Brands/Brands'
import OnSale from './Pages/On Sale/On Sale'
import NewA from './Components/NewArrive/NewA'






const App = () => {

  return (
    <div className='container'>
      <BrowserRouter>
      <NonAuthBar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/' element={<NewA/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/onsales' element={<OnSale/>}/>
          <Route path='/brand' element={<Brands/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
