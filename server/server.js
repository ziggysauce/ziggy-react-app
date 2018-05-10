const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`ziggy-react-app running on PORT: ${PORT}`);
});
