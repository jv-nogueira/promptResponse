//Criar o projeto de fluxograma de diagnostico de desktops and laptops

//RESPOSTAS PADRONIZADAS
var commonQuestion = { 
apresentaSinalEnergia: "Apresenta algum sinal de energia? Ventoinha girando, led ligado, barulho, CapsLock ou NumLock ligado?\n\n"+"1. SIM\n"+"2. NÃO",
padraoHardReset: "Hard reset resolveu o problema?\n\n"+"1. SIM\n"+"2. NÃO",
padraoEPSA: "Teve algum erro no teste do EPSA?\n\n"+"1. SIM\n"+"2. NÃO",
padraoCapsLock: "O button caps lock ou num lock responde normalmente ao comando?\n\n"+"1. SIM\n"+"2. NÃO",
tomadaProblema: "A tomada é o problema?\n\n"+"1. SIM\n"+"2. NÃO",
caboAlimentacao: "O cabo de alimentacao é o problema?\n\n"+"1. SIM\n"+"2. NÃO"
};

//abaixo se trata do fluxograma para desktop NOVIDEO
var noVideo_1 = "1. O desktop apresenta algum sinal de energia? Ventoinha girando, led ligado, barulho?";
var noVideo_2 = "2. Apos ligar, apresenta algo no monitor como o logo do Windows?";
var noVideo_3 = "3. Realize o teste de cores: ligar o equipamento com o button 'D' pressionado. Apresentou algo na tela?";
var noVideo_4 = "3. O problema esta no ajuste do brilho do monitor?";
var noVideo_5 = "4. Apos ligar, o button caps lock ou num lock responde normalmente ao comando?"; //diagnostico comum
var noVideo_6 = "5. Um monitor alternativo projeta normalmente?";
var noVideo_7 = "6. O problema eh o cabo HDMI ou VGA?";

//abaixo se trata do fluxograma para desktop NOPOST
var noPost_1 = "1. Eh possivel realizar o teste do EPSA?"
var noPost_2 = "2. Teve algum erro no teste do EPSA?" //diagnostico comum
var noPost_3 = "3. O desktop apresenta algum sinal de energia? Ventoinha girando, led ligado, barulho?";
var noPost_4 = "4. Hard reset resolveu o problema?"; //diagnostico comum
var noPost_5 = "5. Apos ligar, o button caps lock ou num lock responde normalmente ao comando?";
var noPost_6 = "6. Apresenta algum padrao de led piscando ou um padrao de beeps?";

//abaixo se trata do fluxograma para desktop NOBOOT
var noBoot_1 = "1. Ao ligar, apareceu o logo do Windows?";
var noBoot_2 = "2. O tempo de espera para inicializar eh superior a 10 minutos?";
var noBoot_3 = "3. Hard reset resolveu o problema?";
var noBoot_4 = "4. Eh possivel realizar o teste do EPSA?"
var noBoot_5 = "5. Teve algum erro no teste do EPSA?"  //diagnostico comum
var noBoot_6 = "6. Conseguiu inicializar pelo modo de seguranca?";
var noBoot_7 = "7. Conseguiu fazer o backup?";

//abaixo se trata do fluxograma para desktop NO-SPEAKER
var noSpeaker_1 = "1. O problema ocorre com um fone de ouvido conectado?";
var noSpeaker_2 = "2. Eh possivel realizar o teste do EPSA?";
var noSpeaker_3 = "3. Teve algum erro no teste do EPSA?"; //diagnostico comum
var noSpeaker_4 = "Deu para ouvir algum barulho ao realizar o teste do EPSA?";
var noSpeaker_5 = "4. Reinicie, o problema persiste?";
var noSpeaker_6 = "5. Reinstalar os drivers de audio, o problema persiste?";

//abaixo se trata do fluxograma para desktop NO-NETWORK
var noNetwork_1 = "1. Na area de trabalho apresenta que esta com internet?";
var noNetwork_2 = "2. O problema é o cabo de rede? Teste em outro equipamento";
var noNetwork_3 = "3. No conector do cabo apresenta o led de rede piscando?";
var noNetwork_4 = "4. Hard reset resolveu o problema?"; //diagnostico comum
var noNetwork_5 = "5. Teve algum erro no teste do EPSA?" //diagnostico comum

//abaixo se trata do fluxograma para desktop NO-WIFI
var noWifi_1 = "Eh a primeira vez que o problema ocorre ou apresentou recentemente?";
var noWifi_1 = "A rede wifi eh pessoal ou corporativa?";
var noWifi_2 = "2. A internet funciona normalmente quando conectada via cabo de rede?";
var noWifi_1 = "O problema foi resolvido reinstalando o wificorp?";
var noWifi_1 = "1. Na area de trabalho apresenta que esta com internet?";
var noWifi_1 = "O problema ocorre em uma rede wifi específica ou em outras também?";
var noWifi_1 = "4. Reinstalar os drivers da placa de rede, o problema persiste?"; //diagnostico comum
var noWifi_3 = "3. Teve algum erro no teste do EPSA?"; //diagnostico comum
var noWifi_4 = "4. 3. Hard reset resolveu o problema?"; //diagnostico comum

//abaixo se trata do fluxograma para desktop SLOWPERFORMANCE
var Slow_1 = "1. O tempo de espera para inicializar eh superior a 5 minutos?";
var Slow_2 = "2. A maquina possui no minimo 16GB de memoria RAM?";
var Slow_3 = "3. Ao colocar um video do youtube em 8k, o equipamento funciona mesmo com baixo desempenho?";
var Slow_4 = "4. O armazenamento cheio em disco esta superior a 80%?";

//abaixo se trata do fluxograma para desktop NO-USB
var noUSB_1 = "1. Hard reset resolveu o problema?"; //diagnostico comum
var noUSB_2 = "2. Alguma porta USB funciona?"; //diagnostico comum
var noUSB_3 = "3. Ao conectar um pen drive, aparece algo na BIOS?";
var noUSB_4 = "4. Reinstalar os drivers da motherboard, o problema persiste?";

//Abaixo os textos da solução final
var textSolution="SOLUTION: Após validar com usuário, caso não haja mais algum outro problema, encerrar o chamado como resolvido sem necessidade de atuação técnica.";
var textKiosko="SOLUTION: Enviar equipamento para quiosque ou acionar garantia.";

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 113) {
var question=prompt(
"Qual o tipo do equipamento?\n\n"+
"1. DESKTOP\n\n"+
"Em breve:\n"+
"2. NOTEBOOK\n"+
"3. IMPRESSORA\n"+
"4. TELEFONIA")};

  if(question=="1"){  //DESKTOP 
var problemaDesktop=prompt("Qual alternativa relata o problema?\n\n"+
"1. NO POWER\n"+ //desktop finalizado
"Em breve:\n"+
"2. NO POST\n"+
"3. NO VIDEO\n"+
"4. NO BOOT\n\n"+
"5. SLOW PERFORMANCE\n"+
"6. NO NETWORK\n"+
"7. NO SPEAKER\n"+
"8. NO USB\n");
diagnosticarProblemaDesktop(problemaDesktop)}

// Function para realizar o diagnóstico específico para DESKTOP
function diagnosticarProblemaDesktop(problemaDesktop) {
    switch (problemaDesktop) {
    case '1': //NOPOWER
    var varApresentaSinalEnergia=prompt(commonQuestion.apresentaSinalEnergia);
    //cadeia de resposta 1
        if(varApresentaSinalEnergia=="1"){ //SIM
    var varCapsLock=prompt(commonQuestion.padraoCapsLock)
    }else if(varApresentaSinalEnergia=="2"){ //NAO
    var varLedFonte=prompt("O led da fonte atrás do gabinete está ligado?\n\n"+"1. SIM\n"+"2. NÃO")};
    
        if(varCapsLock=="1"){ //SIM
    alert("SOLUÇÃO: Transfira para NO VIDEO ou refaça o diagnóstico.")
    }else if(varCapsLock=="2"){ //NAO
    var varLedFonte=prompt("O led da fonte atrás do gabinete está ligado?\n\n"+"1. SIM\n"+"2. NÃO")
    };
    
        if(varLedFonte=="1"){ //SIM
    alert("SOLUÇÃO: Transfira para NO POST ou refaça o diagnóstico.")
    }else if(varLedFonte=="2"){ //NAO
    var varTomadaProblema=prompt(commonQuestion.tomadaProblema)};
    
    //cadeia de resposta 2
        if(varTomadaProblema=="1"){ //SIM
    alert("SOLUÇÃO: Informar o usuário(a) abrir chamado para a infraestrura predial da base reparar o ponto da tomada. Caso haja ainda algum outro problema no equipamento, refaça os testes.")
    }else if(varTomadaProblema=="2"){ //NAO
    var varCaboAlimentacao=prompt(commonQuestion.caboAlimentacao)};
    
        if(varCaboAlimentacao=="1"){ //SIM
    alert("SOLUÇÃO: Informar o usuário(a) que o chamado será direcionado para a Logística substituir o cabo de alimentação. Ou caso haja algum outro problema no equipamento, refaça os testes.")
    }else if(varCaboAlimentacao=="2"){ //NAO
    var varPadraoHardReset=prompt(commonQuestion.padraoHardReset)};
    
    //cadeia de resposta 3
        if(varPadraoHardReset=="1"){ //SIM
    alert(textSolution)
    }else if(varPadraoHardReset=="2"){ //NAO
    var varResetBios=prompt("O reset da BIOS resolveu o problema? Pressione Ctrl+Shift+Esc e tente ligar normalmente mantendo estas teclas pressionadas.\n\n"+"1. SIM\n"+"2. NÃO\n")};
        if(varResetBios=="1"){ //SIM
    alert(textSolution)
    }else if(varResetBios=="2"){ //NAO
    alert(textKiosko)};
    break;
    case '2': //NOPOST
    // Realizar diagnóstico para problema de falta de sinal de vídeo
    // Implementar os testes e ações correspondentes aqui
    break;
    case '3': //NOVIDEO
    // Realizar diagnóstico para problema de falha de inicialização
    // Implementar os testes e ações correspondentes aqui
    break;
    case '4': //NOBOOT
        // Realizar diagnóstico para problema de falha de inicialização
        // Implementar os testes e ações correspondentes aqui
    break;
}};

    if(question=="2"){ //NOTEBOOK
var problemaNotebook=prompt(
"Em breve:\n"+
"1. NO POWER\n"+ 
"2. NO POST\n"+
"3. NO VIDEO\n"+
"4. NO BOOT\n"+
"5. BUTTERY\n"+ 
"6. SLOW PERFORMANCE\n"+
"7. NO NETWORK\n"+
"8. NO SPEAKER\n"+
"9. NO USB\n"+
"10. NO CHARGER\n"+
"11. NO CAMERA\n"+
"12. NO TOUCHPAD/KEYBOARD")
diagnosticarProblemaNotebook(problemaNotebook)}; 

// Function para realizar um diagnóstico específico para NOTEBOOK
function diagnosticarProblemaNotebook(problemaNotebook) {
    switch (problemaNotebook) {
        case '1': //NOPOWER
        // Realizar diagnóstico para problema de falta de sinal de vídeo
        // Implementar os testes e ações correspondentes aqui
        break;
        case '2': //NOPOST
        // Realizar diagnóstico para problema de falta de sinal de vídeo
        // Implementar os testes e ações correspondentes aqui
        break;
        case '3': //NOVIDEO
        // Realizar diagnóstico para problema de falha de inicialização
        // Implementar os testes e ações correspondentes aqui
        break;
        case '4': //NOBOOT
            // Realizar diagnóstico para problema de falha de inicialização
            // Implementar os testes e ações correspondentes aqui
        break;
    }};
});