import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { TodoApp } from './Pages/TodoApp';
import { Counterapp } from './Pages/Counterapp';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path="/todo" element={<TodoApp/>}/>
        <Route  path="/counter" element={<Counterapp/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
