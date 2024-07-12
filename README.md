# FileConcat Explorer

FileConcat Explorer is a web application that allows users to browse their file system, select files and folders, and concatenate their contents based on customizable inclusion (whitelist) and exclusion (blacklist) patterns.

## Features

- Graphical file system browser
- Drag-and-drop functionality for easy file/folder selection
- Editable whitelist and blacklist with support for patterns and wildcards
- Default whitelist and blacklist loaded from disk
- File concatenation with statistics (total lines, words, and characters)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fileconcat-explorer.git
   cd fileconcat-explorer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up default whitelist and blacklist:
   - Edit `server/whitelist_default.txt` and `server/blacklist_default.txt` with your desired default patterns.

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the file browser to navigate your file system.

4. Drag and drop files or folders to the whitelist.

5. Edit the whitelist and blacklist as needed.

6. Click "Concatenate Files" to process the selected files.

7. View the concatenation results and file statistics.

## Configuration

- Default whitelist: `server/whitelist_default.txt`
- Default blacklist: `server/blacklist_default.txt`

Edit these files to change the default patterns loaded when the application starts.

## Development

- Backend: The server is built with Express.js and runs on port 5000.
- Frontend: The client is built with React and runs on port 3000 during development.

To run only the backend:
```
npm run server
```

To run only the frontend:
```
npm run client
```

## Production

To build the application for production:

1. Build the React frontend:
   ```
   cd client
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

The application will be available on the port specified by the `PORT` environment variable, or port 5000 if not specified.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.