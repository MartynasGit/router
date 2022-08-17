import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Calculator from './components/Calculator/Calculator';
import Greeter from './components/Greeter/Greeter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/greeter' element={<Greeter/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
