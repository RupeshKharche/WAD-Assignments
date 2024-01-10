// Parsing data from url query parameters
let urlParams = new URLSearchParams(window.location.search);
let data = urlParams.get("data");

// Displaying the data
document.getElementById("user-data-container").innerHTML = data;