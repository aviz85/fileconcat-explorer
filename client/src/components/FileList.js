import React from 'react';

function FileList({ files, onFileClick, onDrop }) {
  const handleDragStart = (event, file) => {
    event.dataTransfer.setData('text/plain', file.path);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const path = event.dataTransfer.getData('text');
    onDrop(path);
  };

  return (
    <ul className="border rounded p-2 h-96 overflow-y-auto">
      {files.map((file, index) => (
        <li 
          key={index} 
          className="cursor-pointer hover:bg-gray-100 p-1"
          onClick={() => onFileClick(file)}
          draggable
          onDragStart={(e) => handleDragStart(e, file)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {file.isDirectory ? '📁 ' : '📄 '}
          {file.name}
        </li>
      ))}
    </ul>
  );
}

export default FileList;