const express = require('express');
const path = require('path');
const { concatenateFiles } = require('../utils/fileUtils');

const router = express.Router();

router.post('/', async (req, res) => {
  const { whitelist, blacklist } = req.body;
  const outputFile = path.join(process.cwd(), 'concatenated_output.txt');

  try {
    const stats = await concatenateFiles(whitelist, blacklist, outputFile);
    res.json({ 
      message: 'Files concatenated successfully',
      stats: stats
    });
  } catch (error) {
    res.status(500).json({ error: 'Error concatenating files' });
  }
});

module.exports = router;