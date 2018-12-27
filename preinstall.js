const fs = require("fs");
fs.writeFile("./read-with-me-auth-credentials.json", process.env.google_config, err => console.log(`Errors during preinstall: ${err}`));