const fs = require('fs').promises;
const path = require('path');
const glob = require('glob-promise');
const fnmatch = require('fnmatch');

const getFiles = async (dirPath) => {
  const files = await fs.readdir(dirPath, { withFileTypes: true });
  return files.map(file => ({
    name: file.name,
    isDirectory: file.isDirectory(),
    path: path.join(dirPath, file.name)
  }));
};

const isInPatterns = (filePath, patterns) => {
  return patterns.some(pattern => fnmatch.fnmatch(filePath, pattern));
};

const concatenateFiles = async (whitelistPatterns, blacklistPatterns, outputFile) => {
  let output = '';
  let totalLines = 0;
  let totalWords = 0;
  let totalCharacters = 0;

  const patterns = whitelistPatterns.split('\n').map(p => p.trim()).filter(p => p);
  const blacklist = blacklistPatterns.split('\n').map(p => p.trim()).filter(p => p);

  for (const pattern of patterns) {
    const files = await glob(pattern);
    for (const filePath of files) {
      if (!isInPatterns(filePath, blacklist)) {
        try {
          const content = await fs.readFile(filePath, 'utf-8');
          output += `\n\n# File: ${filePath}\n\n${content}`;
          
          const lines = content.split('\n');
          totalLines += lines.length;
          totalWords += content.split(/\s+/).filter(word => word.length > 0).length;
          totalCharacters += content.length;
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
        }
      }
    }
  }

  await fs.writeFile(outputFile, output, 'utf-8');

  return { lines: totalLines, words: totalWords, characters: totalCharacters };
};

const readDefaultList = async (filename) => {
  try {
    const content = await fs.readFile(path.join(__dirname, '..', filename), 'utf-8');
    return content.trim();
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return '';
  }
};

module.exports = { getFiles, concatenateFiles, readDefaultList };