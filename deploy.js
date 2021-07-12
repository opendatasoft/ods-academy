require('dotenv').config();
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.USERNAME,
    // Password optional, prompted if none given
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/shared/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["css/*", "js/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)

    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));