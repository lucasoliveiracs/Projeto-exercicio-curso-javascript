
var data = new Date();
var dia = ("0" + data.getDate()).slice(-2);
var mes = ("0" + (data.getMonth() + 1)).slice(-2);
var ano4 = data.getFullYear();
var hora = ("0" + data.getHours()).slice(-2);
var min = ("0" + data.getMinutes()).slice(-2);
var str_data = dia + '/' + mes + '/' + ano4;
var str_hora = hora + ':' + min;

alert("São " + hora + " horas e " + min + " minutos do dia " + dia + " do mês " + mes + " do ano " + ano4);

var nome = "Lucas Oliveira"
alert("Eu sou o " + nome + " e se você chegou aqui é porquê tem sorte! \nSUA SENHA É = 01234")

var nome2 = prompt("Qual o seu nome? ")
var senha = prompt("Digite sua senha: ")

if (senha == "01234") {
    if (nome2 != "") {
        alert("Olá " + nome2 + " seja bem vindo à uma página que fiz como exercício no curso de programação para internet com javascript do bootcamp Decola Dev 2021 da Avanade")
    }else {
        alert("Você não tem nome? OK... seja bem vindo à uma página que fiz como exercício no curso de programação para internet com javascript do bootcamp Decola Dev 2021 da Avanade")
    }
}else{
    window.open('', '_self', ''); window.close();
}

 function clic() {
     document.getElementById("lista").innerHTML = ("Python <br><br> Java <br><br> SQL <br><br> C#");
 };
 function mouseEmCima(imagem) {
   
    imagem.src="img/icon-github2.png";  
};
 function mouseFora(imagem) {
    
    imagem.src="img/icon-github.png";
};
    