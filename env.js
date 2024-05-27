const getConfig = require('next/config');
const { publicRuntimeConfig } = getConfig.default();

const API_HOST = publicRuntimeConfig.API_HOST;
const BASE_URL = publicRuntimeConfig.BASE_URL;
const STRIPE_SECRET_KEY = publicRuntimeConfig.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = publicRuntimeConfig.STRIPE_PUBLISHABLE_KEY;
const GOOGLE_PLACE_API_KEY = publicRuntimeConfig.GOOGLE_PLACE_API_KEY;
const ENVIRONMENT = publicRuntimeConfig.ENVIRONMENT;

exports.API_HOST = API_HOST;
exports.BASE_URL = BASE_URL;
exports.STRIPE_SECRET_KEY = STRIPE_SECRET_KEY;
exports.STRIPE_PUBLISHABLE_KEY = STRIPE_PUBLISHABLE_KEY;
exports.GOOGLE_PLACE_API_KEY = GOOGLE_PLACE_API_KEY;
exports.ENVIRONMENT = ENVIRONMENT;
