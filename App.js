import React from 'react';
import { DashboardProvider } from './Context/DashboardContext';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;

