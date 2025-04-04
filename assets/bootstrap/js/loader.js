var loader;

function loading() {
  loader = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("lod").style.display = "block";
}