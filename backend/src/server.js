const express = require('express');
const cors = require('cors');
const path = require('path');
const screenshotRoutes = require('./routes/screenshotRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/screenshot', screenshotRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
