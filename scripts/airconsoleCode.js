
// Instanciado objeto AirConsole
var airconsole = new AirConsole({"orientation":"landscape"});

// Contadores de identificação das imagens para personalizações no construct
var contadorJog = 1;
var contadorPe = 1;
var contadorBola = 1;
var contadorCenario = 1;

// Busca os elementos a serem trocados na view selecionada.
var peJog; 
var corpoJog;
var bola;
var cenario; 
var peVelocidade;
var peForca;
var pePrecisao; 
var pePulo;
var currentView;
var master = "não";

//Função para controlar as views do controle
var showView = function(id) {
	var view = document.getElementById(id);
	var all_views = document.querySelectorAll('.view');
	// Esconde todas as views
	for (var i=0; i<all_views.length; i++) {
		all_views[i].style.display = 'none';
	}
 
	// Mostra apenas a view que o construct enviou para a tela
	view.style.display = 'block';
	
	// Adiciona a view atual a variável de controle de view
	currentView = id;
	
};

showView("7");//troca tela

var sendHandshake = function() {
    airconsole.message(AirConsole.SCREEN, {
      handshake: true
    });
  };

 airconsole.onReady = function() {
    sendHandshake();
 };
 
// Script para mudar a configuração do jogo
function mudaConfig (tipo, lado){

	var imgSource = "imagens"+'/'+"";
	bola = document.getElementById("btnbola");
	cenario = document.getElementById("btncampo");

		if(tipo == "bola"){
		
			if(lado == "esquerdo"){

				// Verifica o contador o procede com os dados necessarios
				if (contadorBola <= 0){

					contadorBola = 21;

				}else{

					contadorBola = contadorBola - 1;

				}

			}else{

				// Verifica o contador o procede com os dados necessarios
				if (contadorBola >= 21){

					contadorBola = 0;

				}else{

					contadorBola = contadorBola + 1;

				}

			}

			// Joga o caminho e o contador para a variavel pathJog			
			bola.src = imgSource+"amostraBola"+contadorBola+'.png';			
			console.log(imgSource+"amostraBola"+contadorBola+'.png');

		}else{

			if(lado == "esq"){

				// Verifica o contador o procede com os dados necessarios
				if (contadorCenario <= 0){

					contadorCenario = 5;

				}else{

					contadorCenario = contadorCenario - 1;

				}

			}else{

				// Verifica o contador o procede com os dados necessarios
				if (contadorCenario >= 5){

					contadorCenario = 1;

				}else{

					contadorCenario = contadorCenario + 1;

				}

			}

			// Joga o caminho e o contador para a variavel pathJog			
			cenario.src = imgSource+"amostraCenario"+contadorCenario+'.png';			
			console.log(imgSource+"amostraCenario"+contadorCenario+'.png');	

		}

}

// Script para mudar a imagem dos personagens na escolha
function mudaImg (tipo, lado){	

// Variáveis usadas para controlar as imagens exibidas
var imgJog;
var imgPe;
var pathJog;
var pathPe;

corpoJog = document.getElementById("btn-corpo");
peJog = document.getElementById("btn-pe");
peVelocidade = document.getElementById("imgVelocidade");
pePrecisao = document.getElementById("imgPrecisao");
peForca = document.getElementById("imgForca");
pePulo = document.getElementById("imgPulo");

	// Verifica se o que está sendo trocado o corpo ou o pé
	if(tipo == "corpo"){

		// Carrega o path das imagens dos corpos dos jogadores
		imgJog = "imagens"+'/'+"corpo";


		// Verifica o lado que foi clicado na seta para adicionar ou subtrair uma imagem.
		if(lado == "esquerdo"){

			// Verifica o contador o procede com os dados necessarios
			if (contadorJog <= 0){

				contadorJog = 28;

			}else{

				contadorJog = contadorJog - 1;

			}

		// Joga o caminho e o contador para a variavel pathJog
		pathJog = imgJog+contadorJog;

		corpoJog.src = pathJog+'.png';

		}else{

			if (contadorJog >= 28){

				contadorJog = 0;

			}else{

				contadorJog = contadorJog + 1;

			}

		pathJog = imgJog+contadorJog;

		corpoJog.src = pathJog+'.png';			

		}	

	console.log(pathJog);
	
	} else {

		imgPe = "imagens"+'/'+"pe";

		if (lado == "esquerdo"){

			if(contadorPe <= 0){

				contadorPe = 22;

			}else{

				contadorPe = contadorPe - 1;

			}

			pathPe = imgPe+contadorPe;

			peJog.src = pathPe+'.png';

		}else{

			if(contadorPe >= 22){

				contadorPe = 0;

			}else{

				contadorPe = contadorPe + 1;

			}

			pathPe = imgPe+contadorPe;

			peJog.src = pathPe+'.png';

		}			

	console.log(pathPe);

	}

	switch(contadorPe){

		case 0: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica4.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 1: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica6.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 2: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica6.png";
				peForca.src = "imagens"+'/'+"refEstatistica6.png";
				pePulo.src = "imagens"+'/'+"refEstatistica3.png";
				break;
		case 3: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica4.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 4: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica3.png";
				peForca.src = "imagens"+'/'+"refEstatistica3.png";
				pePulo.src = "imagens"+'/'+"refEstatistica6.png";
				break;
		case 5: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica5.png";
				break;
		case 6: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica6.png";
				peForca.src = "imagens"+'/'+"refEstatistica3.png";
				pePulo.src = "imagens"+'/'+"refEstatistica3.png";
				break;						
		case 7: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica4.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica6.png";
				break;
		case 8: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica3.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;						
		case 9: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica6.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 10: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica5.png";
				break;
		case 11: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica4.png";
				pePulo.src = "imagens"+'/'+"refEstatistica3.png";
				break;
		case 12: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica4.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 13: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica6.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 14: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica6.png";
				peForca.src = "imagens"+'/'+"refEstatistica6.png";
				pePulo.src = "imagens"+'/'+"refEstatistica3.png";
				break;
		case 15: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica4.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 16: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica3.png";
				peForca.src = "imagens"+'/'+"refEstatistica3.png";
				pePulo.src = "imagens"+'/'+"refEstatistica6.png";
				break;
		case 17: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica5.png";
				break;
		case 18: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica6.png";
				peForca.src = "imagens"+'/'+"refEstatistica3.png";
				pePulo.src = "imagens"+'/'+"refEstatistica3.png";
				break;						
		case 19: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica4.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica6.png";
				break;
		case 20: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica3.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;						
		case 21: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica6.png";
				pePulo.src = "imagens"+'/'+"refEstatistica4.png";
				break;
		case 22: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica3.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica5.png";
				pePulo.src = "imagens"+'/'+"refEstatistica5.png";
				break;
		case 23: 
				peVelocidade.src = "imagens"+'/'+"refEstatistica6.png";
				pePrecisao.src = "imagens"+'/'+"refEstatistica5.png";
				peForca.src = "imagens"+'/'+"refEstatistica4.png";
				pePulo.src = "imagens"+'/'+"refEstatistica3.png";
				break;
	}	
	
}

// Função que manda a mensagem para o AirConsole.
function mandaMsg(msg)
{
	airconsole.message(AirConsole.SCREEN, {			
		message: msg			
	});	
}

function stringToJson(texto) {//funcao para converter string para objeto json
    
    
    var jsonString = JSON.parse(texto);
    var organizaJson = "{\n";
    for (var i = 0; i < Object.keys(jsonString).length; i++) { //retorna a quantidade de chaves do arquivo json 
        organizaJson += '"' + Object.getOwnPropertyNames(jsonString)[i] + '":"' + Object.values(jsonString)[i] + '",' + "\n"; //recupera valores dos campos de cada indice
    }
    organizaJson += "}";
    //console.log(organizaJson);

    return organizaJson;
}

function stringToJson(texto) {//funcao para converter string para objeto json
        
    var jsonString = JSON.parse(texto);
    jsonString = jsonString.data;
    
	return jsonString;
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function aplicaTextos (tag, value){
	
	sleep(100).then(() => {
		
		document.getElementById(tag).textContent = value;
		
	});
	
}

function aplicaFotos (tag, value){
	
	sleep(100).then(() => {
		
		document.getElementById(tag).src = value;
		
	});
	
}

// Escuta por mudanças de views no controle
airconsole.onMessage = function(device_id, data) {	
	
	if (data.handshake) {
		
		sendHandshake();
		
	}else{
		
		var dict = {};		
		dict = stringToJson(data);
		
		if(dict.master){
			
			master = dict.master;
			
		}
		
		if(dict.view){
			
			if(dict.view == 5){				
				if(master == "não"){
					document.getElementById("t5-btn-voltar").style.display = "none";
					document.getElementById("t5-btn-avancar").style.display = "none";					
				}
			}
			
			if(dict.view == 6){				
				if(master == "não"){
					document.getElementById("t6-btn-voltar").style.display = "none";				
				}				
			}
			showView(dict.view);
			
		}
		
		if(dict.posicaoA){

			if(dict.posicaoA == "IA"){
				
				document.getElementById("posicao1").src = "imagens/iaAtivado.png";
				
			}else if(dict.posicaoA == "jogador"){
				
				document.getElementById("posicao1").src = "imagens/playerAtivado.png";
				
			}else{
				
				document.getElementById("posicao1").src = "imagens/bloqueado.png";
				
			}
		
		}
		if(dict.posicaoB){
			
			if(dict.posicaoB == "IA"){
				
				document.getElementById("posicao2").src = "imagens/iaAtivado.png";
				
			}else if(dict.posicaoB == "jogador"){
				
				document.getElementById("posicao2").src = "imagens/playerAtivado.png";
				
			}else{
				
				document.getElementById("posicao2").src = "imagens/bloqueado.png";
				
			}
			
		}
		if(dict.posicaoC){
			
			if(dict.posicaoC == "IA"){
				
				document.getElementById("posicao3").src = "imagens/iaAtivado.png";
				
			}else if(dict.posicaoC == "jogador"){
				
				document.getElementById("posicao3").src = "imagens/playerAtivado.png";
				
			}else{
				
				document.getElementById("posicao3").src = "imagens/bloqueado.png";
				
			}
			
		}
		if(dict.posicaoD){
			
			if(dict.posicaoD == "IA"){
				
				document.getElementById("posicao4").src = "imagens/iaAtivado.png";
				
			}else if(dict.posicaoD == "jogador"){
				
				document.getElementById("posicao4").src = "imagens/playerAtivado.png";
				
			}else{
				
				document.getElementById("posicao4").src = "imagens/bloqueado.png";
				
			}
			
		}		
	
	if(dict['exceptions-title']){ aplicaTextos("exceptions-title", dict['exceptions-title']); }
	if(dict['idioma-title']){ aplicaTextos("idioma-title", dict['idioma-title']); }
	if(dict['idioma-title-1']){ aplicaTextos("idioma-title-1", dict['idioma-title']); }
	if(dict['modo-title']){ aplicaTextos("modo-title", dict['modo-title']); }
	if(dict['modo-title-1']){ aplicaTextos("modo-title-1", dict['modo-title-1']); }
	if(dict['cenario-title']){ aplicaTextos("cenario-title", dict['cenario-title']); }	
	if(dict['cenario-title-1']){ aplicaTextos("cenario-title-1", dict['cenario-title-1']); }
	if(dict['time-title']){ aplicaTextos("time-title", dict['time-title']); }
	if(dict['msg-position-A']){ aplicaTextos("msg-position-A", dict['msg-position-A']); }
	if(dict['msg-position-B']){ aplicaTextos("msg-position-B", dict['msg-position-B']); }
	if(dict['msg-position-C']){ aplicaTextos("msg-position-C", dict['msg-position-C']); }
	if(dict['msg-position-D']){ aplicaTextos("msg-position-D", dict['msg-position-D']); }
	if(dict['personalizacao-title']){ aplicaTextos("personalizacao-title", dict['personalizacao-title']); }
	if(dict['msg-velocidade']){ aplicaTextos("msg-velocidade", dict['msg-velocidade']); }
	if(dict['msg-precisao']){ aplicaTextos("msg-precisao", dict['msg-precisao']); }
	if(dict['msg-forca']){ aplicaTextos("msg-forca", dict['msg-forca']); }
	if(dict['msg-pulo']){ aplicaTextos("msg-pulo", dict['msg-pulo']); }
	if(dict['aguardando-title']){ aplicaTextos("aguardando-title", dict['aguardando-title']); }
	if(dict['msg-posicao01']){ aplicaTextos("msg-posicao01", dict['msg-posicao01']); }
	if(dict['msg-posicao02']){ aplicaTextos("msg-posicao02", dict['msg-posicao02']); }
	if(dict['msg-posicao03']){ aplicaTextos("msg-posicao03", dict['msg-posicao03']); }
	if(dict['msg-posicao04']){ aplicaTextos("msg-posicao04", dict['msg-posicao04']); }	
	if(dict['pic-posicao01']){ aplicaFotos("pic-posicao01", dict['pic-posicao01']); }
	if(dict['pic-posicao02']){ aplicaFotos("pic-posicao02", dict['pic-posicao02']); }
	if(dict['pic-posicao03']){ aplicaFotos("pic-posicao03", dict['pic-posicao03']); }
	if(dict['pic-posicao04']){ aplicaFotos("pic-posicao04", dict['pic-posicao04']); }
	if(dict['control-title']){ aplicaTextos("control-title", dict['control-title']); }
	if(dict['movimento']){ aplicaTextos("movimento", dict['movimento']); }
	if(dict['pulo']){ aplicaTextos("pulo", dict['pulo']); }
	if(dict['chute']){ aplicaTextos("chute", dict['chute']); }
	if(dict['pause-title']){ aplicaTextos("pause-title", dict['pause-title']); }
	if(dict['pause-encerra-title']){ aplicaTextos("pause-encerra-title", dict['pause-encerra-title']); }
	if(dict['estatisticas-title']){ aplicaTextos("estatisticas-title", dict['estatisticas-title']); }
	if(dict['t13-msg-aguarde']){ aplicaTextos("t13-msg-aguarde", dict['t13-msg-aguarde']); }
	if(dict['t13-control-title']){ aplicaTextos("t13-control-title", dict['t13-control-title']); }
	if(dict['master-title']){ aplicaTextos("master-title", dict['master-title']); }
	if(dict['desistir-title']){ aplicaTextos("desistir-title", dict['desistir-title']); }
	if(dict['t11-master-title']){ aplicaTextos("t11-master-title", dict['t11-master-title']); }
	if(dict['finish-title']){ aplicaTextos("finish-title", dict['finish-title']); }
	if(dict['desconection-title']){ aplicaTextos("desconection-title", dict['desconection-title']); }
	if(dict['desconection-sub-title']){ aplicaTextos("desconection-sub-title", dict['desconection-sub-title']); }

	}	
	
}

//################################## CONFIGURAÇÃO DE PERSONAGEM DO CONTROLE ########################################################

// Botão esquerdo para trocar o corpo do personagem
$('#btncorpo-ESQ').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaImg("corpo","esquerdo");
		
});
// Botão direito para trocar o corpo do personagem
$('#btncorpo-DIR').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaImg("corpo","direito");
		
});

// Botão esquerdo para trocar o pe do personagem
$('#btnpe-ESQ').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaImg("pe","esquerdo");
		
});
// Botão direito para trocar o pe do personagem
$('#btnpe-DIR').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaImg("pe","direito");
		
});

//################################## FIM DA CONFIGURAÇÃO DO CONTROLE #############################################################

//################################## CONFIGURAÇÃO DE CLIMA DO CONTROLE ###########################################################

// Botão esquerdo para trocar o corpo do personagem
$('#btncampo-ESQ').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaConfig("campo","esquerdo");
		
});
// Botão direito para trocar o corpo do personagem
$('#btncampo-DIR').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaConfig("campo","direito");
		
});

// Botão esquerdo para trocar o pe do personagem
$('#btnbola-ESQ').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaConfig("bola","esquerdo");
		
});
// Botão direito para trocar o pe do personagem
$('#btnbola-DIR').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		mudaConfig("bola","direito");
		
});

//################################## FIM DA CONFIGURAÇÃO DO CLIMA ##############################################################

//################################## MASTER ####################################################################################

// Botão direito para trocar o pe do personagem
$('#master-screen').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
						
		mandaMsg("master:master:master");		
		
});	

//################################## BOTõES DE IDIOMA T2##########################################################################		

// Botão de selecao de idioma US
$('#btnUS').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("idioma:en:0");		
		
});

// Botão de selcao de idioma PT/BR
$('#btnPT').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("idioma:ptbr:0");	
		
});

// Botão voltar tela anterior
$('#t2-btn-voltar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("idioma:voltar:voltar");	
		
});

//################################## BOTõES DE SELEÇAO DE MODO VS E TORNEIO T3##########################################################################		

// Botão para selecao de modo VS
$('#btnVersus').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("modo:versus:versus");		
		
});

// Botão para selecao de modo Torneio
$('#btnTorneio').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("modo:torneio:torneio");	
		
});

// Botão para voltar tela anterior
$('#t3-btn-voltar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("modo:voltar:voltar");	
		
});

//################################## BOTõES DE SELEÇAO CAMPOS E TIPO DE BOLAS T4 ##########################################################################		

//**********************************Configurar confirmação/negação******************************************
// Botão para voltar tela anterior
$('#t4-btn-voltar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("configj:voltar:0");	
		
});
// Botão avançar proxima tela
$('#t4-btn-avancar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("configj:"+cenario+":"+bola);
		
});


//################################## BOTõES DE SELEÇAO DE POSICAO DE PLAYERS T5 ##########################################################################		

//**********************************Configurar Posicao******************************************
// Botão selecao posicao 01
$('#btnA').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("posselecionada:A:0");//b/c/d
		console.log("testando");
		
});

// Botão selecao posicao 03
$('#btnC').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("posselecionada:C:0");//b/c/d
		console.log("testando");
		
});

// Botão selecao posicao 04
$('#btnD').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("posselecionada:D:0");//b/c/d
		console.log("testando");
		
});

// Botão selecao posicao 02
$('#btnB').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("posselecionada:B:0");//b/c/d
		console.log("testando");
		
});


//**********************************Configurar confirmação/negação******************************************
// Botão para voltar tela anterior
$('#t5-btn-voltar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("posselecionada:voltar:0");
		
});
// Botão avançar proxima tela
$('#t5-btn-avancar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("posselecionada:confirma:0");
		
});


//################################## BOTõES DE SELEÇAO PERSONAGENS E PES T6 ##########################################################################		

//**********************************Configurar confirmação/negação******************************************
// Botão para voltar tela anterior
$('#t6-btn-voltar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("configp:voltar:0");
		
});
// Botão avançar proxima tela
$('#t6-btn-avancar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("configp:"+corpoJog+":"+peJog);
		mandaMsg("jogadorpronto:1:0");
		
});

//################################## BOTõES DE AGUADAR INDECISOS T7 ##########################################################################		

//**********************************Status de jogadores******************************************
// Botão aguardar jogador posicao 01
$('#btn-status-posicao01').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
});
// Botão aguardar jogador posicao 03
$('#btn-status-posicao03').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
	
});
// Botão aguardar jogador posicao 04
$('#btn-status-posicao04').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			

});
// Botão aguardar jogador posicao 02
$('#btn-status-posicao02').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();		
		
});


//**********************************Configurar confirmação/negação******************************************
// Botão para voltar tela anterior
$('#t7-btn-voltar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("configp:voltar:0");
		
});
// Botão avançar proxima tela
$('#t7-btn-avancar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("configp:confirma:0");
		
});

//################################## BOTõES DE TUTORIAL COMO JOGAR T8 ##########################################################################		

//**********************************Status de jogadores******************************************
// Botão aguardar jogador posicao 01
$('#btn-movimento').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("move:0:0");//0/1/2/3
		
});

$('#btn-pulo').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("move:0");//0/1/2/3
		
});

$('#btn-chute').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("move:0:0");//0/1/2/3
		
});

//**********************************Configurar confirmação/negação******************************************
// Botão para voltar tela anterior
$('#t8-btn-pausa').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("btpause:1:0");
		
});


//################################## BOTõES DE JOGO PAUSADO T9 ##########################################################################		

//**********************************Escolha******************************************
// Botão continuar
$('#btn-continuar').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("pause:0:0");
		
});
// Botão retorna menu
$('#btn-menu').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("pause:1:0");
		
});

//################################## BOTõES DE ENCERRAMENTO DE PARTIDA T10 ##########################################################################		

//**********************************Escolha******************************************
// Botão confirmar encerramento
$('#t10-btn-sim').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("pauseesc:1:0");
		
});
// Botão não encerramento de partida
$('#t10-btn-nao').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("pauseesc:0:0");
		
});

//################################## BOTõES DE ENCERRAMENTO DE PARTIDA T13 ##########################################################################		

//**********************************Start de partida******************************************
// Botão confirmar
$('#t13-btn-ok').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("comecar:1:1");
		
});


//################################## BOTõES DE ABANDONO DE PARTIDA T14 ##########################################################################		

//**********************************Escolha******************************************
// Botão confirmar abandono de partida
$('#t14-btn-sim').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("abandono:1:0");
		
});
// Botão não abandonar partida
$('#t14-btn-nao').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("abandono:0:0");
		
});

//################################## BOTõES DE FINAL DE TORNEIO T17 ##########################################################################		

//**********************************Escolha******************************************
// Botão reiniciar torneio
$('#t17-btn-reiniciar-torneio').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("fimt:1:0");
		
});
$('#t17-btn-voltar-menu').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("fimt:0:0");
		
});

//################################## BOTõES DE JOGADOR DESCONECTADO-AGUARDAR/VOLTAR MENU T18##########################################################################		

//**********************************Escolha******************************************
// Botão voltar para menu
$('#t18-btn-voltar-menu').on('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();			
			
		mandaMsg("abandonou:1:1");
		
});

//################################## FIM DA CONFIGURAÇÃO DO IDIOMA #############################################################