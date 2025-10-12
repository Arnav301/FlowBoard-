import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Home from './components/Home';
import AuthPage from './components/AuthPage';

const AppContent = () => {
  const { currentPage } = useApp();

  return (
    <div className="App">
      {currentPage === 'home' ? <Home /> : <AuthPage />}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
