import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header';

// Pages
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Valori from './pages/Valori';
import Collabora from './pages/Collabora';
import Programma from './pages/Programma';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='chi_siamo' element={<ChiSiamo />} />
        <Route path='valori' element={<Valori />} />
        <Route path='programma' element={<Programma />} />
        <Route path='collabora' element={<Collabora />} />
      </Routes>
    </>
  );
}

export default App;
