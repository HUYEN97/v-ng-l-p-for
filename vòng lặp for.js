let text = "1";
let i;
for (i = 0; i < 5; i++){
    text += "The number is" + i + "<br>";
}
document.getElementById("demo").innerHTML = text;