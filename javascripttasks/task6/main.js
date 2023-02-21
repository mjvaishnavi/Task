const button1 = document.getElementById("button1")
const body = document.getElementsByTagName("body")[0]
const colors = ['red', 'blue', 'yellow', 'pink', 'black', 'green', 'orange', 'violet', 'grey', 'purple']
var counts = {}
button1.addEventListener("click", function (event) {
    var randomNumber = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[randomNumber]
    if(counts[colors[randomNumber]]){
        counts[colors[randomNumber]] += 1
    }
    else{
        counts[colors[randomNumber]] = 1
    }
    console.log("Color Counts \n ==========================")
    for(let color in counts){
        console.log(color+" : "+counts[color])
    }


})

