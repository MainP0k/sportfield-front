import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Sports from './SportsList';
import Fields from './FieldsList';
import Reservation from './FieldReservation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sports" element={<Sports />} />
  <Route path="/fields/:sportId" element={<Fields />} />
  <Route path="/reservation/:fieldId" element={<Reservation />} />
</Routes>

    </div>
  );
}

export default App;