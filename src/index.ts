import './env';

import { app } from './app';

if (require.main === module) {
  app.listen(process.env.APP_PORT, () =>
    console.log(`API URL http://localhost:${process.env.APP_PORT}`)
  );
}
