import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import MenuButton from './components/layout/MenuButton';
import Sidebar from './components/layout/sidebar/Sidebar';
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState)
  };

  return (
    <Router>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <MenuButton toggleSidebar={toggleSidebar} />
      <main className="page-content lg:ml-80 z-0 ">
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
