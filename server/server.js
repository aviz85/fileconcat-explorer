const express = require('express');
const cors = require('cors');
const path = require('path');
const filesRouter = require('./routes/files');
const concatenateRouter = require('./routes/concatenate');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/files', filesRouter);
app.use('/api/concatenate', concatenateRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});