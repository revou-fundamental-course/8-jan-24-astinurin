function calculateArea() {
    var sideLength = parseFloat(document.getElementById("areaSideLength").value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi dengan nilai angka positif.");
        return;
    }

    var area = sideLength * sideLength;

    document.getElementById("areaResult").innerHTML = "Hasil Luas: " + area.toFixed(2);

}

function calculatePerimeter() {
    var sideLength = parseFloat(document.getElementById("perimeterSideLength").value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi dengan nilai angka positif.");
        return;
    }

    var perimeter = 4 * sideLength;

    document.getElementById("perimeterResult").innerHTML = "Hasil Keliling: " + perimeter.toFixed(2);
}


