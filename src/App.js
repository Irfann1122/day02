import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import UseE from './components/UseE';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
    
     {/* <Navbar/>
        <Routes>
          <Route path='/'element={<Login/>}/>
          <Route path='/signup'element={<Registration/>}/>
        </Routes>    */}
{/* <Statebasics/> */}
{/* <Counter/> */}
{/* <UseE/> */}
<Viewdata/>
    </div>
  );
}

export default App;
