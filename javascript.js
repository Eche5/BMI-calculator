function calculate(){
  //Need to determine the constant of some id functions.
    var bmi;
    var result = document.getElementById("result");
    const calories = document.querySelector(".result-message");
  //The value of the height slider
    var height = parseInt(document.getElementById("height").value);
  //The value of the weight slider
    var weight = parseInt(document.getElementById("weight").value);
  //The value of the Age slider
    var Age = parseInt(document.getElementById("Age").value);


  //The value of height and width should be displayed in the webpage using "textContent".
    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";
    document.getElementById("Age-val").textContent = Age + " years";

//Now I have added the formula for calculating BMI in "bmi"
    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
  //With the help of "textContent" we have arranged to display in the result page of BMI
    result.textContent = bmi;
    document.querySelector(".calories").innerHTML = bmi*105.46.toFixed(0);
    // calories.innerHTML = bmi*105.46;


  //Now we have to make arrangements to show the text


  //When the BMI is less than 18.5, you can see the text below
    if(bmi < 18.5){
        category = "Underweight 😒";
        result.style.color = "#ffc44d";
    }

  //If BMI is >=18.5 and <=24.9
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Your BMI indicates that your weight is Normal Congrat!!!😍";
        result.style.color = "#0be881";
    }

  //If BMI is >= 25 and <= 29.9 
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight 😮";
        result.style.color = "#ff884d";
    }

  //If BMI is <= 30
    else{
        category = "Obese 😱";
        window.open("https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        // window.open('https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment/','NIH',' menubar=0, resizable=0,dependent=0,status=0,width=300,height=200,left=10,top=10');
        result.style.color = "#ff5e57";
    }

    document.getElementById("category").textContent = category;

}
