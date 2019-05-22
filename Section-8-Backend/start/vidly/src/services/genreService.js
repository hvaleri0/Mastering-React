import http from "./httpservice";

const apiEndpoint = "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
