const express = require('express');
const { getFiles, readDefaultList } = require('../utils/fileUtils');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const path = req.query.path || '/';
    const files = await getFiles(path);
    res.json({ files });
  } catch (error) {
    res.status(500).json({ error: 'Error reading directory' });
  }
});

router.get('/defaults', async (req, res) => {
  try {
    const whitelist = await readDefaultList('whitelist_default.txt');
    const blacklist = await readDefaultList('blacklist_default.txt');
    res.json({ whitelist, blacklist });
  } catch (error) {
    res.status(500).json({ error: 'Error reading default lists' });
  }
});

module.exports = router;