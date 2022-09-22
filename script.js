function calculate(){

    let a = parseInt(document.getElementById('bookOne').value);
    let b = parseInt(document.getElementById('bookTwo').value);
    let c = parseInt(document.getElementById('bookThree').value);
    let d = parseInt(document.getElementById('bookFour').value);
    let e = parseInt(document.getElementById('bookFive').value);


// If user enter above than 100 marks then its alert a msg 
    if (a > 100 || b > 100 || c > 100 || d > 100 || d > 100 ){
        alert("Please enter correct value");
    }
    else
    {
        // for addition of all marks here
        let obtain = a+b+c+d+e;
        document.getElementById('obtain').innerHTML=obtain;

        // percentage of all marks
        let percentage = obtain / 500*100;
        document.getElementById('percentage').innerHTML=percentage;

        // check user get above than 40% then its show pass in remarks
        if(a>40 && b>40 && c>40 && d>40 && d>40){
            document.getElementById('remarks').innerHTML="<span style='color:#292'>Pass</span>";

        }
         // check user get below than 40% then its show pass in remarks
        else
        {
            document.getElementById('remarks').innerHTML="<span style='color:red'>Fail</span>";

        }
        if (percentage>=85){
            document.getElementById("grade").innerHTML="A";
        }
        else if (percentage>=70){
            document.getElementById("grade").innerHTML="B";
        }
         else if (percentage>=60){
            document.getElementById("grade").innerHTML="C";
        }
        else if (percentage>=50){
            document.getElementById("grade").innerHTML="D";
        }
        else if (percentage>=40){
            document.getElementById("grade").innerHTML="E";
        }
        else{
            document.getElementById("grade").innerHTML="F";
        }
  
    }
}