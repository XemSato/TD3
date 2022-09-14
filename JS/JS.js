function chat(){
    console.log("heyyy");
}

// document.querySelector("svg").addEventListener(
//     'click',
//     chat
// )

document.querySelector(".accueil>h1").addEventListener(
    "click",
    Chien
)

function Chien(event){
    console.log("bah alors on se lance ! ");
    console.log(this);
    console.log(this.innerText);
    // var l = event.buttons;
    // var l = event.pageX;
    var l = event.offsetX;
    console.log(l);

    let posiX = event.pageX || event.changedTouches[0].pageX;
    posiX.innerText += "gg";
    console.log(posiX)
}

