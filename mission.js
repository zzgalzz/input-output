window.onload = function () {
    boomTryAgainBtn()
    addtwonumbersBtn()
    multitwonumbersBt7n()
    printDayOfWeek()
    printdaysOfmonth()
    printHoliday()
    printUser()


}

// משימה 1
function boomTryAgain() {
    let number1boom = document.qerySelector("#inpt_boom_tryAgain").value
    let number2boom = document.querySelector("#inpt_boom_tryAgain2").value
    if (number1boom == number2boom) {
        document.querySelector("#span_boom_tryAgain").innerHTML = "BOOM!!"
    } else {
        document.querySelector("#span_boom_tryAgain").innerHTML = "TRY AGAIN"
    }
}
function boomTryAgainBtn() {
    let check5_btn = document.querySelector("#btn_boom_tryAgain");
    check5_btn.addEventListener("click", boomTryAgain)
}

// משימה 2
function addtwonumbers() {
    let number1Add, number2Add, sumAdd;
    number1Add = parseInt(document.querySelector("#inpt_number_one").value);
    number2Add = parseInt(document.querySelector("#inpt_number_two").value);
    sumAdd = number1Add + number2Add;
    document.querySelector("#span_add_number").innerHTML = sumAdd
}

function addtwonumbersBtn() {
    let check1_btn = document.querySelector("#btn_add_number");
    check1_btn.addEventListener("click", addtwonumbers)
}

// משימה 3
function multitwonumbers() {
    let number1Add, number2Add, sumAdd;
    number1Add = parseInt(document.querySelector("#inpt_number_frist").value);
    number2Add = parseInt(document.querySelector("#inpt_number_secont").value);
    sumAdd = number1Add * number2Add;
    document.querySelector("#span_multi_number").innerHTML = sumAdd
}

function multitwonumbersBt7n() {
    let multi_btn = document.querySelector("#btn_multi_number");
    multi_btn.addEventListener("click", multitwonumbers)
}

// משימה 4

function chosedayinweek(){
    let dayofweek = document.querySelector("#select_daysOfWeek").value
    if (dayofweek == 1){  
    document.querySelector("#span_daysOfWeek").innerHTML = "good week";
    document.querySelector("#span_daysOfWeek").style.background = "yellow";
}
else if (dayofweek == 2 || dayofweek == 3 || dayofweek == 4){
    document.querySelector("#span_daysOfWeek").innerHTML = "good day";
    document.querySelector("#span_daysOfWeek").style.background = "red";
}
else if (dayofweek == 5 || dayofweek == 6 || dayofweek == 7){
    document.querySelector("#span_daysOfWeek").innerHTML = "happy weekend";
    document.querySelector("#span_daysOfWeek").style.background = "green";
}


}

function printDayOfWeek() {
    let printBless = document.querySelector("#select_daysOfWeek");
    printBless.addEventListener("change", chosedayinweek)
}


// משימה 5
function chosedayinmonth(){
    let dayofmonth = document.querySelector("#inpt_day_month").value
    if (dayofmonth == 1){  
    document.querySelector("#span_day_month").innerHTML = "good month";
}
else if (dayofmonth < 10){  
    document.querySelector("#span_day_month").innerHTML = "start work";

}
else if (dayofmonth == 10){  
    document.querySelector("#span_day_month").innerHTML = "get salary";

}
else if (dayofmonth <= 20){  
    document.querySelector("#span_day_month").innerHTML = "be happy";

}
else if (dayofmonth < 30){  
    document.querySelector("#span_day_month").innerHTML = "the end";

}
else if (dayofmonth == 31){  
    document.querySelector("#span_day_month").innerHTML = "boom boom";

}

}
function printdaysOfmonth() {
    let printmonth = document.querySelector("#inpt_day_month");
    printmonth.addEventListener("input", chosedayinmonth)
}

// משימה 6

function choseoliday(){
    let holidays = document.querySelector("#select_holiday").value
    if (holidays == 1){  
    document.querySelector("#span_holiday").innerHTML = "happy purim";
}
else if (holidays == 2){  
    document.querySelector("#span_holiday").innerHTML = "clear home";
}
else if (holidays == 3){  
    document.querySelector("#span_holiday").innerHTML = "eat milk";
}
else if (holidays == 4){  
    document.querySelector("#span_holiday").innerHTML = "build suka";
}
}
function printHoliday() {
    let printmonth222 = document.querySelector("#select_holiday");
    printmonth222.addEventListener("change", choseoliday)
}


// משימה 7

function choseUser(){
    let userpass = document.querySelector("#input_password").value
    let userna = document.querySelector("#usrn").value

    if (userpass === "123" && userna === "admin" ){  
    alert("connected");
    document.querySelector("#btn_form").type = "sumbit"

}
else if(userpass.length<6){
    alert("the password must contain 6 numbers");
    document.querySelector("#input_password").style.background = "red"

}
else{
    document.querySelector("#input_password").style.background = "red"
        document.querySelector("#usrn").style.background = "red"
        document.querySelector("#span_formMsg").innerHTML = "the details you filled doesn't correct";
}
 



}

function printUser() {
    let printmonth322 = document.querySelector("#btn_form");
    printmonth322.addEventListener("click", choseUser)
}