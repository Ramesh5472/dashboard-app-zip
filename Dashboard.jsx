import React, { useState } from 'react';
import { useDashboard } from '../Context/DashboardContext';
import Category from './Category';

const Dashboard = () => {
  const { state, dispatch } = useDashboard();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch({ type: 'SEARCH_WIDGET', payload: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets"
        value={searchTerm}
        onChange={handleSearch}
      />
      {state.categories.map(cat => (
        <Category 
          key={cat.id} 
          category={cat} 
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Dashboard;
