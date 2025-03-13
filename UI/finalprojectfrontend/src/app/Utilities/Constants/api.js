// Import dotenv to load environment variables from the .env file
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BASE_URL|| "http://localhost:7008";

// Define API_ROUTES using BASE_URL
export const API_ROUTES = {
    LOGIN_USERS: `https://localhost:7008/api/Auth/Login`,
    GET_EVENT : `https://localhost:7008/api/Event`,
}