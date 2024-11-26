import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import NewContact from './pages/NewContact/NewContact.jsx';
import EditContact from './pages/EditContact/EditContact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}
