//import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://561163c459234807bdc9da2c0e43081b@sentry.io/1457238"
  // });
}

function log(error) {
  console.error(error);
  //Sentry.captureException(error);
}

export default {
  init,
  log
};
