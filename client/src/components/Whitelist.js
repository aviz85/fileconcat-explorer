import React from 'react';

function Whitelist({ value, onChange }) {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const path = event.dataTransfer.getData('text');
    onChange(prev => prev ? `${prev}\n${path}` : path);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Whitelist</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="w-full h-48 p-2 border rounded mb-4"
        placeholder="Enter whitelist paths or patterns (one per line)"
      />
    </div>
  );
}

export default Whitelist;