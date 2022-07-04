/*
 * Title: Environments
 * Description: Handle all environments related things
 * Author: Naushad Karim
 *
 */

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'asjkfdpsjdfmldlsd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+13343578391',
        accountSid: 'ACf93855973d81d3b24a78ce933b2fca13',
        authToken: '5f1d8131b4b4afde3ef3e27936d34e9f',
    },

};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'klashjdflkjsldfj',
    maxChecks: 5,
    twilio: {
        fromPhone: '+13343578391',
        accountSid: 'ACf93855973d81d3b24a78ce933b2fca13',
        authToken: '5f1d8131b4b4afde3ef3e27936d34e9f',
    },
};

// determine which environment was passed
const currentEnvironments = 
    typeof process.env.NODE_ENV === 'string'
    ? process.env.NODE_ENV
    : 'staging';

// export corresponding environment object
const environmentToExport = 
     typeof environments[currentEnvironments] === 'object'
     ?environments[currentEnvironments]
     : environments.staging;

// export
module.exports = environmentToExport;
