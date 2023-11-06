const { exec } = require("child_process");

const command = process.env.NODE_ENV === "production" ? "start" : "dev";

const child = exec(`npm run ${command}`);

child.stdout.on("data", (data) => {
  console.log(data);
});

child.stderr.on("data", (data) => {
  console.error(data);
});

child.on("error", (error) => {
  console.error(`Error starting '${command}': ${error}`);
});

child.on("close", (code) => {
  console.log(`'${command}' has exited with code ${code}`);
});
