/*
como programar no java script??

tem que explicar tudo nos minimos detalhes para que ele possa fazer as coisas exemplo:
objetivo: quando clicar no botão aparecer o formulario e a mascara  e
 quando clicar na mascara o formulario e mascara voltarem para o lugar.
  1- qual botão clicar ? precisar dar um apelido/etiqueta para o botão
  2- qual formulario ? precisar dar um apelido/etiqueta para o formulario
  3- qual mascara ? precisar dar um apelido/etiqueta para a mascara
  4- oque precisa acontecer/ mostrar para o usuario ? 
         - trazer o formulario da esquerda para a direita 
         - centralizar o formulario na tela 
         - exebir a mascara 

  5- quando clicar na mascara oque deve acontecer?
        - formulario deve voltar para a esquerda 
        - mascara deve se esconder       

*/ 


const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
} 

function esconderForm(){
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

const botaoFaleConosco = document.querySelector(".faleConosco");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
} 

function esconderForm(){
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}
