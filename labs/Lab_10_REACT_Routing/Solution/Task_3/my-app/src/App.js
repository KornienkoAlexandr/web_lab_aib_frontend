import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UsersList from './Pages/Users';
import User from './Pages/User';

function App() {
  return (
    <div>
      <Link to="/user/1">User 1</Link>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
