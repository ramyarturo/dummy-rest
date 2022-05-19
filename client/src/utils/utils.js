

export const sleep = (ms) => new Promise(r => setTimeout(r, ms));
export const getEnv = (key) => process.env[`REACT_APP_${key}`]


const utils = {}

utils.isProd = process.env.NODE_ENV === "production"

export default utils