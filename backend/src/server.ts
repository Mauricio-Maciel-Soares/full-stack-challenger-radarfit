import 'dotenv/config';
import app from './app';
import connectToDatabase from './connection';

const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  });
