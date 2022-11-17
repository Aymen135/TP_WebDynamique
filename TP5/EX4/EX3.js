let ul = document.createElement("ul");
let inp = document.createElement("input");

function create() {
    let a = document.getElementById("input").value;

    document.getElementById("input").value = "";
    let but = document.createElement("button");

    let b = document.createElement("span");
    let li = document.createElement("li");
    li.className = "subjectName";
    ul.appendChild(li);
    let grand = document.createElement("b");
    grand.textContent = a;
    b.appendChild(grand);
    but.textContent = "Delete";
    li.appendChild(b);
    li.appendChild(but);
    document.getElementById("products").appendChild(ul);
    let allSubjectName = document.querySelectorAll("li");
    for (var index = 0; index < allSubjectName.length; index++) {
        // allSubjectName[index].addEventListener("click", function() {
        //     this.classList.toggle("active");
        // });
        allSubjectName[index].querySelector("button").addEventListener("click",
            function() {
                // this.closest(".subjectName").remove();
                this.parentElement.remove();
            });
    }
}