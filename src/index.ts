import './env';

import { app } from './app';

if (require.main === module) {
  app.listen(4000, () => console.log(`API URL http://localhost:4000`));
}
