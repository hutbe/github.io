
alert("This alert box was called with the onload event");

var slider = document.getElementById("cost-affect-range");
var output = document.getElementById("rangevalue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
