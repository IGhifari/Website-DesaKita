import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUser from './components/LoginUser';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} />

      </Routes>
    </BrowserRouter>
  );
}
