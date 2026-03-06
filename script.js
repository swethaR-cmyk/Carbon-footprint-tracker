function calculateCarbon() {

    let travel = document.getElementById("travel").value;
    let electricity = document.getElementById("electricity").value;
    let food = document.getElementById("food").value;

    let travelEmission = travel * 0.21;      // average per km
    let electricityEmission = electricity * 0.5;
    let foodEmission = food;

    let total = travelEmission + electricityEmission + Number(foodEmission);

    document.getElementById("result").innerHTML =
        "Your Total Carbon Emission: " + total.toFixed(2) + " kg CO2/day";

    if (total > 20) {
        document.getElementById("suggestion").innerHTML =
            "⚠ High emission! Try using public transport and reduce meat consumption.";
    } else {
        document.getElementById("suggestion").innerHTML =
            "✅ Good! Keep maintaining eco-friendly habits.";
    }
}