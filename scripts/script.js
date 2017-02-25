// Cria as vari�veis necess�rias para os comandos a ser executado
var gamma;
var beta;

function carregarScript (scriptAdded, acJS){
//Fun��o para carregar os scripts de forma assincrona

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptAdded;

    // Fun��es para compatibilidade com browser, vinculado a um evento de callback
    script.onreadystatechange = handler;
    script.onload = handler;

    // Inicia o carregamento do script
    head.appendChild(script);

    function handler(){
       console.log(scriptAdded + ' adicionado :)');		

	   //Testa se o script carregado � do AirConsole e carrega o script de comunica��o com o jogo
		if(acJS == true){
			carregarScript("scripts/airconsoleCode.js",false)
		}
    }
}

// Chama a fun��o que pr�-carrega os scripts necess�rios para a p�gina
carregarScript("scripts/jquery.mobile-1.4.5.min.js",false)
carregarScript("scripts/jquery-1.11.3.min.js",false)
carregarScript("scripts/airconsole-1.7.0.js",true)

 
// Fun��o de inicia��o da p�gina
function init()
{	
    
    if (window.DeviceOrientationEvent) {
		
		window.addEventListener("deviceorientation", function(event) 
		{
			beta = Math.round(event.beta);
			gamma = Math.round(event.gamma);
        }
                               )
    };
	
    update();
}
 
//Executa peri�dicamente para testar as posi��es do celular, se atendido chama a fun��o mandaMsg do airconsoleCode.js que se comunica com o jogo
function update()
{

	//$("p").text(beta + " - " + gamma);

		if(gamma < -75 && gamma > -90){
			
				mandaMsg("move:2");
							
		}else if(gamma > 45 && gamma < 90){
				
				mandaMsg("move:2");
								
		}else if (gamma > -30 && gamma < 0){
			
				mandaMsg("move:4");
								
		}else if(gamma > 0 && gamma < 45){
			
				mandaMsg("move:4");
							
		}

		
		if(beta < -20){
			
			mandaMsg("move:1");
			
		}else if (beta > 20){
			
			mandaMsg("move:3");
			
		}else{
			
			mandaMsg("move:0");
		
		}
		
	setTimeout(function(){
	update()},100)	
};

