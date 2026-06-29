const toDegreesCelsius = document.getElementById("toDegreesCelsius");
const toDegreesFahrenheit = document.getElementById("toDegreesFahrenheit");
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
let temp;
function convert() {
    if(textBox.value === ""){
        result.innerHTML = `<span class="error"><strong>ERROR!</strong></span> There is no value in the textbox. <br>Please enter a value to convert`;
    }
    else{
        if(toDegreesCelsius.checked) {
            temp = Number(textBox.value);
            temp = ((temp - 32) * (5 / 9));
            result.textContent = temp.toFixed(1) + "℃";
        }
        else if(toDegreesFahrenheit.checked) {
            temp = Number(textBox.value);
            temp = (temp * (9 / 5) + 32);
            result.textContent = temp.toFixed(1) + "℉";
        }
        else{
            result.innerHTML = `<span class="error"><strong>ERROR:</strong></span>There is no option selected yet. <br>Please select a unit to convert`;
        }
    }    
}