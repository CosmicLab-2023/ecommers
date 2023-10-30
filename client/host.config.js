const host =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://0.0.0.0:1337";

export { host };
