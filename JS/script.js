const myAge = document.getElementById("my-years-old")

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()
var day = today.getDate()

function setAge(){

    if(month < 1 || month == 1 && day < 16){

        year--

    }

    myAge.innerText = `I'm ${year-2007} years old and I'm studyng programming, this website is a someone of my projects, I intend to work more on the front end.`

}

setAge()