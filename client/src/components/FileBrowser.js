import React, { useState, useEffect } from 'react';
import FileBrowser from './components/FileBrowser';
import Whitelist from './components/Whitelist';
import Blacklist from './components/Blacklist';
import Stats from './components/Stats';
import axios from 'axios';

function App() {
  const [whitelist, setWhitelist] = useState('');
  const [blacklist, setBlacklist] = useState('');
  const [message, setMessage] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDefaults();
  }, []);

  const fetchDefaults = async () => {
    try {
      const response = await axios.get('/api/files/defaults');
      setWhitelist(response.data.whitelist);
      setBlacklist(response.data.blacklist);
    } catch (error) {
      console.error('Error fetching defaults:', error);
    }
  };

  const handleConcatenate = async () => {
    try {
      const response = await axios.post('/api/concatenate', { whitelist, blacklist });
      setMessage(response.data.message);
      setStats(response.data.stats);
    } catch (error) {
      setMessage('Error concatenating files. Please try again.');
      setStats(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">FileConcat Explorer</h1>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <FileBrowser onDrop={(path) => setWhitelist(prev => prev ? `${prev}\n${path}` : path)} />
        </div>
        <div className="w-1/2 pl-4">
          <Whitelist value={whitelist} onChange={setWhitelist} />
          <Blacklist value={blacklist} onChange={setBlacklist} />
          <button 
            onClick={handleConcatenate}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Concatenate Files
          </button>
        </div>
      </div>
      {message && (
        <div className="mt-4 p-2 bg-green-100 border border-green-400 rounded">
          {message}
        </div>
      )}
      {stats && <Stats stats={stats} />}
    </div>
  );
}

export default App;