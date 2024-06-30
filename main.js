
/* document.getElementById("random_button").onclick = function(){
    random_color();
} */
function random_color(){
    const red = Math.floor(Math.random()*250+1);
    const green = Math.floor(Math.random()*250+1);
    const blue = Math.floor(Math.random()*250+1);

    const color = `rgb(${red},${green},${blue})`;
    
    document.body.style.backgroundColor = color;
    
}

function timer(){
    setInterval(random_color,1000)
}

