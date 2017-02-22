
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
var contadorTela = 0;
var idioma = "Portuguese";
var dict;
var currentView;
var controleID = "";
var player = "";
var posicao = "";


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

showView("14");

// Script para mudar a configuração do jogo
function mudaConfig (tipo, lado){

	var imgSource = "imagens"+'/'+"";

	if(setaControle ("","tela6")){		

		if(tipo == "bola"){
		
			if(lado == "esq"){

				// Verifica o contador o procede com os dados necessários
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
			debugTextos(imgSource+"amostraBola"+contadorBola+'.png');

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
			debugTextos(imgSource+"amostraCenario"+contadorCenario+'.png');	

		}

	}
} 
	


// Script para mudar a imagem dos personagens na escolha
function mudaImg (tipo, lado, jog){	
	
	// Variáveis usadas para controlar as imagens exibidas
	var imgJog;
	var imgPe;
	var pathJog;
	var pathPe;
	
	if(setaControle (jog, "tela7")){
		
		// Verifica se o que está sendo trocado o corpo ou o pé
		if(tipo == "corpo"){
			
			// Carrega o path das imagens dos corpos dos jogadores
			imgJog = "imagens"+'/'+"amostraCorpo";
			
			
			// Verifica o lado que foi clicado na seta para adicionar ou subtrair uma imagem.
			if(lado == "esquerdo"){
		
				// Verifica o contador o procede com os dados necessarios
				if (contadorJog <= 1){
				
					contadorJog = 13;
				
				}else{
				
					contadorJog = contadorJog - 1;
				
				}

				// Joga o caminho e o contador para a variavel pathJog
				pathJog = imgJog+contadorJog;
			
				corpoJog.src = pathJog+'.png';
				
			}else{
				
				if (contadorJog >= 13){
				
					contadorJog = 1;
				
				}else{
				
					contadorJog = contadorJog + 1;
				
				}

				pathJog = imgJog+contadorJog;
		
				corpoJog.src = pathJog+'.png';			
				
			}
			
			debugTextos(pathJog);
			
		} else {
			
			imgPe = "imagens"+'/'+"amostraPe";
			
			if (lado == "esquerdo"){
				
				if(contadorPe <= 0){
				
					contadorPe = 11;
				
				}else{
				
					contadorPe = contadorPe - 1;
				
				}
		
				pathPe = imgPe+contadorPe;
		
				peJog.src = pathPe+'.png';
				
			}else{
				
				if(contadorPe >= 11){
				
					contadorPe = 0;
				
				}else{
				
					contadorPe = contadorPe + 1;
				
				}
		
				pathPe = imgPe+contadorPe;
		
				peJog.src = pathPe+'.png';
				
			}			

			//debugTextos(pathPe);
			
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
			}
			
		}
		
	}else{
		
		console.log("Erro ao buscar objetos de imagem do controle "+jog);
		
	}
}

// Função para dar debug no console dos textos no desenvolvimento
function debugTextos (texto)
{	
	console.log(texto);	
}

// Função que manda a mensagem para o AirConsole.
function mandaMsg(msg)
{
	airconsole.message(AirConsole.SCREEN, {			
		message: msg			
	});	
}

// Escuta por mudanças de views no controle
airconsole.onMessage = function(device_id, data) {
	
		
		//Cria variável que vai receber as mensagens do AirConsole
		var dados = data;
		var msgDados = dados.split(":");		
		
	
	}
	