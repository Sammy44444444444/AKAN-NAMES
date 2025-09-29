 function getAkanName() {
       let day = document.getElementById("Day").value;
    let month = document.getElementById("Month").value;
    let year = document.getElementById("Year").value;
    let gender = document.getElementById("gender").value;

    if(isNaN(day)|| day  < 1 || day > 31) {
        result.innerHTML ="INVALID DAY";
        return;
    }

    if(isNaN(month)|| month  < 1 || month > 12) {
        result.innerHTML ="INVALID MONTH";
        return;
    }

    if(isNaN(year) || year < 1900 || year > 2100) {
        result.innerHTML ="INVALID YEAR";
        return;
    }

    if(!gender) {
        document.getElementById("result").innerHTML = "Please select your gender.";
        return;
     }

     let result = document.getElementById("result");



    let CC =Math.floor(year/100);
    let YY = year % 100;
    let MM = month;
    let DD = day;
    let d = Math.floor((( (CC/4) - (2*CC) -1) + ((5*YY)/4) + ((26*(MM+1))/10) + DD) % 7);
    if (d < 0) d += 7;
    
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    result.innerHTML = `You were born on <b>${daysOfWeek[d]}</b>.<br>
Your Akan name is <b>${akanName}</b>`;
 }