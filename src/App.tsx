import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Paylt } from './pages/Paylt';
import { Access } from './pages/Access';
import { Level } from './pages/Level';
import { DRS } from './pages/DRS';
import { Contact } from './pages/Contact';
import { Trash4Goods } from './pages/Trash4Goods';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="platform" element={<Platform />} />
        <Route path="access" element={<Access />} />
        <Route path="level" element={<Level />} />
        <Route path="drs" element={<DRS />} />
        <Route path="paylt" element={<Paylt />} />
        <Route path="contact" element={<Contact />} />
        <Route path="trash4goods" element={<Trash4Goods />} />
      </Route>
    </Routes>
  );
}

export default App;
