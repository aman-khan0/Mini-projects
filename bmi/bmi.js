const container=document.querySelector(".container");
const box=document.querySelector(".box");

document.querySelector('.submit').addEventListener('click', function(e) {
    const height=parseInt(document.getElementById("height").value);
    const weight=parseInt(document.getElementById("weight").value);
    const result=document.querySelector(".result");
    if( height<0){
        result.innerHTML="please enter the valid input";
    }
    else if(  weight<0){
        result.innerHTML="please enter the valid input";
    }
    else{
        const heightInMeters = height / 100; // Convert height to meters
        const bmi = weight / (heightInMeters * heightInMeters); // Calculate BMI
        result.innerHTML = `BMI: ${bmi.toFixed(2)}`;

    }




});