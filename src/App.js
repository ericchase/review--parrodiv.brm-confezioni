import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';

function App() {
  return (
    <Router>
      <Sidebar/>
      <main className="page-content ml-80 ">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
