module.exports = {
  apps: [
    {
      name: "server",
      cwd: "./apps/server",
      script: "start.js",
      exec_mode: "cluster",

      watch: "./src/*",
      // Logging
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "client",
      cwd: "./apps/client",
      script: "start.js",
      exec_mode: "cluster",

      watch: "./src/*",
      // Logging
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};