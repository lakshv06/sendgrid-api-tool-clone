import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import NavHeader from './pages/NavHeader';
import NoMatch from './pages/NoMatch';
import SignInPage from './pages/SignInPage';

function App(): ReactElement {
  return (
  <BrowserRouter>
  <AppRoutes />
  </BrowserRouter>
  );
}
function AppRoutes() {
  const location = useLocation();
  const showNavHeader = (location.pathname !== "/sign-in" && location.pathname!=="/sign-up");

  return (
    <div className='m-3'>
      {showNavHeader && <NavHeader />}
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
export default App;
