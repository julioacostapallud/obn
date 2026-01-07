import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES, VALID_ROUTES } from './config/routes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Access1 from './pages/Access1';
import Access2 from './pages/Access2';
import Access3 from './pages/Access3';
import Access5 from './pages/Access5';
import Access6 from './pages/Access6';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.access1} element={<Access1 />} />
        <Route path={ROUTES.access2} element={<Access2 />} />
        <Route path={ROUTES.access3} element={<Access3 />} />
        <Route path={ROUTES.access5} element={<Access5 />} />
        <Route path={ROUTES.access6} element={<Access6 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

