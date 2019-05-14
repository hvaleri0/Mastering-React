import http from "./httpservice";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
