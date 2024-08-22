function cambiarImg() {
    if (document.getElementById("img").className == "hacker") {

        document.getElementById("img").src = "assets/img/Yo.jpg";
        document.getElementById("img").className = "yo"
    }
    else {
        document.getElementById("img").src = "assets/img/Hacker.png";
        document.getElementById("img").className = "hacker"
    }
}

// function changeColorBtn(color){
//     document.getElementById('btn').style.background =color;
// }

// function resetColorBtn(){
//     document.getElementById('btn').style.background = "initial";
// }
// ;

// btn.addEventListener("mouseover",function(){
//     changeColorBtn("blue");
// });

// btn.addEventListener("mouseout",resetColorBtn);

document.querySelectorAll(".btn_proyect").forEach(function(link){
    console.log(link);
    link.addEventListener("click", function(event){
        event.preventDefault();
        if (link.textContent == "ver menos") {
            link.textContent = "ver más";
        } else {
            link.textContent = "ver menos";
        }
        const cardbody = link.parentElement;
        console.log(cardbody);
        const parrafo = link.previousElementSibling;
        console.log(parrafo);
        parrafo.classList.toggle("d-none");
        const card = cardbody.parentElement;
        console.log(card);
        card.classList.toggle("bg-info");
    })
})