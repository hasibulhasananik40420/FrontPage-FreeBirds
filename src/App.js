import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Errorpage from './Pages/Errorpage/Errorpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Errorpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
