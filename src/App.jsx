import './App.css'
import FormLogin from './Component/FormLogin'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([])

  return (
    <div className="App">
      {
       <FormLogin setUser={setUser} />
      }
    </div>
  )
}

export default App
