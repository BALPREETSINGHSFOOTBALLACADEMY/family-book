var image = [
    "download.jpg, mom.png, diya.png, didi.png, swayam.png "
];
var i = 0;

function nextslide() {
    document.getElementById("album").src = image[i];
    i++;
    if (i == 9) {
        i = 0;
    }

}