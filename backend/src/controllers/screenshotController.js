const { takeScreenshot } = require('../services/screenshotService');

const captureScreenshot = async (req, res) => {
  const { url, format } = req.body;

  try {
    await takeScreenshot(url, format);
    res.status(200).json({ success: true, message: 'Screenshot captured successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { captureScreenshot };