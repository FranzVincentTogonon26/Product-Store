import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProductPage from './pages/ProductPage';

import Spinner from './components/Spinner';
import { useThemeStore } from './utils/Theme';
import PageNotFound from './components/PageNotFound';

import userService from './service/userService';
import useAxiosAuth from './hooks/useAxiosAuth';

function App() {
  const { user } = useUser();
  const axiosAuth = useAxiosAuth();
  const { theme } = useThemeStore();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      userService.syncUser(axiosAuth, user);
    }
  }, [user]);

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <div className="transition-colors duration-300" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />}
          />
          <Route
            path="/product"
            element={isSignedIn ? <ProductPage /> : <Navigate to="/" />}
          />
          <Route
            path="/product/:id"
            element={isSignedIn ? <ProductPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster toastOptions={{ duration: 3000 }} />
    </div>
  );
}

export default App;
