import utils, {getEnv} from "./utils";

const constants = {
    baseUrl: utils.isProd ? `${document.location}api` : getEnv("API_URL"),
    githubRepoUrl: "https://github.com/ramyarturo/dummy-rest"
}
export default constants