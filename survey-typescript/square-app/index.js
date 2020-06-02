var square = document.getElementById('square');
square.style.left = "0px";
square.style.top = "0px";
setInterval(function () {
    square.style.left = parseFloat(square.style.left) + 1 + "px";
    square.style.top = parseFloat(square.style.top) + 1 + "px";
}, 1);
