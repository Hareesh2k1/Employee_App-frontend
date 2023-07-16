import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Formemp } from './components/Formemp';

function App() {
  return (
    
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<Formemp/>}/>
     </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
