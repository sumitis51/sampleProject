let BASE_URL = 'https://qversity.com';
let REDIRECT_URI = `${window.location.origin}/implicit/callback`;

switch (process.env.REACT_APP_ENV) {
  case 'qa':
    BASE_URL = 'https://qa.qversity.com';
    break;
  case 'staging':
    BASE_URL = 'https://staging.qversity.com';
    break;
  case 'prod':
    BASE_URL = 'https://prod.qversity.com';
    REDIRECT_URI = `https://qversity/implicit/callback`;
    break;
  default:
    BASE_URL = 'https://qversity.com';
    break;
}

export default {
  base: {
    baseUrl: BASE_URL,
    redirectUri: REDIRECT_URI,
  }
};