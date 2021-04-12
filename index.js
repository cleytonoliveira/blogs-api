const app = require('./src/server');

const { PORT } = process.env || 3000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
