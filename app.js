import path from 'path';
import App from './src';

App.init();
global.__dirname = path.resolve('./');
