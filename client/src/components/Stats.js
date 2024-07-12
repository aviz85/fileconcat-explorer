import React from 'react';

function Stats({ stats }) {
  return (
    <div className="mt-4 p-2 bg-blue-100 border border-blue-400 rounded">
      <h3 className="font-semibold">Concatenated File Statistics:</h3>
      <ul>
        <li>Total Lines: {stats.lines}</li>
        <li>Total Words: {stats.words}</li>
        <li>Total Characters: {stats.characters}</li>
      </ul>
    </div>
  );
}

export default Stats;