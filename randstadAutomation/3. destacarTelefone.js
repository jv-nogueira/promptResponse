

function btn(){
  /*
  if($("[title='Anexo']")[0] == undefined) {
      setTimeout(function(){
      alert("Não há o Anexo (cel para contato)")
  }, 1000); 
  } */
  setTimeout(function(){
      $("[title='Anexo']")[0].style.backgroundColor = '#ff0'; 
      $("[id='customfield_18896-val']")[0].style.backgroundColor = '#ff0'
  }, 1000); 
  
  setTimeout(function(){
      $("[title='Horario Disponible']")[0].style.backgroundColor = '#ff0'; 
      $("[id='customfield_24805-val']")[0].style.backgroundColor = '#ff0'
  }, 1000); 

}

$(document).on('DOMNodeInserted', '.details-layout', function() {
  btn();
});


