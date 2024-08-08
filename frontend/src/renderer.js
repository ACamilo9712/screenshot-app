document.getElementById('screenshot-form').addEventListener('submit', async (event) => {
    
    event.preventDefault();

    const url = document.getElementById('url').value;
    const format = document.getElementById('format').value;

    console.log(`Taking screenshot of URL: ${url} with format: ${format}`);

    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Taking screenshot...';

    try {
        const result = await ipcRenderer.invoke('take-screenshot', { url, format });
        messageElement.textContent = result;
    } catch (error) {
        messageElement.textContent = 'Error occurred while taking screenshot';
        console.error('Error:', error);
    }

    console.log(`Screenshot result: ${messageElement.textContent}`);
});
