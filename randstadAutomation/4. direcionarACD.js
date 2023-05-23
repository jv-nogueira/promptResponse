

// abaixo o code referente a direcionar para academia

var edificioAcademia = $("[data-testid='e2e-6007']")[0].innerHTML;
var a = [...document.querySelectorAll('span')].find(el => el.innerText == "N1.5 Soporte Remoto Global");

if(edificioAcademia == 'Edificio Academia ' && a != undefined) {
    

var f=confirm("Deseja direcionar para a fila "+edificioAcademia+"?");
if (f==true)
  {
   if($("[id='action_id_11']")[0] == undefined) {
    setTimeout(function(){
        $("[id='action_id_151']")[0].click() //Editar Grupo Resolutor
    }, 2000); 
setTimeout(function(){
    $("[title='Select an object']")[0].click() //abrir Choose Organizations
     }, 7000); 
setTimeout(function(){
    $("[class='rlabs-object-picker-row-name']")[9].click() //Selecionar a option Service Desk
     }, 12000); 
setTimeout(function(){
    $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit 
}, 17000); 
setTimeout(function(){
    $("[title='Select an object']")[1].click() //abrir options do Grupo Resolutor
     }, 21000); 
setTimeout(function(){
    $("[class='rlabs-object-picker-row-name']")[3].click() //selecionar o Academia
     }, 26000); 
setTimeout(function(){
    $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit
     }, 31000); 
setTimeout(function(){
    $("[id='customfield_26500']")[0].value = "direcionado\n\nAnalista: Vitor" //escrever na textarea
     }, 36000); 
   } 
   
   else {

    setTimeout(function(){
    $("[id='action_id_11']")[0].click() //Clicar para iniciar progresso
}, 2000); 
    setTimeout(function(){
        $("[id='action_id_101']")[0].click() //Editar Grupo Resolutor
    }, 7000); 
setTimeout(function(){
    $("[title='Select an object']")[0].click() //abrir Choose Organizations
     }, 12000); 
setTimeout(function(){
    $("[class='rlabs-object-picker-row-name']")[9].click() //Selecionar a option Service Desk
     }, 17000); 
setTimeout(function(){
    $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit 
}, 21000); 
setTimeout(function(){
    $("[title='Select an object']")[1].click() //abrir options do Grupo Resolutor
     }, 26000); 
setTimeout(function(){
    $("[class='rlabs-object-picker-row-name']")[3].click() //selecionar o Academia
     }, 31000); 
setTimeout(function(){
    $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit
     }, 36000); 
setTimeout(function(){
    $("[id='customfield_26500']")[0].value = "direcionado\n\nAnalista: Vitor" //escrever na textarea
     }, 40000); 
    }

  }
else
  {
  x="Não";
  }

}