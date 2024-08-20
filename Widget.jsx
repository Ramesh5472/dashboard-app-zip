import React from 'react';

const Widget = ({ widget, categoryId, dispatch }) => {
  const handleRemoveWidget = () => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId: widget.id } });
  };

  return (
    <div>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemoveWidget}>× Remove</button>
    </div>
  );
};

export default Widget;
