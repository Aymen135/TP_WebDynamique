function Verification() {
    if (document.getElementById("pseudo").value == "" || document.getElementById("email").value == "" || document.getElementById("password").value == "" || document.getElementById("passVerf").value == "") {
        alert("Souvenez-vous de vos données")
    } else {
        alert("Vous êtes connecté entant que :" + document.getElementById("pseudo").value + "\nVotre mot de passe est : " + document.getElementById("email").value + "\nEt votre E-mail est : " + document.getElementById("password").value)
    }


}

function Reset() {
    document.getElementById('for').reset();
}