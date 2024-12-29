
function bmiCalculator() {
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const resultElement = document.querySelector('#bmiResult');
    const categoryElement = document.querySelector('#bmiCategory');

   
    if (!weight || !height || weight <= 0 || height <= 0) {
        resultElement.textContent = "Invalid";
        categoryElement.textContent = "Please enter valid inputs.";
        categoryElement.style.color = "red";
        return;
    }

   
    const BMI = (weight / (height * height)).toFixed(2);
    console.log(`Calculated BMI: ${BMI}`);

   
    let category;
    if (BMI < 18.5) {
        category = "Underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        category = "Normal weight";
    } else if (BMI >= 25 && BMI < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    
    resultElement.innerHTML = `<span>${BMI}</span>`;
    categoryElement.textContent = `Category: ${category}`;
    categoryElement.style.color = "green";
}
