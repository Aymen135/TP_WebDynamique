function changeColor() {
    document.getElementById("paragraphe").setAttribute("style", "color:red");
}

function night() {
    document.body.style.backgroundColor = "black";
    document.getElementById("paragraphe").setAttribute("style", "color:red");
}

function jour() {
    document.body.style.backgroundColor = "white";
    document.getElementById("paragraphe").setAttribute("style", "color:black");
}

function changeImage() {
    document.getElementById("image").src = "cs.png"
}