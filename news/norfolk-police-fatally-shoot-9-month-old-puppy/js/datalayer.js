datalayer_script_vars.permutiveId = localStorage.getItem("permutive-id");

try {
  datalayer_script_vars.permutiveEventSourceId = JSON.parse(localStorage.getItem("permutive-data-queries"))["event-source-id"];
}
catch(err) {
  console.log(err.message);
}

datalayer_script_vars.permutiveSegments = localStorage.getItem("_psegs");

let newURL = location.href.split("?website_component")[0];
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(datalayer_script_vars);
