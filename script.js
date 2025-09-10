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

    document.querySelectorAll(".bmiBox").forEach(box => {
        box.classList.remove("highlight");
    });

    let categoryIndex = -1;

    if (bmi < 18.5) {
        categoryIndex = 0;
    } else if (bmi >= 18.5 && bmi < 25) {
        categoryIndex = 1;
    } else if (bmi >= 25 && bmi < 30) {
        categoryIndex = 2;
    } else if (bmi >= 30 && bmi < 35) {
        categoryIndex = 3;
    } else if (bmi >= 35 && bmi < 40) {
        categoryIndex = 4;
    } else if (bmi >= 40) {
        categoryIndex = 5;
    }

    if (categoryIndex !== -1) {
        const boxes = document.querySelectorAll(".bmiBox");
        boxes[categoryIndex].classList.add("highlight");
        boxes[categoryIndex].scrollIntoView({ behavior: "smooth", block: "center" });
    }
});


btnReset.addEventListener("click", () => {
    heightInput.value = "";
    weightInput.value = "";
    resultBox.innerHTML = "00.00";
    document.querySelectorAll(".bmiBox").forEach(box => {
        box.classList.remove("highlight");
    });
});