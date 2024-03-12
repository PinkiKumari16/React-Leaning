import './App.css'
import { A } from './components/A'
import Parent from './components/Parent'
import { PassValueContextProvider } from './components/contexts/PassValueContext'
// import Conditional from './components/Conditional'
// import Event from './components/Event'
// import Welcome from './components/Welcome'


function App() {
  

  return (
    <>
    <Parent />
    <PassValueContextProvider>
      <A />
    </PassValueContextProvider>



    {
      /*<Event />*/
      // <Conditional type="odd" />
      // <Conditional type="even" />
      // <Conditional type='both'/>
    }
    

    </>
  )
}

export default App
