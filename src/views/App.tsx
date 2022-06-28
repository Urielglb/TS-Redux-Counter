
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import '../App.css'
import Counter from '../components/Counter'

function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a un counter con redux</h1>
      <img src={logo} alt="React" className='App-logo' />
      <Counter />
      <h4 className="mt-3">Para probar persistencia de estado vea <Link to="test">esta página </Link></h4>
    </div>
  )
}

export default App
