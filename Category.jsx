import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Widget from './Widget';

const Category = ({ category, dispatch }) => {
  const handleAddWidget = () => {
    const widget = {
      id: uuidv4(),
      name: prompt("Enter widget name:"),
      text: prompt("Enter widget text:")
    };
    dispatch({ type: 'ADD_WIDGET', payload: { categoryId: category.id, widget } });
  };

  return (
    <div>
      <h2>{category.name}</h2>
      <button onClick={handleAddWidget}>+ Add Widget</button>
      {category.widgets.map(widget => (
        <Widget 
          key={widget.id} 
          widget={widget} 
          categoryId={category.id}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Category;
