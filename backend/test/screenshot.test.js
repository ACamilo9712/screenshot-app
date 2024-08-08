const takeScreenshot = require('../src/services/screenshotService').takeScreenshot;

describe('Screenshot Functionality', () => {
  it('should take a screenshot of a valid URL', async () => {
    const url = 'https://example.com';
    const format = 'png';
    await takeScreenshot(url, format);
    // Aquí deberías agregar alguna aserción para verificar que la captura de pantalla se realizó correctamente
  });

  it('should throw an error for an invalid URL', async () => {
    const url = 'invalid-url';
    const format = 'png';
    try {
      await takeScreenshot(url, format);
    } catch (error) {
      expect(error.message).toBe('Invalid URL');
    }
  });
});