import './env';

import { app } from './app';

if (require.main === module) {
  app.listen(process.env.PORT, () =>
    console.log(`API URL http://localhost:4000`)
  );
}
