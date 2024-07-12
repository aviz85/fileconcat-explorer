import React from 'react';

function Blacklist({ value, onChange }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Blacklist Patterns</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-24 p-2 border rounded"
        placeholder="Enter blacklist patterns (one per line)"
      />
    </div>
  );
}

export default Blacklist;