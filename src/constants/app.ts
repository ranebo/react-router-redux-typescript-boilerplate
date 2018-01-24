const nodeEnv = process.env.NODE_ENV === 'production';
console.log(process.env)

// See start.js script
// Tools like Cloud9 rely on this.
const DEFAULT_PORT: any = parseInt(process.env.PORT, 10) || 3000;
console.log(DEFAULT_PORT)
// const HOST = process.env.HOST || '0.0.0.0';
// const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

export const API_ROOT: string = nodeEnv ? 'https://admin.breadware.com/api/v1' : 'http://localhost:5000/api/v1';
export const URL_ROOT: string = nodeEnv ? '' : `http://localhost:${DEFAULT_PORT}`;

export const STORED_AUTH_TOKEN: string = 'u_t';
