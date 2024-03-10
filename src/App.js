import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';

import Footer from './Component/Footer';
import GetAxios from './GetAxios';
import PostAxios from './PostAxios';
import Create from './CrudComponent/Create';
import Read from './CrudComponent/Read';
import AkaMap from './AkaMap';


function App() {
  return (
    <div className='container'>
    <Routes>
      <Route exact path='/' element={<Read/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
    </Routes>

    </div>
  );
}

export default App;



{/* <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
</Routes>
<Footer/> */}