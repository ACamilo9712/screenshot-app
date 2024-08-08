const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');

function createWindow() {
  console.log('Creating new window...');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      devTools: true 
    }
  });

  win.loadFile('src/index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    console.log('No windows open, creating new window...');
    createWindow();
  }
});

// IPC to handle screenshot request
ipcMain.handle('take-screenshot', async (event, { url, format }) => {
  console.log(`Received screenshot request for URL: ${url} with format: ${format}`);
  try {
    const response = await axios.post('http://localhost:3001/api/screenshot', { url, format });
    console.log(`Screenshot response: ${response.data.message}`);
    return response.data.message;
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    return error.response ? error.response.data.message : 'Error capturing screenshot';
  }
});
