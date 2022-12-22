const getEnvVariables = ( envVariable, desc ) => {
  //const validated = process.env[envVariable];
  if ( envVariable === '' || envVariable === null || envVariable === undefined ) {
    throw new Error( `could not find environment varaiable: ${desc}` );
  } else {
    return envVariable;
  }
};

const config = {
  API_URL: getEnvVariables( process.env.REACT_APP_API_URL, 'API_URL' ),
  WS_URL: getEnvVariables( process.env.REACT_APP_WS_URL, 'WS_URL' )
};

export default config;
