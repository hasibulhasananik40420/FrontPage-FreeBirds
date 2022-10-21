import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Errorpage from './Pages/Errorpage/Errorpage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Errorpage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
