//Different inbuilt Modules in node js 

const os = require('os');

// info about user
const user = os.userInfo();
// console.log(user, "user");

// Prints System uptime 

const upTime = os.uptime();
// console.log(upTime, "upTime");

// System Details

const sysDetails = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

// console.log(sysDetails, "sysDetails");