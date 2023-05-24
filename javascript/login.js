//Login
function validar() {
    email = document.querySelector("#email").value;
    pass = document.querySelector("#psw").value;

    registo_user = localStorage.email;
    registo_pass = localStorage.pass;


    if (email=="") {
        document.querySelector('#errado').style.visibility = "visible";;
    }else{
        if (email==registo_user && pass==registo_pass) {
            alert("Bem vindo!");
            window.location="htmlteste.html";
        }else{
            alert("Dados incorretos!")
        }
    }
}

//Regista
function registar() {
    localStorage.email = document.querySelector("#email").value;
    localStorage.pass = document.querySelector("#psw").value;
    alert("Utilizador Registado com Sucesso!");
    window.location="login.html";
}

//Consultas
function consultas(){
    alert("Consulta marcada!");
    window.location="htmlteste.html";
}

//Form Quem Somos
function enviarqs(){
    alert("Formulário enviado com sucesso! \nResponderemos o mais depressa possível!");
    window.location="htmlteste.html";
}


