import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Landing = React.lazy(() => import('./pages/Landing').then(m => ({ default: m.Landing })));
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Platform = React.lazy(() => import('./pages/Platform').then(m => ({ default: m.Platform })));
const Paylt = React.lazy(() => import('./pages/Paylt').then(m => ({ default: m.Paylt })));
const Access = React.lazy(() => import('./pages/Access').then(m => ({ default: m.Access })));
const Level = React.lazy(() => import('./pages/Level').then(m => ({ default: m.Level })));
const DRS = React.lazy(() => import('./pages/DRS').then(m => ({ default: m.DRS })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Trash4Goods = React.lazy(() => import('./pages/Trash4Goods').then(m => ({ default: m.Trash4Goods })));
const MobileApp = React.lazy(() => import('./pages/MobileApp').then(m => ({ default: m.MobileApp })));

function App() {
  return (
    <Suspense fallback={null}>
    <Routes>
      {/* Landing page - no layout wrapper */}
      <Route index element={<Landing />} />

      {/* Main site with layout */}
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="platform" element={<Platform />} />
        <Route path="mobile-app" element={<MobileApp />} />
        <Route path="access" element={<Access />} />
        <Route path="level" element={<Level />} />
        <Route path="drs" element={<DRS />} />
        <Route path="paylt" element={<Paylt />} />
        <Route path="contact" element={<Contact />} />
        <Route path="trash4goods" element={<Trash4Goods />} />
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
