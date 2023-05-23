//direcionar para GRU 

var UBICACION = $("[data-testid='e2e-6007']")[0].innerHTML;
var a = [...document.querySelectorAll('span')].find(el => el.innerText == "N1.5 Soporte Remoto Global");

if(UBICACION == 'Aeropuerto Guarulhos ' && a != undefined) {
    
var f=confirm("Deseja direcionar para a fila "+UBICACION+"?");

if (f==true){
    if($("[id='action_i_91']")[0] != undefined){

        setTimeout(function(){
            [...document.querySelectorAll('span')].find(el => el.innerText == "Editar Grupo Resolutor").click() //Editar Grupo Resolutor
        }, 2000); 
    setTimeout(function(){
        $("[title='Select an object']")[0].click() //abrir Choose Organizations
         }, 7000); 
    setTimeout(function(){
        $("[class='rlabs-object-picker-row-name']")[2].click() //Selecionar a option Service Desk
         }, 12000); 
    setTimeout(function(){
        $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit 
    }, 16000); 
    setTimeout(function(){
        $("[title='Select an object']")[1].click() //abrir options do Grupo Resolutor
         }, 21000); 
    setTimeout(function(){
        $("[class='rlabs-object-picker-row-name']")[6].click() //selecionar GRU
         }, 26000); 
    setTimeout(function(){
        $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit
         }, 31000); 
    setTimeout(function(){
        $("[id='customfield_26500']")[0].value = "direcionado\n\nAnalista: Vitor" //escrever na textarea
         }, 36000);
        
    }
   else if($("[id='action_id_11']")[0] == undefined) {
    setTimeout(function(){
        [...document.querySelectorAll('span')].find(el => el.innerText == "Editar Grupo Resolutor").click() //Editar Grupo Resolutor
    }, 2000); 
setTimeout(function(){
    $("[title='Select an object']")[0].click() //abrir Choose Organizations
     }, 7000); 
setTimeout(function(){
    $("[class='rlabs-object-picker-row-name']")[2].click() //Selecionar a option Service Desk
     }, 12000); 
setTimeout(function(){
    $("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit 
}, 16000); 
setTimeout(function(){
    $("[title='Select an object']")[1].click() //abrir options do Grupo Resolutor
     }, 21000); 
setTimeout(function(){
    $("[class='rlabs-object-picker-row-name']")[6].click() //selecionar GRU
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
    [...document.querySelectorAll('span')].find(el => el.innerText == "Editar Grupo Resolutor").click() //Editar Grupo Resolutor
}, 6000); 
setTimeout(function(){
$("[title='Select an object']")[0].click() //abrir Choose Organizations
 }, 10000); 
setTimeout(function(){
$("[class='rlabs-object-picker-row-name']")[2].click() //Selecionar a option Service Desk
 }, 14000); 
setTimeout(function(){
$("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit 
}, 18000); 
setTimeout(function(){
$("[title='Select an object']")[1].click() //abrir options do Grupo Resolutor
 }, 22000); 
setTimeout(function(){
$("[class='rlabs-object-picker-row-name']")[6].click() //selecionar GRU
 }, 26000); 
setTimeout(function(){
$("[class='button-panel-button rlabs-button aui-button aui-button-primary rlabs-button-confirm']").click() //dar submit
 }, 30000); 
setTimeout(function(){
$("[id='customfield_26500']")[0].value = "direcionado\n\nAnalista: Vitor" //escrever na textarea
 }, 34000); 
    }

  }
else
  {
  x="Não";
  }

}

