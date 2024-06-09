import  './App.css';
import { Home } from './pages/Home'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { CounterPage } from './pages/CounterPage'
import { Oviewers } from './pages/Oviewers'
import { FormPage } from './pages/FormPage';
import { FlexNaxBar } from './components/flex nax bar/FlexNaxBar';
import { FlexSideBar } from './components/flex side bar/FlexSideBar';


const App =()=>{
  return(
    // <BrowserRouter>
    //   <nav className='header'>
    //     <h1>Flipper Colors</h1>
    //     <ul>
    //       <li><Link to='/'>Home</Link></li>
    //       <li><Link to='/counter'>Counter</Link></li>
    //       <li><Link to='/oviewers'>Oviewers</Link></li>
    //       <li><Link to='/form'>Form</Link></li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path='/' element={<Home />}/>
    //     <Route path='/counter' element={<CounterPage />}/>
    //     <Route path='/oviewers' element={<Oviewers />} />
    //     <Route path='/form' element={<FormPage />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      {/* <FlexNaxBar /> */}
      <FlexSideBar />
    </>
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
