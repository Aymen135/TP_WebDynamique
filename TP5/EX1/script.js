function hello() {
    alert("Hello word")
}

function dialogue() {
    var result0 = prompt("Quel est votre nom?")

    if (result0 != null) {
        var result = confirm("vous vous appelez vraiment " + result0);
        if (result) {
            alert("bonjour " + result0);
        }
    }
}