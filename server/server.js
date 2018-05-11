require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const middleware = require('./middleware');

const PORT = process.env.PORT || 5000;
const app = express();
const publicPath = resolve(__dirname, '..', 'client/dist');

app.use(middleware);
app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`ziggy-react-app running on PORT: ${PORT}`);
});
