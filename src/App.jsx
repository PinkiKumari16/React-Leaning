import  './App.css';
import { Home } from './pages/Home'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { CounterPage } from './pages/CounterPage'
import { Oviewers } from './pages/Oviewers'
import { SimplePage } from './pages/SimplePage';
import { ColorValueProvider } from './components/contexts/ColorValue';
import { FormPage } from './pages/FormPage';
import { Effect } from './components/custome hooks/Effect';
import { Test } from './components/custome hooks/Test';
import { UseReducer } from './components/use Reducer hook/UseReducer';
import { ModalPage } from './pages/ModalPage';



const App =()=>{
  // const a='a', b='b', c='c';
  return(
    <BrowserRouter>
      <ColorValueProvider>
        <nav className='header'>
          <h1>Flipper Colors</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/counter'>Counter</Link></li>
            <li><Link to='/oviewers'>Oviewers</Link></li>
            <li><Link to='/simple'>Simple Color</Link></li>
            <li><Link to='/modal project'>Modal Project</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/counter' element={<CounterPage />}/>
          <Route path='/oviewers' element={<Oviewers />} />
          <Route path='/simple' element={<SimplePage />} />
          <Route path='/modal project' element={<ModalPage />} />
        </Routes>
        </ColorValueProvider>
      </BrowserRouter>
  )
}


{/* <ToDo /> */}
{/* <Form /> */}
{/* <Main /> */}
{/* <Counter /> */}
{/* <Flipper /> */}
//  <Main />
{/* <Practice name = {name} />
<Practice name = {name}>
  <button>Click me.</button>
</Practice><Practice/> */}

export default App
