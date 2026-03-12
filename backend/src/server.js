import express from 'express';

import { ENV } from './config/env.js';
import { dbConnection } from './config/db.js';

const app = express();

await dbConnection().then(() => {
  app.listen(ENV.PORT, () => {
    console.log(`Server is running on PORT: ${ENV.PORT}`);
  });
});
