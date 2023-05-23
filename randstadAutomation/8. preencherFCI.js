//Projeto para automatizar o preenchimento do formulario do FCI

if(document.domain == "docs.google.com") {

setTimeout(function(){
[...document.querySelectorAll('span')].find(el => el.innerText == "Próxima").children[0].click() //Clica em próxima automaticamente ao enviar o formulario
}, 1000); 

setTimeout(function(){
[...document.querySelectorAll('span')].find(el => el.innerText == "FCI Normal (Formulario Control De Inventario)").click() //Clica para abrir as options da pergunta 1 
}, 2500); 

setTimeout(function(){
    [...document.querySelectorAll('span')][9].click() //Clica na option acima
}, 3500); 

setTimeout(function(){
[...document.querySelectorAll('span')][9].click() //clica para abrir as option da pergunta 2
}, 4500); 

setTimeout(function(){
[...document.querySelectorAll('span')][14].click() //clica para selecionar Ejecucion Manual
}, 5500); 

setTimeout(function(){
$("[aria-label='Error al actualizarse en Jira']").click() //Selecionar a option da pergunta 3
}, 6500); 

setTimeout(function(){
$("[aria-label='Sua resposta']").value = "Rodado FCI manualmente" //pergunta 4 
}, 7500); 

}
// [...document.querySelectorAll('input')][10].value = [...document.querySelectorAll('input')][9].dataset.initialValue //colocar o mesmo value no campo abaixo