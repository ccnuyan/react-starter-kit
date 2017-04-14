import development from './config.development';
import production from './config.production';

const config = process.env.NODE_ENV === 'production' ? production : development;

console.log(`running in ${process.env.NODE_ENV} mode`); // eslint-disable-line no-console

export default config;
