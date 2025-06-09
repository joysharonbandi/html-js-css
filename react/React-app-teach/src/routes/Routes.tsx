import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { Test } from '../components/Test';

export function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav> */}
      
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/test" element={<Test/>}/>
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
