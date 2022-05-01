
/* auto Year update */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("autoYear").innerHTML = new Date().getFullYear();
});
/* new code */
var a = new Date(); var p = a.getFullYear(); document.getElementById('autoYear').innerHTML = p;
