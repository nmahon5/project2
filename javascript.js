console.log(window);
timer();


function changeText(){
value = document.getElementById("countDown").innerHTML;
console.log(value);

if (value == 0){
window.location.href = "https://www.google.com";
}
else{
newValue = (value - 1)
document.getElementById("countDown").innerHTML = newValue;
}
}


function timer(){

    if(document.getElementById("countDown").innerHTML == 0){
        window.location.href = 'pages/secondpage.html'
    }
    
    setTimeout(function(){
        changeText();
        timer();
    }, 1000);
    }