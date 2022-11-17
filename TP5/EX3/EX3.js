let div = document.createElement("div");
let p = document.createElement("p");
let ul = document.createElement("ul");


div.className = "divTP2";
p.textContent = "Languages bases sur ECMAScript";
let a = ["JavaScript", "JScript", "ActionScript", "EX4"];
for (let i = 0; i < a.length; i++) {
    let li = document.createElement("li");
    li.textContent = a[i];
    ul.appendChild(li);
}

div.appendChild(p);
div.appendChild(ul);
document.body.appendChild(div);