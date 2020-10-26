import path from 'path';
import App from './src/app';
const app = new App();
app.init();
global.__dirname = path.resolve('./');
