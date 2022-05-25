import { config } from "dotenv";

config();

export const __dbName__ = process.env.API_DB_NAME;
export const __dbPort__ = process.env.API_DB_PORT;
export const __dbHost__ = process.env.API_DB_HOST;
export const __dbUser__ = process.env.API_DB_USER;
export const __dbPassword__ = process.env.API_DB_PASSWORD;
export const __apiPort__ = process.env.API_PORT;
export const __dbSync__ = process.env.API_DB_SYNC === "true" ? true : false;
export const __isProd__ = process.env.API_IS_PROD === "true" ? true : false;
export const __secretSession__ = process.env.API_SECRET_SESSION;
export const __clientURL__ = process.env.API_CLIENT_URL;
export const __token__ = process.env.TOKEN_SECRET;
export const __s3KeyId__ = process.env.Q_ACCESS_KEY_ID;
export const __s3Secret__ = process.env.Q_SECRET_ACCESS_KEY;
export const __s3Region__ = process.env.Q_AWS_REGION;
export const __s3Bucket__ = process.env.Q_S3_BUCKET;
