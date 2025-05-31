import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import DashBoardAdmin from './components/admin/dashboardAdmin';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/dashboard-admin" element={<DashBoardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
