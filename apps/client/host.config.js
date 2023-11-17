const host =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:1337";

export { host };
