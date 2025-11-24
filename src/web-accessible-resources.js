if (typeof FB_PUBLIC_LOAD_DATA_ === "undefined") {
  console.error("[google-form-history] FB_PUBLIC_LOAD_DATA_ is not defined.");
  return;
}

window.postMessage(
  {
    source: "google-form-history",
    payload: FB_PUBLIC_LOAD_DATA_,
  },
  window.location.origin
);
