// utils/speckle.js
import { SpeckleServer } from '@speckle/speckle-server-js';

const speckle = new SpeckleServer({
  serverUrl: 'https://speckle.xyz',
  token: 'YOUR_ACCESS_TOKEN', 
});

export default speckle;