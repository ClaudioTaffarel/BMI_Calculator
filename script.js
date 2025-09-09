const heightInput = document.getElementById("inpHeight");
const weightInput = document.getElementById("inpWeight");
const heightUnit = document.getElementById("heightUnitz");
const weightUnit = document.getElementById("weightUnitz");
const resultBox = document.getElementById("rezultt");
const btnCalculate = document.querySelector(".calculatee");
const btnReset = document.querySelector(".resett");

btnCalculate.addEventListener("click", () => {
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (height == "" || weight == "" || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight!!");
        return;
    }

    if (heightUnit.value === "Centimeters") {
        height = height / 100;
    } else if (heightUnit.value === "Feet") {
        height = height * 0.3048;
    } else if (heightUnit.value === "Inch") {
        height = height * 0.0254;
    }

    if (weightUnit.value === "Pound") {
        weight = weight * 0.453592;
    }

    const bmi = weight / (height * height);

    resultBox.innerHTML = bmi.toFixed(2);
});

btnReset.addEventListener("click", () => {
    heightInput.value = "";
    weightInput.value = "";
    resultBox.innerHTML = "00.00";
});
