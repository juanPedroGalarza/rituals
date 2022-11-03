import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout"
import Home from './pages/Home';
import Play from './pages/Play';
import Help from './pages/Help';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/play' element={<Play/>} />
          <Route path='/help' element={<Help/>} />
          <Route path='/*' element={<Home/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
