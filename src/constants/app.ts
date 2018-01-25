const nodeEnv = process.env.NODE_ENV === 'production';

export const API_ROOT: string = nodeEnv ? 'http://localhost:3030' : 'http://localhost:3030';
export const URL_ROOT: string = nodeEnv ? document.domain : `http://localhost:3000`;

export const STORED_AUTH_TOKEN: string = 'u_t';
