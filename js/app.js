// (1) Boilerplate for registering the service worker - DO NOT CHANGE THIS
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceworker.js")
      .then(_ => console.log("Service worker registered."))
      .catch(err => console.log("service worker not registered.", err));
  });
}

