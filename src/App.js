import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Calculator from './components/Calculator/Calculator';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import ToDo from './components/Greeter/Greeter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/cats" element={<Cats />} />
          <Route path="/about/dogs" element={<Dogs />} />
        </Route>
        <Route path="/greeter" element={<ToDo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
