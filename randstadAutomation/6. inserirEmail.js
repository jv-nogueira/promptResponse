/*

//desabilitado para reduzir o desempenho da page

//abaixo o code referente colocar o email automaticamente no campo Aprobadores

function auto() { 
    setTimeout(function(){
        [...document.querySelectorAll('label')].find(el => el.innerText == "Aprobadores").nextElementSibling.children[0].childNodes[0].value = $("[title='Email']")[0].nextElementSibling.children[0].innerText  //cola na textarea do campo Aprobadores o e-mail que consta no chamado
    console.log("email inserido")
}, 4000); 
    
    // funciona apenas quando abre o chamado em outra guia ou quando aplica pelo console
    console.log("resuelto clicado")
    }


        
    [...document.querySelectorAll('span')].find(el => el.innerText == "Resuelto").addEventListener('click', auto); 

    */