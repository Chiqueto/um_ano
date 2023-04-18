let imgs =  document.getElementById("img")
let img = document.querySelectorAll("#img img")
let car1 = document.getElementsByClassName("carrossel1")
let cont1 = document.querySelectorAll(".container1 img")
let idx = 0

function carrossel(){
    idx++

    if(idx > img.length - 1){
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 450}px)`

    
}

setInterval(carrossel, 1800)