require('dotenv').config();
module.exports = ({
    /* typescript:{
        ignoreDevErrors:true,
    }, */
    target:"serverless",
    webpack: (config, options) => {
        config.node = {
            fs: "empty",
        }
        return config;
    },
    evn:{
        VERSION: process.env.REACT_APP_SERVICE_VERSION,
        API_BASE_URL: process.env.REACT_APP_API_SERVER_BASEURL,
        HOME: process.env.NEXT_PUBLIC_HOME
    },
})