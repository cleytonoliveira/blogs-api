const app = require('./src/server');

// const { PORT } = process.env || 3000;

app.listen(3000, () => console.log(`Running on port ${3000}`));
